"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Aleo-Regular.ttf */ "./src/Aleo-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./hawaiibg.png */ "./src/hawaiibg.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Aleo';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\nhtml {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat\n    center center fixed;\n    background-size: cover;\n}\n\nbody {\n    font-family: 'Aleo';\n    font-weight: bold;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: auto auto;\n    justify-content: center;\n}\n\n#navBlock {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-rows: auto auto;\n    justify-content: center;\n    justify-items: center;\n    background-color: rgba(206,207,231,0.8);\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 0px;\n    padding: 15px 0px;\n}\n\n#tabContent {\n    grid-row: 2/3;\n    background-color: rgba(82,136,100,0.95);\n    margin-top: 150px;\n    padding: 20px;\n}\n\n#hpContainer {\n    display: grid;\n    grid-template-rows: auto auto minmax(150px, 400px) auto;\n    justify-items: center;\n    gap: 20px;\n    margin-top: 30px;\n    font-size: 20px;\n}\n\n#hpCopy1 {\n    grid-row: 1/2;\n}\n\n#hpCopy2 {\n    grid-row: 2/3;\n}\n\n#myRestaurant {\n    grid-row: 3/4;\n    height: 100%;\n}\n\n#hpCopy3 {\n    grid-row: 4/5;\n}\n\n#title {\n    font-size: 35px;\n    font-weight: bold;\n}\n\n#tabBlock {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    gap: 15px;\n}\n\nbutton {\n    padding: 20px 30px;\n    font-family: 'Aleo';\n    font-size: large;\n    background-color: transparent;\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\nbutton:active {\n    color: rgba(82,136,100,1);\n}\n\nbutton:focus {\n    color: rgba(82,136,100,1);\n}\n\n#mpContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-flow: column;\n    gap: 20px;\n    justify-items: center;\n}\n\n\n.items > img {\n    object-fit: cover;\n    max-height: 250px;\n    width: 100%;\n}\n\n#cpContainer {\n    display: grid;\n    grid-template-rows: repeat(auto, 5);\n    gap: 20px;\n}\n\n#cpContainer img[src$=\".svg\"] {\n    object-fit: cover;\n    max-height: 20px;\n    max-width: 20px;\n}\n\n#cpContainer img[src$=\".jpg\"] {\n    object-fit: cover;\n    max-height: 400px;\n    width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,0DAA4C;IAC5C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI;uBACmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,uBAAuB;IACvB,qBAAqB;IACrB,uCAAuC;IACvC,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,QAAQ;IACR,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uDAAuD;IACvD,qBAAqB;IACrB,SAAS;IACT,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,2DAA2D;IAC3D,sBAAsB;IACtB,SAAS;IACT,qBAAqB;AACzB;;;AAGA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: 'Aleo';\n    src: url('./Aleo-Regular.ttf') format('ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\nhtml {\n    background: url('./hawaiibg.png') no-repeat\n    center center fixed;\n    background-size: cover;\n}\n\nbody {\n    font-family: 'Aleo';\n    font-weight: bold;\n}\n\n#main {\n    display: grid;\n    grid-template-rows: auto auto;\n    justify-content: center;\n}\n\n#navBlock {\n    grid-row: 1/2;\n    display: grid;\n    grid-template-rows: auto auto;\n    justify-content: center;\n    justify-items: center;\n    background-color: rgba(206,207,231,0.8);\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 0px;\n    padding: 15px 0px;\n}\n\n#tabContent {\n    grid-row: 2/3;\n    background-color: rgba(82,136,100,0.95);\n    margin-top: 150px;\n    padding: 20px;\n}\n\n#hpContainer {\n    display: grid;\n    grid-template-rows: auto auto minmax(150px, 400px) auto;\n    justify-items: center;\n    gap: 20px;\n    margin-top: 30px;\n    font-size: 20px;\n}\n\n#hpCopy1 {\n    grid-row: 1/2;\n}\n\n#hpCopy2 {\n    grid-row: 2/3;\n}\n\n#myRestaurant {\n    grid-row: 3/4;\n    height: 100%;\n}\n\n#hpCopy3 {\n    grid-row: 4/5;\n}\n\n#title {\n    font-size: 35px;\n    font-weight: bold;\n}\n\n#tabBlock {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    gap: 15px;\n}\n\nbutton {\n    padding: 20px 30px;\n    font-family: 'Aleo';\n    font-size: large;\n    background-color: transparent;\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\nbutton:active {\n    color: rgba(82,136,100,1);\n}\n\nbutton:focus {\n    color: rgba(82,136,100,1);\n}\n\n#mpContainer {\n    display: grid;\n    grid-template-rows: repeat(3, 1fr);\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    grid-auto-flow: column;\n    gap: 20px;\n    justify-items: center;\n}\n\n\n.items > img {\n    object-fit: cover;\n    max-height: 250px;\n    width: 100%;\n}\n\n#cpContainer {\n    display: grid;\n    grid-template-rows: repeat(auto, 5);\n    gap: 20px;\n}\n\n#cpContainer img[src$=\".svg\"] {\n    object-fit: cover;\n    max-height: 20px;\n    max-width: 20px;\n}\n\n#cpContainer img[src$=\".jpg\"] {\n    object-fit: cover;\n    max-height: 400px;\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactmodule.js":
/*!******************************!*\
  !*** ./src/contactmodule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cp": () => (/* binding */ cp)
/* harmony export */ });
/* harmony import */ var _location_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.jpg */ "./src/location.jpg");
/* harmony import */ var _clock_time_three_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock-time-three.svg */ "./src/clock-time-three.svg");
/* harmony import */ var _bell_ring_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bell-ring.svg */ "./src/bell-ring.svg");
/* harmony import */ var _home_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.svg */ "./src/home.svg");
/* harmony import */ var _message_reply_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-reply.svg */ "./src/message-reply.svg");






function cp () {
    const cpContainer = document.createElement('div');
    cpContainer.setAttribute('id', 'cpContainer');

    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone');
    phone.setAttribute('class', 'info');
    cpContainer.appendChild(phone);

    const phonepic = new Image();
    phonepic.setAttribute('id', 'phonepic');
    phonepic.src = _bell_ring_svg__WEBPACK_IMPORTED_MODULE_2__;
    phone.appendChild(phonepic);

    const phonetext = document.createElement('div');
    phonetext.setAttribute('id', 'phonetext');
    phonetext.textContent = '013-579-1113';
    phone.appendChild(phonetext);

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.setAttribute('class', 'info');
    cpContainer.appendChild(home);

    const homepic = new Image();
    homepic.setAttribute('id', 'homepic');
    homepic.src = _home_svg__WEBPACK_IMPORTED_MODULE_3__;
    home.appendChild(homepic);

    const hometext = document.createElement('div');
    hometext.setAttribute('id', 'hometext');
    hometext.textContent = 'Stall 14, Borough Market, 8 Southwark St, London';
    home.appendChild(hometext);

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    email.setAttribute('class', 'info');
    cpContainer.appendChild(email);

    const emailpic = new Image();
    emailpic.setAttribute('id', 'emailpic');
    emailpic.src = _message_reply_svg__WEBPACK_IMPORTED_MODULE_4__;
    email.appendChild(emailpic);

    const emailtext = document.createElement('div');
    emailtext.setAttribute('id', 'emailtext');
    emailtext.textContent = 'Poke@BowlingForPoke.com';
    email.appendChild(emailtext);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    hours.setAttribute('class', 'info');
    cpContainer.appendChild(hours);

    const hourspic = new Image();
    hourspic.setAttribute('id', 'hourspic');
    hourspic.src = _clock_time_three_svg__WEBPACK_IMPORTED_MODULE_1__;
    hours.appendChild(hourspic);

    const hourstext = document.createElement('div');
    hourstext.setAttribute('id', 'hourstext');
    hourstext.textContent = 'Mon-Saturday: 10AM - 5PM';
    hours.appendChild(hourstext);

    const map = document.createElement('div');
    map.setAttribute('id', 'map');
    map.setAttribute('class', 'info')
    cpContainer.appendChild(map);

    const mappic = new Image();
    mappic.setAttribute('id', 'mappic');
    mappic.src = _location_jpg__WEBPACK_IMPORTED_MODULE_0__;
    map.appendChild(mappic);

    return cpContainer;

}

/***/ }),

/***/ "./src/hpmodule.js":
/*!*************************!*\
  !*** ./src/hpmodule.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hp": () => (/* binding */ hp)
/* harmony export */ });
/* harmony import */ var _hprestaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hprestaurant.jpg */ "./src/hprestaurant.jpg");


function hp () {
    const hpContainer = document.createElement('div');
    hpContainer.setAttribute('id', 'hpContainer');

    const hpCopy1 = document.createElement('div');
    hpCopy1.setAttribute('id', 'hpCopy1');
    hpCopy1.textContent = `London's Premier Poke Paradise`;
    hpContainer.appendChild(hpCopy1);
    
    const hpCopy2 = document.createElement('div');
    hpCopy2.setAttribute('id', 'hpCopy2');
    hpCopy2.textContent = `Authentic recipes mastered in Hawaii and delivered to London`;
    hpContainer.appendChild(hpCopy2);


    const myRestaurant = new Image();
    myRestaurant.setAttribute('id', 'myRestaurant')
    myRestaurant.src = _hprestaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
    hpContainer.appendChild(myRestaurant);

    const hpCopy3 = document.createElement('div');
    hpCopy3.setAttribute('id', 'hpCopy3');
    hpCopy3.textContent = `Come visit today for a bowl of paradise`;
    hpContainer.appendChild(hpCopy3);

    return hpContainer;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hpmodule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hpmodule.js */ "./src/hpmodule.js");
/* harmony import */ var _menumodule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menumodule.js */ "./src/menumodule.js");
/* harmony import */ var _contactmodule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactmodule.js */ "./src/contactmodule.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








function component() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    const navBlock = document.createElement('div');
    navBlock.setAttribute('id', 'navBlock');
    main.appendChild(navBlock);

    const title = document.createElement('div');
    title.setAttribute('id', 'title')
    title.textContent = 'Bowling For Poke';
    navBlock.appendChild(title);

    const tabBlock = document.createElement('div');
    tabBlock.setAttribute('id', 'tabBlock');
    navBlock.appendChild(tabBlock);

    const homeTab = document.createElement('button');
    homeTab.setAttribute('id', 'homeTab');
    homeTab.textContent = 'Home';
    tabBlock.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.setAttribute('id', 'menuTab');
    menuTab.textContent = 'Menu';
    tabBlock.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.setAttribute('id', 'contactTab');
    contactTab.textContent = 'Contact';
    tabBlock.appendChild(contactTab);

    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tabContent');
    main.appendChild(tabContent);

    const homediv = document.createElement('div');
    homediv.setAttribute('id', 'homediv');
    tabContent.appendChild(homediv);
    homediv.appendChild((0,_hpmodule_js__WEBPACK_IMPORTED_MODULE_0__.hp)());
    
    const menudiv = document.createElement('div');
    menudiv.setAttribute('id', 'menudiv');
    tabContent.appendChild(menudiv);

    const contactdiv = document.createElement('div');
    contactdiv.setAttribute('id', 'contactdiv');
    tabContent.appendChild(contactdiv);

    homeTab.addEventListener('click', () => {
        if (homediv.childNodes.length == 0) {
            menudiv.innerHTML = '';
            contactdiv.innerHTML = '';
            homediv.appendChild((0,_hpmodule_js__WEBPACK_IMPORTED_MODULE_0__.hp)());
        }
    })

    menuTab.addEventListener('click', () => {
        if (menudiv.childNodes.length == 0) {
            homediv.innerHTML = '';
            contactdiv.innerHTML = '';
            menudiv.appendChild((0,_menumodule_js__WEBPACK_IMPORTED_MODULE_1__.mp)());
        }
    })

    contactTab.addEventListener('click', () => {
        if (contactdiv.childNodes.length == 0) {
            homediv.innerHTML = '';
            menudiv.innerHTML = '';
            contactdiv.appendChild((0,_contactmodule_js__WEBPACK_IMPORTED_MODULE_2__.cp)());
        }
    })

    return main;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/menumodule.js":
/*!***************************!*\
  !*** ./src/menumodule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mp": () => (/* binding */ mp)
/* harmony export */ });
/* harmony import */ var _chickenpoke_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chickenpoke.jpg */ "./src/chickenpoke.jpg");
/* harmony import */ var _avocadopoke_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avocadopoke.jpg */ "./src/avocadopoke.jpg");
/* harmony import */ var _salmonpoke_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salmonpoke.jpg */ "./src/salmonpoke.jpg");
/* harmony import */ var _falafelpoke_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./falafelpoke.jpg */ "./src/falafelpoke.jpg");
/* harmony import */ var _tunapoke_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tunapoke.jpg */ "./src/tunapoke.jpg");
/* harmony import */ var _spicysalmon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spicysalmon.jpg */ "./src/spicysalmon.jpg");







function mp () {
    const mpContainer = document.createElement('div');
    mpContainer.setAttribute('id', 'mpContainer');

    const item1 = document.createElement('div');
    item1.setAttribute('id', 'item1');
    item1.setAttribute('class', 'items');
    mpContainer.appendChild(item1);

    const item1pic = new Image();
    item1pic.setAttribute('id', 'item1pic');
    item1pic.src = _chickenpoke_jpg__WEBPACK_IMPORTED_MODULE_0__;
    item1.appendChild(item1pic);

    const item1title = document.createElement('div');
    item1title.setAttribute('id', 'item1title');
    item1title.textContent = 'Chicken Poke: £10';
    item1.appendChild(item1title);

    const item2 = document.createElement('div');
    item2.setAttribute('id', 'item2');
    item2.setAttribute('class', 'items');
    mpContainer.appendChild(item2);

    const item2pic = new Image();
    item2pic.setAttribute('id', 'item2pic');
    item2pic.src = _avocadopoke_jpg__WEBPACK_IMPORTED_MODULE_1__;
    item2.appendChild(item2pic);

    const item2title = document.createElement('div');
    item2title.setAttribute('id', 'item2title');
    item2title.textContent = 'Avocado Poke: £8';
    item2.appendChild(item2title);

    const item3 = document.createElement('div');
    item3.setAttribute('id', 'item3');
    item3.setAttribute('class', 'items');
    mpContainer.appendChild(item3);

    const item3pic = new Image();
    item3pic.setAttribute('id', 'item3pic');
    item3pic.src = _salmonpoke_jpg__WEBPACK_IMPORTED_MODULE_2__;
    item3.appendChild(item3pic);

    const item3title = document.createElement('div');
    item3title.setAttribute('id', 'item3title');
    item3title.textContent = 'Salmon Poke: £11';
    item3.appendChild(item3title);

    const item4 = document.createElement('div');
    item4.setAttribute('id', 'item4');
    item4.setAttribute('class', 'items');
    mpContainer.appendChild(item4);

    const item4pic = new Image();
    item4pic.setAttribute('id', 'item4pic');
    item4pic.src = _falafelpoke_jpg__WEBPACK_IMPORTED_MODULE_3__;
    item4.appendChild(item4pic);

    const item4title = document.createElement('div');
    item4title.setAttribute('id', 'item4title');
    item4title.textContent = 'Falafel Poke: £9';
    item4.appendChild(item4title);

    const item5 = document.createElement('div');
    item5.setAttribute('id', 'item5');
    item5.setAttribute('class', 'items');
    mpContainer.appendChild(item5);

    const item5pic = new Image();
    item5pic.setAttribute('id', 'item5pic');
    item5pic.src = _tunapoke_jpg__WEBPACK_IMPORTED_MODULE_4__;
    item5.appendChild(item5pic);

    const item5title = document.createElement('div');
    item5title.setAttribute('id', 'item5title');
    item5title.textContent = 'Tuna Poke: £10';
    item5.appendChild(item5title);
    
    const item6 = document.createElement('div');
    item6.setAttribute('id', 'item6');
    item6.setAttribute('class', 'items');
    mpContainer.appendChild(item6);

    const item6pic = new Image();
    item6pic.setAttribute('id', 'item6pic');
    item6pic.src = _spicysalmon_jpg__WEBPACK_IMPORTED_MODULE_5__;
    item6.appendChild(item6pic);

    const item6title = document.createElement('div');
    item6title.setAttribute('id', 'item6title');
    item6title.textContent = 'Spicy Salmon Poke: £12';
    item6.appendChild(item6title);

    return mpContainer;

}


/***/ }),

/***/ "./src/Aleo-Regular.ttf":
/*!******************************!*\
  !*** ./src/Aleo-Regular.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "870bfeb6b35b99533b38.ttf";

/***/ }),

/***/ "./src/avocadopoke.jpg":
/*!*****************************!*\
  !*** ./src/avocadopoke.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e808f319f813d4a272f3.jpg";

/***/ }),

/***/ "./src/bell-ring.svg":
/*!***************************!*\
  !*** ./src/bell-ring.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c8f51883770a4972cd4.svg";

/***/ }),

/***/ "./src/chickenpoke.jpg":
/*!*****************************!*\
  !*** ./src/chickenpoke.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa6fc12c8b9f26fb1b3a.jpg";

/***/ }),

/***/ "./src/clock-time-three.svg":
/*!**********************************!*\
  !*** ./src/clock-time-three.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a90dd6bf8c0a1db4a298.svg";

/***/ }),

/***/ "./src/falafelpoke.jpg":
/*!*****************************!*\
  !*** ./src/falafelpoke.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f457ae3a74fa30802d16.jpg";

/***/ }),

/***/ "./src/hawaiibg.png":
/*!**************************!*\
  !*** ./src/hawaiibg.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53f0738f62cf5dd899af.png";

/***/ }),

/***/ "./src/home.svg":
/*!**********************!*\
  !*** ./src/home.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8c7c536d6f704fbe961.svg";

/***/ }),

/***/ "./src/hprestaurant.jpg":
/*!******************************!*\
  !*** ./src/hprestaurant.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3297e955148bb4ea63b5.jpg";

/***/ }),

/***/ "./src/location.jpg":
/*!**************************!*\
  !*** ./src/location.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5d5e58563d61afb131f.jpg";

/***/ }),

/***/ "./src/message-reply.svg":
/*!*******************************!*\
  !*** ./src/message-reply.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "935c19fdead587cbbcc4.svg";

/***/ }),

/***/ "./src/salmonpoke.jpg":
/*!****************************!*\
  !*** ./src/salmonpoke.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11e5921c10f7964101e9.jpg";

/***/ }),

/***/ "./src/spicysalmon.jpg":
/*!*****************************!*\
  !*** ./src/spicysalmon.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4209a0bef5c36940d58a.jpg";

/***/ }),

/***/ "./src/tunapoke.jpg":
/*!**************************!*\
  !*** ./src/tunapoke.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59e5f63884d0526afb58.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdG1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaHBtb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51bW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0FsZW8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2hhd2FpaWJnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGVvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0XFxuICAgIGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0FsZW8nO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNuYXZCbG9jayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwyMDcsMjMxLDAuOCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcblxcbiN0YWJDb250ZW50IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwxMzYsMTAwLDAuOTUpO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2hwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gbWlubWF4KDE1MHB4LCA0MDBweCkgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hwQ29weTEge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jaHBDb3B5MiB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiNteVJlc3RhdXJhbnQge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNocENvcHkzIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RhYkJsb2NrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlbyc7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiYSg4MiwxMzYsMTAwLDEpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogcmdiYSg4MiwxMzYsMTAwLDEpO1xcbn1cXG5cXG4jbXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5pdGVtcyA+IGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDUpO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNjcENvbnRhaW5lciBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG59XFxuXFxuI2NwQ29udGFpbmVyIGltZ1tzcmMkPVxcXCIuanBnXFxcIl0ge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDBEQUE0QztJQUM1QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7dUJBQ21CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCxxQkFBcUI7SUFDckIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDJEQUEyRDtJQUMzRCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlbyc7XFxuICAgIHNyYzogdXJsKCcuL0FsZW8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vaGF3YWlpYmcucG5nJykgbm8tcmVwZWF0XFxuICAgIGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0FsZW8nO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNuYXZCbG9jayB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwyMDcsMjMxLDAuOCk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMHB4O1xcbiAgICByaWdodDogMHB4O1xcbiAgICB0b3A6IDBweDtcXG4gICAgcGFkZGluZzogMTVweCAwcHg7XFxufVxcblxcbiN0YWJDb250ZW50IHtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MiwxMzYsMTAwLDAuOTUpO1xcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2hwQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gbWlubWF4KDE1MHB4LCA0MDBweCkgYXV0bztcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2hwQ29weTEge1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG4jaHBDb3B5MiB7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxufVxcblxcbiNteVJlc3RhdXJhbnQge1xcbiAgICBncmlkLXJvdzogMy80O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNocENvcHkzIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RhYkJsb2NrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxlbyc7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogcmdiYSg4MiwxMzYsMTAwLDEpO1xcbn1cXG5cXG5idXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogcmdiYSg4MiwxMzYsMTAwLDEpO1xcbn1cXG5cXG4jbXBDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5pdGVtcyA+IGltZyB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNjcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDUpO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiNjcENvbnRhaW5lciBpbWdbc3JjJD1cXFwiLnN2Z1xcXCJdIHtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMjBweDtcXG59XFxuXFxuI2NwQ29udGFpbmVyIGltZ1tzcmMkPVxcXCIuanBnXFxcIl0ge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvY2F0aW9uIGZyb20gJy4vbG9jYXRpb24uanBnJztcbmltcG9ydCBjbG9jayBmcm9tICcuL2Nsb2NrLXRpbWUtdGhyZWUuc3ZnJztcbmltcG9ydCBiZWxsIGZyb20gJy4vYmVsbC1yaW5nLnN2Zyc7XG5pbXBvcnQgaG91c2UgZnJvbSAnLi9ob21lLnN2Zyc7XG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuL21lc3NhZ2UtcmVwbHkuc3ZnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNwICgpIHtcbiAgICBjb25zdCBjcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY3BDb250YWluZXInKTtcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmUuc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZScpO1xuICAgIHBob25lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mbycpO1xuICAgIGNwQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IHBob25lcGljID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVwaWMuc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZXBpYycpO1xuICAgIHBob25lcGljLnNyYyA9IGJlbGw7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVwaWMpO1xuXG4gICAgY29uc3QgcGhvbmV0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGhvbmV0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmV0ZXh0Jyk7XG4gICAgcGhvbmV0ZXh0LnRleHRDb250ZW50ID0gJzAxMy01NzktMTExMyc7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmV0ZXh0KTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvJyk7XG4gICAgY3BDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBjb25zdCBob21lcGljID0gbmV3IEltYWdlKCk7XG4gICAgaG9tZXBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwaWMnKTtcbiAgICBob21lcGljLnNyYyA9IGhvdXNlO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZXBpYyk7XG5cbiAgICBjb25zdCBob21ldGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWV0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZXRleHQnKTtcbiAgICBob21ldGV4dC50ZXh0Q29udGVudCA9ICdTdGFsbCAxNCwgQm9yb3VnaCBNYXJrZXQsIDggU291dGh3YXJrIFN0LCBMb25kb24nO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZXRleHQpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgZW1haWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmZvJyk7XG4gICAgY3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgZW1haWxwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBlbWFpbHBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlscGljJyk7XG4gICAgZW1haWxwaWMuc3JjID0gbWVzc2FnZTtcbiAgICBlbWFpbC5hcHBlbmRDaGlsZChlbWFpbHBpYyk7XG5cbiAgICBjb25zdCBlbWFpbHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbWFpbHRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbHRleHQnKTtcbiAgICBlbWFpbHRleHQudGV4dENvbnRlbnQgPSAnUG9rZUBCb3dsaW5nRm9yUG9rZS5jb20nO1xuICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsdGV4dCk7XG5cbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnMnKTtcbiAgICBob3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luZm8nKTtcbiAgICBjcENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICBjb25zdCBob3Vyc3BpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGhvdXJzcGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG91cnNwaWMnKTtcbiAgICBob3Vyc3BpYy5zcmMgPSBjbG9jaztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc3BpYyk7XG5cbiAgICBjb25zdCBob3Vyc3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob3Vyc3RleHQuc2V0QXR0cmlidXRlKCdpZCcsICdob3Vyc3RleHQnKTtcbiAgICBob3Vyc3RleHQudGV4dENvbnRlbnQgPSAnTW9uLVNhdHVyZGF5OiAxMEFNIC0gNVBNJztcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc3RleHQpO1xuXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFwJyk7XG4gICAgbWFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5mbycpXG4gICAgY3BDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIGNvbnN0IG1hcHBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcHBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21hcHBpYycpO1xuICAgIG1hcHBpYy5zcmMgPSBsb2NhdGlvbjtcbiAgICBtYXAuYXBwZW5kQ2hpbGQobWFwcGljKTtcblxuICAgIHJldHVybiBjcENvbnRhaW5lcjtcblxufSIsImltcG9ydCBocHJlc3RhdXJhbnQgZnJvbSAnLi9ocHJlc3RhdXJhbnQuanBnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhwICgpIHtcbiAgICBjb25zdCBocENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhwQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHBDb250YWluZXInKTtcblxuICAgIGNvbnN0IGhwQ29weTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBocENvcHkxLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHBDb3B5MScpO1xuICAgIGhwQ29weTEudGV4dENvbnRlbnQgPSBgTG9uZG9uJ3MgUHJlbWllciBQb2tlIFBhcmFkaXNlYDtcbiAgICBocENvbnRhaW5lci5hcHBlbmRDaGlsZChocENvcHkxKTtcbiAgICBcbiAgICBjb25zdCBocENvcHkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaHBDb3B5Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hwQ29weTInKTtcbiAgICBocENvcHkyLnRleHRDb250ZW50ID0gYEF1dGhlbnRpYyByZWNpcGVzIG1hc3RlcmVkIGluIEhhd2FpaSBhbmQgZGVsaXZlcmVkIHRvIExvbmRvbmA7XG4gICAgaHBDb250YWluZXIuYXBwZW5kQ2hpbGQoaHBDb3B5Mik7XG5cblxuICAgIGNvbnN0IG15UmVzdGF1cmFudCA9IG5ldyBJbWFnZSgpO1xuICAgIG15UmVzdGF1cmFudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ215UmVzdGF1cmFudCcpXG4gICAgbXlSZXN0YXVyYW50LnNyYyA9IGhwcmVzdGF1cmFudDtcbiAgICBocENvbnRhaW5lci5hcHBlbmRDaGlsZChteVJlc3RhdXJhbnQpO1xuXG4gICAgY29uc3QgaHBDb3B5MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhwQ29weTMuc2V0QXR0cmlidXRlKCdpZCcsICdocENvcHkzJyk7XG4gICAgaHBDb3B5My50ZXh0Q29udGVudCA9IGBDb21lIHZpc2l0IHRvZGF5IGZvciBhIGJvd2wgb2YgcGFyYWRpc2VgO1xuICAgIGhwQ29udGFpbmVyLmFwcGVuZENoaWxkKGhwQ29weTMpO1xuXG4gICAgcmV0dXJuIGhwQ29udGFpbmVyO1xufVxuIiwiXG5pbXBvcnQge2hwfSBmcm9tICcuL2hwbW9kdWxlLmpzJztcbmltcG9ydCB7bXB9IGZyb20gJy4vbWVudW1vZHVsZS5qcyc7XG5pbXBvcnQge2NwfSBmcm9tICcuL2NvbnRhY3Rtb2R1bGUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICBjb25zdCBuYXZCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2QmxvY2snKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5hdkJsb2NrKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQm93bGluZyBGb3IgUG9rZSc7XG4gICAgbmF2QmxvY2suYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFiQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJCbG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYkJsb2NrJyk7XG4gICAgbmF2QmxvY2suYXBwZW5kQ2hpbGQodGFiQmxvY2spO1xuXG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lVGFiJyk7XG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICB0YWJCbG9jay5hcHBlbmRDaGlsZChob21lVGFiKTtcblxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudVRhYicpO1xuICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgdGFiQmxvY2suYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RUYWInKTtcbiAgICBjb250YWN0VGFiLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIHRhYkJsb2NrLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJDb250ZW50Jyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcblxuICAgIGNvbnN0IGhvbWVkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZWRpdicpO1xuICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZWRpdik7XG4gICAgaG9tZWRpdi5hcHBlbmRDaGlsZChocCgpKTtcbiAgICBcbiAgICBjb25zdCBtZW51ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudWRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVkaXYnKTtcbiAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKG1lbnVkaXYpO1xuXG4gICAgY29uc3QgY29udGFjdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0ZGl2Jyk7XG4gICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0ZGl2KTtcblxuICAgIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChob21lZGl2LmNoaWxkTm9kZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIG1lbnVkaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb250YWN0ZGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaG9tZWRpdi5hcHBlbmRDaGlsZChocCgpKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAobWVudWRpdi5jaGlsZE5vZGVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBob21lZGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29udGFjdGRpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1lbnVkaXYuYXBwZW5kQ2hpbGQobXAoKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRhY3RkaXYuY2hpbGROb2Rlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaG9tZWRpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG1lbnVkaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb250YWN0ZGl2LmFwcGVuZENoaWxkKGNwKCkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgY2hpY2tlbnBva2UgZnJvbSAnLi9jaGlja2VucG9rZS5qcGcnO1xuaW1wb3J0IGF2b2NhZG9wb2tlIGZyb20gJy4vYXZvY2Fkb3Bva2UuanBnJztcbmltcG9ydCBzYWxtb25wb2tlIGZyb20gJy4vc2FsbW9ucG9rZS5qcGcnO1xuaW1wb3J0IGZhbGFmZWxwb2tlIGZyb20gJy4vZmFsYWZlbHBva2UuanBnJztcbmltcG9ydCB0dW5hcG9rZSBmcm9tICcuL3R1bmFwb2tlLmpwZyc7XG5pbXBvcnQgc3BpY3lzYWxtb24gZnJvbSAnLi9zcGljeXNhbG1vbi5qcGcnO1xuXG5leHBvcnQgZnVuY3Rpb24gbXAgKCkge1xuICAgIGNvbnN0IG1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbXBDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtcENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW0xJyk7XG4gICAgaXRlbTEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtcycpO1xuICAgIG1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0xKTtcblxuICAgIGNvbnN0IGl0ZW0xcGljID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbTFwaWMuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtMXBpYycpO1xuICAgIGl0ZW0xcGljLnNyYyA9IGNoaWNrZW5wb2tlO1xuICAgIGl0ZW0xLmFwcGVuZENoaWxkKGl0ZW0xcGljKTtcblxuICAgIGNvbnN0IGl0ZW0xdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtMXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTF0aXRsZScpO1xuICAgIGl0ZW0xdGl0bGUudGV4dENvbnRlbnQgPSAnQ2hpY2tlbiBQb2tlOiDCozEwJztcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMXRpdGxlKTtcblxuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTIuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtMicpO1xuICAgIGl0ZW0yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbXMnKTtcbiAgICBtcENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMik7XG5cbiAgICBjb25zdCBpdGVtMnBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW0ycGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTJwaWMnKTtcbiAgICBpdGVtMnBpYy5zcmMgPSBhdm9jYWRvcG9rZTtcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMnBpYyk7XG5cbiAgICBjb25zdCBpdGVtMnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTJ0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW0ydGl0bGUnKTtcbiAgICBpdGVtMnRpdGxlLnRleHRDb250ZW50ID0gJ0F2b2NhZG8gUG9rZTogwqM4JztcbiAgICBpdGVtMi5hcHBlbmRDaGlsZChpdGVtMnRpdGxlKTtcblxuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbTMuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtMycpO1xuICAgIGl0ZW0zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbXMnKTtcbiAgICBtcENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtMyk7XG5cbiAgICBjb25zdCBpdGVtM3BpYyA9IG5ldyBJbWFnZSgpO1xuICAgIGl0ZW0zcGljLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTNwaWMnKTtcbiAgICBpdGVtM3BpYy5zcmMgPSBzYWxtb25wb2tlO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zcGljKTtcblxuICAgIGNvbnN0IGl0ZW0zdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtM3RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTN0aXRsZScpO1xuICAgIGl0ZW0zdGl0bGUudGV4dENvbnRlbnQgPSAnU2FsbW9uIFBva2U6IMKjMTEnO1xuICAgIGl0ZW0zLmFwcGVuZENoaWxkKGl0ZW0zdGl0bGUpO1xuXG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW00Jyk7XG4gICAgaXRlbTQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtcycpO1xuICAgIG1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW00KTtcblxuICAgIGNvbnN0IGl0ZW00cGljID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbTRwaWMuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtNHBpYycpO1xuICAgIGl0ZW00cGljLnNyYyA9IGZhbGFmZWxwb2tlO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00cGljKTtcblxuICAgIGNvbnN0IGl0ZW00dGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTR0aXRsZScpO1xuICAgIGl0ZW00dGl0bGUudGV4dENvbnRlbnQgPSAnRmFsYWZlbCBQb2tlOiDCozknO1xuICAgIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00dGl0bGUpO1xuXG4gICAgY29uc3QgaXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW01Jyk7XG4gICAgaXRlbTUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtcycpO1xuICAgIG1wQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW01KTtcblxuICAgIGNvbnN0IGl0ZW01cGljID0gbmV3IEltYWdlKCk7XG4gICAgaXRlbTVwaWMuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtNXBpYycpO1xuICAgIGl0ZW01cGljLnNyYyA9IHR1bmFwb2tlO1xuICAgIGl0ZW01LmFwcGVuZENoaWxkKGl0ZW01cGljKTtcblxuICAgIGNvbnN0IGl0ZW01dGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtNXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTV0aXRsZScpO1xuICAgIGl0ZW01dGl0bGUudGV4dENvbnRlbnQgPSAnVHVuYSBQb2tlOiDCozEwJztcbiAgICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtNXRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBpdGVtNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW02LnNldEF0dHJpYnV0ZSgnaWQnLCAnaXRlbTYnKTtcbiAgICBpdGVtNi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW1zJyk7XG4gICAgbXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbTYpO1xuXG4gICAgY29uc3QgaXRlbTZwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpdGVtNnBpYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2l0ZW02cGljJyk7XG4gICAgaXRlbTZwaWMuc3JjID0gc3BpY3lzYWxtb247XG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZwaWMpO1xuXG4gICAgY29uc3QgaXRlbTZ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW02dGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICdpdGVtNnRpdGxlJyk7XG4gICAgaXRlbTZ0aXRsZS50ZXh0Q29udGVudCA9ICdTcGljeSBTYWxtb24gUG9rZTogwqMxMic7XG4gICAgaXRlbTYuYXBwZW5kQ2hpbGQoaXRlbTZ0aXRsZSk7XG5cbiAgICByZXR1cm4gbXBDb250YWluZXI7XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==