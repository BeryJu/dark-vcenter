// Dark-vCenter JS inject

// Check if we're actually in vCenter
// this checks that the 'vSphere Client' span exists
if (document.querySelector("[aria-label='Product home']") !== null) {
    ['css/clr-ui-dark.css', 'css/fixes.css'].forEach(function (styleSheet) {
        var style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = chrome.extension.getURL(styleSheet);
        (document.head || document.documentElement).appendChild(style);
    });
}
