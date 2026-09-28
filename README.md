# Accessibility and other practical useful Userscripts

A collection of userscripts that fix or improve accessibility or other issues on websites and web applications.

## Scripts

### Google Docs macOS Zoom Caret Fix For Safari

Fixes an issue in Google Docs when using Safari with macOS Accessibility Zoom and keyboard focus following enabled. While typing, Zoom may incorrectly jump to the top-left of the screen instead of following the visible text caret.

The script synchronizes Google Docs' hidden text-input iframe with the visible caret, allowing macOS Zoom to follow the actual typing position.

**Environment tested:**
- macOS
- Safari
- Google Docs
- macOS Accessibility Zoom with focus/caret following enabled
- Tampermonkey extension for Safari. One can use also other userscripts-supporting extensions.

File: `Google-Docs-macOS-Zoom-Caret-Fix-for-Safari-1.0.user.js`
