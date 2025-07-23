/// 右键菜单

chrome.contextMenus.create({
    id: 'generate_commit_template',
    title: '生成提交模板',
    contexts: ['all'],
    documentUrlPatterns: ['https://jira.meitu.com/*']
}, () => {
    if (chrome.runtime.lastError) {
        console.error('Error creating context menu item: ', chrome.runtime.lastError);
    }
});

chrome.contextMenus.create({
    id: 'just_copy_bug_id',
    title: '复制 BugID',
    contexts: ['all'],
    documentUrlPatterns: ['https://jira.meitu.com/*']
}, () => {
    if (chrome.runtime.lastError) {
        console.error('Error creating context menu item: ', chrome.runtime.lastError);
    }
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === 'generate_commit_template') {
        sendMessageToContentScript({ cmd: 'crawl' });
    } else if (info.menuItemId === 'just_copy_bug_id') {
        sendMessageToContentScript({ cmd: 'bug_id' });
    }
});

/// 快捷键响应

chrome.commands.onCommand.addListener(function (command) {
	if (command == "generate_commit_template") {
		sendMessageToContentScript({
			cmd: 'crawl',
		}, function (response) { });
	} else if (command == "just_copy_bug_id") {
		sendMessageToContentScript({
			cmd: 'bug_id',
		}, function (response) { });
	}
});

function sendMessageToContentScript(message, callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
			if (callback) callback(response);
		});
	});
}
