exports.ids = [22];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(74);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6b959ed5", content, true, context)
};

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_0cc32ae2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_0cc32ae2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_0cc32ae2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_0cc32ae2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_team_vue_vue_type_style_index_0_id_0cc32ae2_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shadow[data-v-0cc32ae2]{box-shadow:0 5px 15px rgba(0,0,0,.1)}footer p[data-v-0cc32ae2]{font-size:.75rem}body[data-v-0cc32ae2]{background-color:#f9fafb;font-family:\"Inter\",sans-serif}.bg-gray-100[data-v-0cc32ae2]{background-color:#f3f4f6}.transition-transform[data-v-0cc32ae2]{transition:transform .3s ease}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team.vue?vue&type=template&id=0cc32ae2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "text-center py-6 bg-white"
  }, [_vm._ssrNode("<h2 class=\"text-xl font-bold mb-12 text-gray-900\" data-v-0cc32ae2>Team</h2> <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto\" data-v-0cc32ae2><div class=\"bg-white rounded-lg p-3 transition-transform transform hover:scale-105\" data-v-0cc32ae2><img src=\"/img/Samuel.png\" alt=\"Miembro del equipo\" class=\"mb-2 w-20 h-auto mx-auto rounded-full border-4 border-gray-200\" data-v-0cc32ae2> <h3 class=\"text-sm font-semibold text-gray-800\" data-v-0cc32ae2>Alejandro Delgadillo</h3> <p class=\"text-sm text-gray-600 mt-1\" data-v-0cc32ae2>Desarrollador/Backend</p> <p class=\"text-sm mt-1 text-gray-400\" data-v-0cc32ae2>006210025</p></div> <div class=\"bg-white rounded-lg p-3 transition-transform transform hover:scale-105\" data-v-0cc32ae2><img src=\"/img/Hector.png\" alt=\"Miembro del equipo\" class=\"mb-2 w-20 h-auto mx-auto rounded-full border-4 border-gray-200\" data-v-0cc32ae2> <h3 class=\"text-sm font-semibold text-gray-800\" data-v-0cc32ae2>Héctor Chacón </h3> <p class=\"text-sm text-gray-600 mt-1\" data-v-0cc32ae2>Documentación/Estructuración</p> <p class=\"text-sm mt-1 text-gray-400\" data-v-0cc32ae2>9120170033</p></div> <div class=\"bg-white rounded-lg p-3 transition-transform transform hover:scale-105\" data-v-0cc32ae2><img src=\"/img/Alexis.png\" alt=\"Miembro del equipo\" class=\"mb-2 w-20 h-auto mx-auto rounded-full border-4 border-gray-200\" data-v-0cc32ae2> <h3 class=\"text-sm font-semibold text-gray-800\" data-v-0cc32ae2>Alexis Zavala</h3> <p class=\"text-sm text-gray-600 mt-1\" data-v-0cc32ae2>Documentación</p> <p class=\"text-sm mt-1 text-gray-400\" data-v-0cc32ae2>091170038</p></div></div> <footer class=\"mt-8 text-center text-gray-500 text-xs\" data-v-0cc32ae2><h1 class=\"text-base font-semibold text-gray-800\" data-v-0cc32ae2>Contacto</h1> <p class=\"text-gray-600 text-sm mt-1\" data-v-0cc32ae2>8hsabitgames@gmail.com</p> <p data-v-0cc32ae2>© 2024 HSA Games. Todos los derechos reservados.</p></footer>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/team.vue?vue&type=template&id=0cc32ae2&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/team.vue?vue&type=script&lang=js
/* harmony default export */ var teamvue_type_script_lang_js = ({
  name: "TeamSection"
});
// CONCATENATED MODULE: ./pages/team.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_teamvue_type_script_lang_js = (teamvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/team.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(73)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_teamvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0cc32ae2",
  "46b0af98"
  
)

/* harmony default export */ var team = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=team.js.map