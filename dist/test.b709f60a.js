parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n欢迎来到我的频道，送给各位一个可爱的米老鼠呀，希望大家天天开心\n.mickey *{box-sizing: border-box;margin: 0px;padding: 0px;}\n.mickey *::before, .mickey *::after{box-sizing: border-box;}\n\nbody{\n    background: #cc3333;\n}\n\n.mickey{\n    position: relative;\n    background: #cc3333;\n    min-height: 100vh;\n}\n\n.head{\n    position: relative;\n    background: black;\n    width: 204px;\n    height: 212px;\n    left: 50%;\n    top: 200px;\n    margin-left: -102px;\n    border-radius: 50%;\n}\n\n.ear{\n    position: absolute;\n    background: black;\n    width: 112px;\n    height: 140px;\n    top: 130px;\n    left: 50%;\n    margin-left: -56px;\n    border-radius: 50%;\n}\n.ear.left{\n    transform: translateX(-110px) rotate(20deg);\n}\n.ear.right{\n    transform: translateX(110px) rotate(-20deg);\n}\n.face .front{\n    position: absolute;\n    background: #feeddd;\n    width: 86px;\n    height: 156px;\n    left: 50%;\n    top: 215px;\n    margin-left: -43px;\n    border-radius: 50%;\n}\n.face .front.left{\n    transform: translateX(-30px)rotate(-5deg);\n}\n.face .front.right{\n    transform: translateX(30px)rotate(5deg);\n}\n.face .check{\n    position: absolute;\n    border: 2px solid black;\n    background: #feeddd;\n    width: 60px;\n    height: 110px;\n    left: 50%;\n    top: 310px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border-bottom: 0;\n}\n.face .check.left{\n    border-right: 0;\n    transform: translateX(-60px)rotate(-45deg);\n}\n.face .check.right{\n    border-left: 0;\n    transform: translateX(60px)rotate(45deg);\n}\n.face .down{\n    position: absolute;\n    border-bottom: 2px solid black;\n    background: #feeddd;\n    width: 58px;\n    height: 40px;\n    left: 50%;\n    top: 385px;\n    margin-left: -29px;\n    border-radius: 50%;\n}\n.face .eye{\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 28px;\n    height: 72px;\n    left: 50%;\n    top: 253px;\n    margin-left: -14px;\n    overflow: hidden;\n}\n.face .eye.left{\n    transform: translateX(-18px)rotate(-6deg);\n}\n.face .eye.left::before{\n    content: '';\n    display: block;\n    border: 2px solid black;\n    background: black;\n    border-radius: 50%;\n    width: 18px;\n    height: 26px;\n    position: relative;\n    top: 47px;\n    left: 2px;\n}\n.face .eye.right{\n    transform: translateX(18px)rotate(6deg);\n}\n.face .eye.right::before{\n    content: '';\n    display: block;\n    border: 2px solid black;\n    background: black;\n    border-radius: 50%;\n    width: 18px;\n    height: 26px;\n    position: relative;\n    top: 47px;\n    left: 3px;\n}\n\n.face .noseline{\n    position: absolute;\n    border-top: 2px solid black;\n    width: 62px;\n    height: 34px;\n    left: 50%;\n    top: 323px;\n    margin-left: -31px;\n    border-radius: 50%;\n}\n.face .nose{\n    position: absolute;\n    border: 2px solid black;\n    background: black;\n    width: 56px;\n    height: 34px;\n    top:330px;\n    left: 50%;\n    margin-left: -28px;\n    border-radius: 50%;\n    z-index: 2;\n}\n.face .mouth{\n    position: absolute;\n    /*border: 2px solid black;*/\n    width: 180px;\n    height: 76px;\n    left: 50%;\n    top: 335px;\n    margin-left: -90px;\n    overflow: hidden;\n}\n.face .mouth .lip{\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    top:8px;\n    left: 50%;\n    border-radius: 50%;\n    z-index: 2;\n}\n.face .mouth .lip.left{\n    border-top: 2px solid black;\n    transform: translateX(-79px)rotate(-20deg);\n\n}\n.face .mouth .lip.right{\n    margin-left: 20px;\n    border-top: 2px solid black;\n    transform: translateX(38px)rotate(20deg);\n}\n\n.face .mouth .bottom{\n    position: absolute;\n    border-bottom: 2px solid black;\n    background: #feeddd;\n    width: 138px;\n    height: 80px;\n    top: -34px;\n    border-radius: 50%;\n    margin-left: 20px;\n    z-index: 1;\n}\n.face .mouth .tong{\n    position: absolute;\n    background: black;\n    width: 62px;\n    height: 34px;\n    top:38px;\n    margin-left: 60px;\n    border-radius: 0 0 70px 70px;\n    z-index: 0;\n    overflow: hidden;\n}\n.face .mouth .tong .left{\n    position: absolute;\n    background: #ff0000;\n    border-top: 2px solid black;\n    width: 30px;\n    height: 30px;\n    top: 13px;\n    margin-left: 3px;\n    border-radius: 50%;\n}\n.face .mouth .tong .right{\n    position: absolute;\n    background: #ff0000;\n    border-top: 2px solid black;\n    width: 30px;\n    height: 30px;\n    top: 11px;\n    margin-left: 30px;\n    border-radius: 50%;\n}\n\n.heart {\n    position: absolute;\n    left: 50%;\n    top: 315px;\n    animation: .7s infinite heart alternate-reverse;\n}\n\n.heart .h-left,.h-right,.h-bottom {\n    background: red;\n    height: 15px;\n    width: 15px;\n}\n\n.heart .h-left {\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n    border-radius: 50% 0 0 50%;\n    transform: rotate(45deg) translateX(28px);\n}\n\n.heart .h-right {\n    position: absolute;\n    left: 30px;\n    bottom: 30px;\n    border-radius: 50% 50% 0 0;\n    transform: rotate(45deg) translateY(28px);\n}\n\n.heart .h-bottom {\n    transform: rotate(45deg);\n}\n\n.heart.left{\n    position: absolute;\n    margin-left: -25px;\n}\n.heart.right{\n    position: absolute;\n    margin-left: 25px;\n}\n\n@keyframes heart {\n    from {\n        transform: translate(-50%, -50%) scale(1.0)\n    }\n    to {\n        transform: translate(-50%, -50%) scale(1.2)\n    }\n}\n.heart{\n     visibility: hidden;\n}\n.face > .eye{\n    visibility: hidden;\n}\n.face > .heart{\n    visibility: visible;\n}\n你好美呀，mickey很喜欢你哟！\n",t=n;exports.default=t;
},{}],"HdJB":[function(require,module,exports) {
"use strict";var e=n(require("./css.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t={id:void 0,n:1,time:100,ui:{demo:document.querySelector("#demo"),demo2:document.querySelector("#demo2")},init:function(){t.ui.demo.innerText=e.default.substring(0,t.n),t.ui.demo2.innerHTML=e.default.substring(0,t.n),t.play(),t.bindEvents()},events:{"#btnPause":"pause","#btnPlay":"play","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents:function(){for(var e in t.events)if(t.events.hasOwnProperty(e)){var n=t.events[e];document.querySelector(e).onclick=t[n]}},run:function(){t.n+=1,t.n>e.default.length?window.clearInterval(t.id):(t.ui.demo.innerText=e.default.substring(0,t.n),t.ui.demo2.innerHTML=e.default.substring(0,t.n),t.ui.demo.scrollTop=t.ui.demo.scrollHeight)},play:function(){t.id=setInterval(t.run,t.time)},pause:function(){window.clearInterval(t.id)},slow:function(){t.pause(),t.time=300,t.play()},normal:function(){t.pause(),t.time=100,t.play()},fast:function(){t.pause(),t.time=-1e3,t.play()}};t.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=dist/test.b709f60a.js.map