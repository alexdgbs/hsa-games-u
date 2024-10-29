exports.ids = [11,2];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("322e5e12", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=template&id=f0b46742&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-center py-12 bg-white"
  }, [_vm._ssrNode("<img src=\"/img/silent-hill-psp.png\" alt=\"Carátula de juego PSP\" class=\"mx-auto mb-8 w-32 h-auto animate-fadeIn\" data-v-f0b46742> <h1 class=\"text-md font-bold text-gray-900 mb-4 animate-slideIn\" data-v-f0b46742>Tu colección de juegos clásicos a tu alcance</h1> <h4 class=\"text-xs text-gray-900 mb-4 animate-slideIn\" data-v-f0b46742>Sin virus, sin publicidad</h4> <p class=\"text-xs text-red-500 mb-8 animate-slideIn\" data-v-f0b46742>Descarga sin límites</p> <div class=\"space-x-4\" data-v-f0b46742><a href=\"/login\" class=\"minimal-button text-sky-800 animate-button text-sm font-semibold\" data-v-f0b46742>¡Comienza ya!</a> <a href=\"/consolas\" class=\"minimal-button text-sky-800 border-gray-300 animate-button text-sm font-semibold\" data-v-f0b46742>Explorar Juegos</a></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=template&id=f0b46742&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroSection.vue?vue&type=script&lang=js
/* harmony default export */ var HeroSectionvue_type_script_lang_js = ({
  name: "HeroSection"
});
// CONCATENATED MODULE: ./components/HeroSection.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HeroSectionvue_type_script_lang_js = (HeroSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroSection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f0b46742",
  "51e54148"
  
)

/* harmony default export */ var HeroSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_f0b46742_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_f0b46742_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_f0b46742_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_f0b46742_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroSection_vue_vue_type_style_index_0_id_f0b46742_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".animate-fadeIn[data-v-f0b46742]{animation:fadeIn-f0b46742 1s ease-in-out}@keyframes fadeIn-f0b46742{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.animate-slideIn[data-v-f0b46742]{animation:slideIn-f0b46742 1s ease-in-out forwards}@keyframes slideIn-f0b46742{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.minimal-button[data-v-f0b46742]{background:transparent;background-color:rgba(59,130,246,.1);border-radius:.375rem;font-size:.875rem;padding:.5rem 1.5rem;transition:background-color .3s,color .3s,transform .2s}.animate-button[data-v-f0b46742]:hover{background-color:hsla(0,0%,100%,.1);transform:scale(1.05)}@media (max-width:768px){.text-xl[data-v-f0b46742]{font-size:1.25rem}.text-sm[data-v-f0b46742]{font-size:.875rem}.minimal-button[data-v-f0b46742]{padding:.5rem 1rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=036171f8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('HeroSection')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=036171f8&scoped=true

// EXTERNAL MODULE: ./components/HeroSection.vue + 4 modules
var HeroSection = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  components: {
    HeroSection: HeroSection["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "036171f8",
  "6c5d15a7"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeroSection: __webpack_require__(28).default})


/***/ })

};;
//# sourceMappingURL=index.js.map