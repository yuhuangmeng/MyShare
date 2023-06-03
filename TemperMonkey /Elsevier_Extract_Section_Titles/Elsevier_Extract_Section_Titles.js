// ==UserScript==
// @name         Elsevier Extract Section Titles
// @namespace    mmm
// @version      1.0
// @description  Extracts section titles from a webpage and allows you to copy them to the clipboard by clicking a button.
// @author       ChatGPT(justCopyPaste)
// @homepageURL  https://github.com/yuhuangmeng/MyShare/tree/main/TemperMonkey%20
// @match        https://www.sciencedirect.com/*
// @grant        GM_setClipboard
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    // Function to extract section titles from the page
    function extractSectionTitles() {
        var sections = document.querySelectorAll('section');
        var titles = [];
        for (var i = 0; i < sections.length; i++) {
            var h2 = sections[i].querySelector('h2');
            if (h2) {
                titles.push(h2.textContent);
            }
            var h3 = sections[i].querySelector('h3');
            if (h3) {
                titles.push(' - ' + h3.textContent);
            }
            var h4 = sections[i].querySelector('h4');
            if (h4) {
                titles.push('    - ' + h4.textContent);
            }
        }
        return titles;
    }

    // Add a button to the page to extract and copy section titles
    var button = document.createElement('button');
    button.innerText = 'Extract Section Titles';
    button.style = `
        position: fixed;
        bottom: 40px;
        right: 10px;
        // width: 128px;
        background-color: hsla(200, 40%, 96%, .8);
        font-size: 16px;
        border-radius: 6px;
        z-index: 99999;`;
    button.addEventListener('click', function() {
        var titles = extractSectionTitles();
        GM_setClipboard(titles.join('\n'));
        // alert('Section titles have been copied to the clipboard.');
    });
    document.body.appendChild(button);
})();