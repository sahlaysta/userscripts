// ==UserScript==
// @name         Animelon shortcuts
// @namespace    https://github.com/sahlaysta/
// @version      0.1
// @description  Adds several shortcuts to Animelon
// @author       sahlaysta
// @match        https://*.animelon.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animelon.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    //adds a shortcut operation
    function addShortcutFunction(keyCode, func) {
        document.addEventListener('keydown', event => {
            if (!event.altKey && !event.ctrlKey && !event.isComposing
                && !/^(?:input|textarea|select|button)$/i.test(event.target.tagName)
                && event.keyCode === keyCode) {
                func();
            }
        });
    }

    //returns the angularjs ng controller for the video player
    function getVideoController() {
        return window.angular.element(document.getElementById('video-player-container')).scope();
    }

    // K to pause/unpause
    addShortcutFunction(75, () => {
        const ngCtrl = getVideoController();
        ngCtrl.playerValues.triggers.play(!(ngCtrl.playerValues.playing));
    });

    // M to mute/unmute
    addShortcutFunction(77, () => {
        const ngCtrl = getVideoController();
        ngCtrl.playerValues.triggers.volume(ngCtrl.playerValues.storage.volume === 0 ? 1 : 0);
    });

    // P key to scroll through "Dialogue", "Translation History", and "Tests & Exercises"
    const panelTypes = ["Dialogue", "Translation History", "Tests & Exercises"];
    addShortcutFunction(80, () => {
        const ngCtrl = getVideoController();
        const currentPanelType = ngCtrl.playerValues.storage.sidePanel.panelType;
        ngCtrl.playerValues.sidePanel.changePanel(panelTypes[(1 + (panelTypes.findIndex((elem) => elem === currentPanelType))) % panelTypes.length]);
    });

})();
