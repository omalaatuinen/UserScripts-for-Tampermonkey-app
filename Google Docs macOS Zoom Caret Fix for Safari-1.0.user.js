// ==UserScript==
// @name         Google Docs macOS Zoom Caret Fix
// @description  Makes macOS Accessibility Zoom follow the visible Google Docs text caret in Safari.
// @version      1.0
// @match        https://docs.google.com/document/*
// @run-at       document-idle
// ==/UserScript==

(() => {
    'use strict';

    function syncFocusTarget() {
        const frame = document.querySelector('.docs-texteventtarget-iframe');
        if (!frame) return;

        const caret = [...document.querySelectorAll('.kix-cursor-caret')]
            .find(el => {
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0;
            });

        if (!caret) return;

        const r = caret.getBoundingClientRect();

        frame.style.setProperty('top', `${r.top}px`, 'important');
        frame.style.setProperty('left', `${r.left}px`, 'important');
        frame.style.setProperty('width', '1px', 'important');
        frame.style.setProperty('height', `${r.height}px`, 'important');
    }

    setInterval(syncFocusTarget, 30);
})();