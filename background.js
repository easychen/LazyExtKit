// 当插件图标被点击后，将调用这个方法
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    // 运行 run.js 中的代码
    chrome.tabs.executeScript( activeTab.id , {file:'run.js'});
});

