// ==UserScript==
// @name         Jisho.org forward slash to focus search bar
// @namespace    https://github.com/sahlaysta/
// @version      0.2
// @description  Focuses the search bar when forward slash is pressed, like on most sites
// @author       sahlaysta
// @match        https://jisho.org/*
// @icon         https://avatars.githubusercontent.com/u/12574115?s=200&v=4
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    const searchBar = document.querySelector('#keyword');
    document.addEventListener('keydown', event => {
       if (!event.altKey && !event.ctrlKey && !event.isComposing && document.activeElement !== searchBar && event.key === '/') {
           searchBar.focus();
           searchBar.setSelectionRange(searchBar.value.length, searchBar.value.length);
           event.preventDefault();
       }
    });
})();
