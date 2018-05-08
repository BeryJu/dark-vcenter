// Dark-vCenter JS inject

// Check if we're actually in vCenter
// this checks that the 'vSphere Client' span exists
if (document.querySelector("[aria-label='Product home']") !== null) {
    var cssFiles = [
        'css/clr-ui-dark.css',
        'css/fixes.css',
        'css/datagrid-fix.css',
        'css/icon-fix.css',
        'css/scrollbar-fix.css',
        'css/stack-fix.css',
        'css/treeview-fix.css',
    ];
    cssFiles.forEach(function (styleSheet) {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.extension.getURL(styleSheet);
        (document.head || document.documentElement).appendChild(style);
    });
}
