exports.ids = [7];
exports.modules = {

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e63f37d", content, true, context)
};

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_consolas_vue_vue_type_style_index_0_id_5d8a0258_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_consolas_vue_vue_type_style_index_0_id_5d8a0258_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_consolas_vue_vue_type_style_index_0_id_5d8a0258_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_consolas_vue_vue_type_style_index_0_id_5d8a0258_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_consolas_vue_vue_type_style_index_0_id_5d8a0258_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".consolas-container[data-v-5d8a0258]{animation:fadeIn-5d8a0258 .5s ease-in;margin:0 auto;max-width:800px;padding:20px;text-align:center}.emulador-grid[data-v-5d8a0258]{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));grid-gap:20px;gap:20px}.emulador-card[data-v-5d8a0258]{align-items:center;background-color:#fff;border-radius:90px;box-shadow:0 2px 10px rgba(0,0,0,.1);display:flex;height:120px;justify-content:center;overflow:hidden;position:relative;text-align:center;transition:box-shadow .3s;width:120px}.emulador-card[data-v-5d8a0258]:after{background:linear-gradient(180deg,hsla(0,0%,100%,.4),hsla(0,0%,100%,0));bottom:-10px;content:\"\";height:100%;left:0;opacity:.3;pointer-events:none;position:absolute;right:0;transform:scaleY(-1)}.emulador-imagen[data-v-5d8a0258]{height:auto;transition:transform .3s;width:60%}.emulador-card:hover .emulador-imagen[data-v-5d8a0258]{transform:rotate(0deg) scale(1.1)}@keyframes fadeIn-5d8a0258{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}@media (max-width:640px){.emulador-card[data-v-5d8a0258]{height:100px;width:100px}.emulador-grid[data-v-5d8a0258]{grid-template-columns:repeat(auto-fill,minmax(80px,1fr))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/consolas.vue?vue&type=template&id=5d8a0258&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "consolas-container"
  }, [_vm._ssrNode("<h2 class=\"text-xl font-bold text-gray-900\" data-v-5d8a0258>Consolas</h2> <p class=\"text-slate-500 mb-6 text-sm py-5\" data-v-5d8a0258>Explora las consolas clásicas y revive la nostalgia de los mejores videojuegos.</p> "), _vm._ssrNode("<div class=\"emulador-grid\" data-v-5d8a0258>", "</div>", [_c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/psp"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/psp-consoles.png",
      "alt": "PlayStation Portable"
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/gamecube"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/gamecube-consoles.png",
      "alt": "Nintendo Gamecube"
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/n64"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/n64-consoles.png",
      "alt": "Nintendo 64"
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/gba"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/gba-consoles.png",
      "alt": "Gameboy Advance"
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/snes"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/snes-consoles.png",
      "alt": "Super Nintendo"
    }
  })]), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "emulador-card",
    attrs: {
      "to": "/ps2"
    }
  }, [_c('img', {
    staticClass: "emulador-imagen",
    attrs: {
      "src": "/img/ps2-consoles.png",
      "alt": "Playstation 2"
    }
  })])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/consolas.vue?vue&type=template&id=5d8a0258&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/consolas.vue?vue&type=script&lang=js
/* harmony default export */ var consolasvue_type_script_lang_js = ({
  name: "ConsoleMenu"
});
// CONCATENATED MODULE: ./pages/consolas.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_consolasvue_type_script_lang_js = (consolasvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/consolas.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_consolasvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5d8a0258",
  "76809fbb"
  
)

/* harmony default export */ var consolas = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=consolas.js.map