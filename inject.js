['css/clr-ui-dark.css', 'css/fixes.css'].forEach(function (styleSheet) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL(styleSheet);
    (document.head || document.documentElement).appendChild(style);
});
