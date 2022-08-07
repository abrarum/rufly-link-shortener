"use strict";
(() => {
var exports = {};
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 9043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_api),
  "doesOriginalURLExist": () => (/* binding */ doesOriginalURLExist),
  "doesShortURLExist": () => (/* binding */ doesShortURLExist),
  "getShortURL": () => (/* binding */ getShortURL)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/api.tsx

const baseURL = "https://jee79r0h59.execute-api.eu-central-1.amazonaws.com/v1";
const api = external_axios_default().create({
    baseURL: baseURL
});
const getShortURL = (urls)=>api.put(`/shortURL`, urls);
const doesShortURLExist = (shortURL)=>api.get(`/shortURL?shortURL=${shortURL}`);
const doesOriginalURLExist = (originalURL)=>api.get(`/originalURL?originalURL=${originalURL}`);
const apis = {
    getShortURL,
    doesShortURLExist
};
/* harmony default export */ const pages_api = (apis);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9043));
module.exports = __webpack_exports__;

})();