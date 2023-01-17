// ==UserScript==
// @name         Reverso Context forward slash to focus search bar
// @namespace    https://github.com/sahlaysta/
// @version      0.1
// @description  Focuses the search bar when forward slash is pressed, like on most sites
// @author       sahlaysta
// @match        https://context.reverso.net/*
// @icon         https://cdn.reverso.net/context/v62110/images/reverso180.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const searchBar = document.querySelector('#search-input').firstElementChild;
    const forwardSlashKeyCode = 191;
    document.addEventListener('keydown', event => {
       if (!event.altKey && !event.ctrlKey && !event.isComposing && document.activeElement !== searchBar && event.keyCode === forwardSlashKeyCode) {
           const selectionIndex = searchBar.value.length;
           searchBar.focus();
           searchBar.setSelectionRange(selectionIndex, selectionIndex);
           event.preventDefault();
       }
    });
})();
