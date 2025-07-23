# GoFixing

从 [JIRA](http://jira.meitu.com) 快速生成 Bugfix 提交模板。

![preview](/demo.gif)

## Change Log

#### [1.0.1](/uploads/0bad03f0c8b0012dc3b1d76685e91ee1/GoFixing_1.0.1.crx)

- 操作完成的 alert 改为 toast 

#### [1.0.0](/uploads/d7e78a133aebf5aac5e190099495803c/GoFixing.crx)

- 生成 Bugfix 提交模板
- 复制 BugID

## 使用方法

1. 添加 [Chrome 插件](https://chrome.google.com/webstore/detail/gofixing/hopfgcebjkiihbkgbdlpidlllkogbeid)；

2. 打开 [JIRA](http://jira.meitu.com) 上对应的 Bug 描述页，右键菜单，「GoFixing」：

    1. 生成提交模板（快捷键：`cmd` + `shift` + `K`）
    
    2. 复制 BugID（快捷键：`cmd` + `shift` + `J`）

3. Git（粘贴 -> 修改 -> 提交）。

## 设置

### 1. 本地设置

点击 Chrome 插件菜单中的「GoFixing」图标，进入选项。
     
目前支持设置项：
    
- 操作完成后是否提示


### 2. 快捷键设置

进入 [chrome://extensions/shortcuts](chrome://extensions/shortcuts) 页面设置:

![Setting](/setting.png)


