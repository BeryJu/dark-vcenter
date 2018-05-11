// Dark-vCenter JS inject

var injectCss = function (file) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL(file);
    (document.head || document.documentElement).appendChild(style);
}

// Check if we're actually in vCenter
// this checks that the 'vSphere Client' span exists
if (document.querySelector("[aria-label='Product home']") !== null) {
    var cssFiles = [
        'css/clr-ui-dark.css',
        'css/fixes.css',
        'css/vx-fix.css',
        'css/topology-fix.css',
        'css/datagrid-fix.css',
        'css/dialog-fix.css',
        'css/graph-fix.css',
        'css/icon-fix.css',
        'css/scrollbar-fix.css',
        'css/stack-fix.css',
        'css/treeview-fix.css',
    ];
    cssFiles.forEach(function (file) {
        injectCss(file);
    });
}

// Konami Code mechanism
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCodePosition = 0;
document.addEventListener('keydown', function (e) {
    if (e.keyCode == konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            injectCss('css/konami-fix.css');
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});
