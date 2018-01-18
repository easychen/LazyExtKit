# LazyExtKit

LazyExtKit 是一个简单的 Chrome 插件新手包。

它主要提供以下两个功能：

* 点击浏览器上的插件图标，运行 run.js 文件中的代码。
* 当访问特定 URL 时，自动加载 CSS 和 JS（ 自带 jQuery ）。

功能一默认生效；功能二需要进行如下修改才能正常工作：

1. 打开 manifest.json 将 25~35 行的注释去掉
1. 修改 weibo.com 为要自动加载脚本的域名
1. 在 app.css 和 app.js 中写入要加载样式和 JS 代码。

通过以上两个功能，可以实现类似 Bookmarklet 分享、微博去广告 等效果。
如果你想实现的功能不在此范围之类，那么还是去读 Chrome 的开发者文档来修改吧。🤣 
