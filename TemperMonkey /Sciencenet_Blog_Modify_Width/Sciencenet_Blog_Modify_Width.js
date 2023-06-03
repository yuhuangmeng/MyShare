// ==UserScript==
// @name         Sciencenet Blog Modify Width
// @namespace    mmm
// @version      1.0.0
// @description  Sciencenet-Blog modify width
// @author       mmm
// @homepageURL  https://github.com/yuhuangmeng/MyShare/tree/main/TemperMonkey%20
// @match        https://blog.sciencenet.cn/*
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    // 未设数值变量之前的代码
    // var bmDiv = document.querySelector("div#ct.ct2.wp.cl div.mn div.bm");
    // bmDiv.style.width = "1160px";
    // var ctDiv = document.querySelector("div#ct.ct2.wp.cl");
    // ctDiv.style.width = "1370px";
    // var style = document.createElement('style');
    // style.innerHTML = '.mn { width: 1160px !important; }';
    // document.head.appendChild(style);

    var leftWidth = 1260; // 左侧文字部分的宽度
    var totalWidth = leftWidth + 210; // 整个双栏框架的总宽度

    // 最里层文本
    var bmDiv = document.querySelector("div#ct.ct2.wp.cl div.mn div.bm");
    bmDiv.style.width = leftWidth + "px";
    // 最外层双栏框架，左边文字部分框架，右边头像宽度为180
    var ctDiv = document.querySelector("div#ct.ct2.wp.cl");
    ctDiv.style.width = totalWidth + "px";

    // left, 左边文字部分框架的宽度
    var style = document.createElement('style');
    style.innerHTML = '.mn { width: ' + leftWidth + 'px !important; }';
    document.head.appendChild(style);
})();