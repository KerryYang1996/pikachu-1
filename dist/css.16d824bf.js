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
//模块化
// const string = `
// .skin * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }
//   .skin ::before,
//   .skin ::after {
//     box-sizing: border-box;
//   }
//   .skin {
//     position: relative;
//     background: #ffe600;
//     height: 50vh;
//   }
//   .nose {
//     /*鼻子由两部分组成圆弧+三角形*/
//     border: 10px solid red;
//     border-color: black transparent transparent;
//     width: 0px; /**content-box*/
//     height: 0px;
//     /* 水平居中 */
//     /* position: absolute;
//     top: 200px;
//     left: 50%;
//     transform: translate(-50%, -50%); */
//     position: relative;
//     top: 145px; /*距离top200px*/
//     left: 50%;
//     margin-left: -10px; /*左边框10像素，右边框10像素，所以div宽20px*/
//     z-index: 10;
//   }
//   @keyframes wave {
//     0% {
//       transform: rotate(0deg);
//     }
//     33% {
//       transform: rotate(6deg);
//     }
//     66% {
//       transform: rotate(-6deg);
//     }
//     100% {
//       transform: rotate(0deg);
//     }
//   }
//     animation: wave 300ms infinite;
//   }
//   .yuan {
//     width: 20px;
//     height: 6px;
//     position: absolute;
//     top: -16px;
//     left: -10px;
//     border-radius: 10px 10px 0 0;
//     background: black;
//   }
//   .eye {
//     border: 2px solid black;
//     width: 64px;
//     height: 64px;
//     position: absolute;
//     top: 100px;
//     left: 50%;
//     margin-left: -32px;
//     background: #2e2e2e;
//     border-radius: 50%;
//   }
//   .eye::before {
//     content: "";
//     display: block;
//     border: 3px solid black;
//     width: 30px;
//     height: 30px;
//     background: white;
//     border-radius: 50%;
//     position: relative;
//     left: 4px;
//     top: 2px;
//   }
//   .eye.left {
//     transform: translateX(-100px);
//   }
//   .eye.right {
//     transform: translateX(100px);
//   }
//   .mouth {
//     width: 200px;
//     height: 200px;
//     position: absolute;
//     top: 170px;
//     left: 50%;
//     margin-left: -100px;
//   }
//   .mouth .up {
//     position: relative;
//     top: -20px;
//     z-index: 1;
//   }
//   .mouth .up .lip {
//     border: 3px solid black;
//     width: 100px;
//     height: 30px;
//     border-top-color: transparent;
//     border-right-color: transparent;
//     background: #ffe600;
//     position: relative;
//     position: absolute;
//     left: 50%;
//     margin-left: -50px;
//   }
//   .mouth .up .lip.left {
//     /* position: relative;
//     left: 100px; */
//     border-radius: 0 0 0 50px;
//     transform: rotate(-15deg) translateX(-53px);
//   }
//   .mouth .up .lip.right {
//     /* position: relative;
//       left: 100px; */
//     border-radius: 0 0 50px 0;
//     transform: rotate(15deg) translateX(53px);
//   }
//   .mouth .up .lip::before {
//     content: "";
//     display: block;
//     width: 7px;
//     height: 30px;
//     position: absolute;
//     bottom: 0;
//     background-color: #ffe600;
//   }
//   .mouth .up .lip.left::before {
//     right: -6px;
//     /* left: 95px;
//       top: -5px; */
//   }
//   .mouth .up .lip.right::before {
//     left: -6px;
//     /* left: 95px;
//       top: -5px; */
//   }
//   .mouth .down {
//     width: 100%;
//     height: 180px;
//     position: absolute;
//     top: 5px;
//     overflow: hidden;
//   }
//   .mouth .down .yuan1 {
//     border: 3px solid black;
//     width: 150px;
//     height: 1000px;
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     margin-left: -75px;
//     border-radius: 75px/300px;
//     background: #9b000a;
//     overflow: hidden;
//   }
//   .mouth .down .yuan1 .yuan2 {
//     width: 200px;
//     height: 300px;
//     background: #ff485f;
//     position: absolute;
//     bottom: -155px;
//     left: 50%; /*子元素的左边框相对父元素的位置左移50%的父元素宽度*/
//     margin-left: -100px;
//     border-radius: 100px;
//   }
//   .face {
//     position: absolute;
//     left: 50%;
//     top: 200px;
//     border: 3px solid black;
//     width: 88px;
//     height: 88px;
//     margin-left: -44px;
//     z-index: 3;
//     background: red;
//     border-radius: 50%;
//   }
//   .face > img {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//   }
//   .face.left > img {
//     transform: rotateY(180deg);
//     transform-origin: 0 0;
//   }
//   .face.left {
//     transform: translateX(-180px);
//   }
//   .face.right {
//     transform: translateX(180px);
//   }
// `;
// export default string;
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50005" + '/');

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
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","css.js"], null)
//# sourceMappingURL=/css.16d824bf.js.map