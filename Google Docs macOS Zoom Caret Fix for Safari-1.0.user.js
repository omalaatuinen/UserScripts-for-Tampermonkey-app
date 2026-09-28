// ==UserScript==
// @name         Google Docs macOS Zoom Caret Fix
// @description  Fixes Google Docs caret tracking with macOS Accessibility Zoom in Safari. Prevents Zoom from jumping to the top-left while typing by synchronizing Google Docs' hidden text-input iframe with the visible text caret.
// @version      1.0
// @match        https://docs.google.com/document/*
// @run-at       document-idle
// ==/UserScript==

/*
 * Google Docs uses an off-screen iframe as its focused text-input target,
 * while the visible text caret is rendered separately.
 *
 * In Safari, macOS Accessibility Zoom may follow the position of this
 * off-screen focused iframe instead of the visible caret, causing the
 * zoomed view and pointer to jump to the top-left while typing.
 *
 * This script keeps the hidden text-input iframe positioned at the
 * visible Google Docs caret so macOS Zoom follows the actual typing
 * position.
 */

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
