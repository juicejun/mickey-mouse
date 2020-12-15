// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n\u6B22\u8FCE\u6765\u5230\u6211\u7684\u9891\u9053\uFF0C\u9001\u7ED9\u5404\u4F4D\u4E00\u4E2A\u53EF\u7231\u7684\u7C73\u8001\u9F20\u5440\uFF0C\u5E0C\u671B\u5927\u5BB6\u5929\u5929\u5F00\u5FC3\n.mickey *{box-sizing: border-box;margin: 0px;padding: 0px;}\n.mickey *::before, .mickey *::after{box-sizing: border-box;}\n\nbody{\n    background: #cc3333;\n}\n\n.mickey{\n    position: relative;\n    background: #cc3333;\n    min-height: 100vh;\n}\n\n.head{\n    position: relative;\n    background: black;\n    width: 204px;\n    height: 212px;\n    left: 50%;\n    top: 200px;\n    margin-left: -102px;\n    border-radius: 50%;\n}\n\n.ear{\n    position: absolute;\n    background: black;\n    width: 112px;\n    height: 140px;\n    top: 130px;\n    left: 50%;\n    margin-left: -56px;\n    border-radius: 50%;\n}\n.ear.left{\n    transform: translateX(-110px) rotate(20deg);\n}\n.ear.right{\n    transform: translateX(110px) rotate(-20deg);\n}\n.face .front{\n    position: absolute;\n    background: #feeddd;\n    width: 86px;\n    height: 156px;\n    left: 50%;\n    top: 215px;\n    margin-left: -43px;\n    border-radius: 50%;\n}\n.face .front.left{\n    transform: translateX(-30px)rotate(-5deg);\n}\n.face .front.right{\n    transform: translateX(30px)rotate(5deg);\n}\n.face .check{\n    position: absolute;\n    border: 2px solid black;\n    background: #feeddd;\n    width: 60px;\n    height: 110px;\n    left: 50%;\n    top: 310px;\n    margin-left: -30px;\n    border-radius: 50%;\n    border-bottom: 0;\n}\n.face .check.left{\n    border-right: 0;\n    transform: translateX(-60px)rotate(-45deg);\n}\n.face .check.right{\n    border-left: 0;\n    transform: translateX(60px)rotate(45deg);\n}\n.face .down{\n    position: absolute;\n    border-bottom: 2px solid black;\n    background: #feeddd;\n    width: 58px;\n    height: 40px;\n    left: 50%;\n    top: 385px;\n    margin-left: -29px;\n    border-radius: 50%;\n}\n.face .eye{\n    position: absolute;\n    border: 2px solid black;\n    border-radius: 50%;\n    width: 28px;\n    height: 72px;\n    left: 50%;\n    top: 253px;\n    margin-left: -14px;\n    overflow: hidden;\n}\n.face .eye.left{\n    transform: translateX(-18px)rotate(-6deg);\n}\n.face .eye.left::before{\n    content: '';\n    display: block;\n    border: 2px solid black;\n    background: black;\n    border-radius: 50%;\n    width: 18px;\n    height: 26px;\n    position: relative;\n    top: 47px;\n    left: 2px;\n}\n.face .eye.right{\n    transform: translateX(18px)rotate(6deg);\n}\n.face .eye.right::before{\n    content: '';\n    display: block;\n    border: 2px solid black;\n    background: black;\n    border-radius: 50%;\n    width: 18px;\n    height: 26px;\n    position: relative;\n    top: 47px;\n    left: 3px;\n}\n\n.face .noseline{\n    position: absolute;\n    border-top: 2px solid black;\n    width: 62px;\n    height: 34px;\n    left: 50%;\n    top: 323px;\n    margin-left: -31px;\n    border-radius: 50%;\n}\n.face .nose{\n    position: absolute;\n    border: 2px solid black;\n    background: black;\n    width: 56px;\n    height: 34px;\n    top:330px;\n    left: 50%;\n    margin-left: -28px;\n    border-radius: 50%;\n    z-index: 2;\n}\n.face .mouth{\n    position: absolute;\n    /*border: 2px solid black;*/\n    width: 180px;\n    height: 76px;\n    left: 50%;\n    top: 335px;\n    margin-left: -90px;\n    overflow: hidden;\n}\n.face .mouth .lip{\n    position: absolute;\n    width: 20px;\n    height: 8px;\n    top:8px;\n    left: 50%;\n    border-radius: 50%;\n    z-index: 2;\n}\n.face .mouth .lip.left{\n    border-top: 2px solid black;\n    transform: translateX(-79px)rotate(-20deg);\n\n}\n.face .mouth .lip.right{\n    margin-left: 20px;\n    border-top: 2px solid black;\n    transform: translateX(38px)rotate(20deg);\n}\n\n.face .mouth .bottom{\n    position: absolute;\n    border-bottom: 2px solid black;\n    background: #feeddd;\n    width: 138px;\n    height: 80px;\n    top: -34px;\n    border-radius: 50%;\n    margin-left: 20px;\n    z-index: 1;\n}\n.face .mouth .tong{\n    position: absolute;\n    background: black;\n    width: 62px;\n    height: 34px;\n    top:38px;\n    margin-left: 60px;\n    border-radius: 0 0 70px 70px;\n    z-index: 0;\n    overflow: hidden;\n}\n.face .mouth .tong .left{\n    position: absolute;\n    background: #ff0000;\n    border-top: 2px solid black;\n    width: 30px;\n    height: 30px;\n    top: 13px;\n    margin-left: 3px;\n    border-radius: 50%;\n}\n.face .mouth .tong .right{\n    position: absolute;\n    background: #ff0000;\n    border-top: 2px solid black;\n    width: 30px;\n    height: 30px;\n    top: 11px;\n    margin-left: 30px;\n    border-radius: 50%;\n}\n\n.heart {\n    position: absolute;\n    left: 50%;\n    top: 315px;\n    animation: .7s infinite heart alternate-reverse;\n}\n\n.heart .h-left,.h-right,.h-bottom {\n    background: red;\n    height: 15px;\n    width: 15px;\n}\n\n.heart .h-left {\n    position: absolute;\n    right: 30px;\n    bottom: 30px;\n    border-radius: 50% 0 0 50%;\n    transform: rotate(45deg) translateX(28px);\n}\n\n.heart .h-right {\n    position: absolute;\n    left: 30px;\n    bottom: 30px;\n    border-radius: 50% 50% 0 0;\n    transform: rotate(45deg) translateY(28px);\n}\n\n.heart .h-bottom {\n    transform: rotate(45deg);\n}\n\n.heart.left{\n    position: absolute;\n    margin-left: -25px;\n}\n.heart.right{\n    position: absolute;\n    margin-left: 25px;\n}\n\n@keyframes heart {\n    from {\n        transform: translate(-50%, -50%) scale(1.0)\n    }\n    to {\n        transform: translate(-50%, -50%) scale(1.2)\n    }\n}\n.heart{\n     visibility: hidden;\n}\n.face > .eye{\n    visibility: hidden;\n}\n.face > .heart{\n    visibility: visible;\n}\n\u4F60\u597D\u7F8E\u5440\uFF0Cmickey\u5F88\u559C\u6B22\u4F60\u54DF\uFF01\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substring(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substring(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = -1000;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"../../../yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61428" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map