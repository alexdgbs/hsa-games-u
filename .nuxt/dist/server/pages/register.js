exports.ids = [19];
exports.modules = {

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f503405a", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_768cb76d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_768cb76d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_768cb76d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_768cb76d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_768cb76d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "button[data-v-768cb76d],input[data-v-768cb76d]{transition:all .2s ease-in-out}input[data-v-768cb76d]:focus{border-color:#3b82f6;outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=768cb76d&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "bg-white py-6 flex items-center justify-center"
  }, [_vm._ssrNode("<div class=\"w-full max-w-xs bg-white rounded-lg\" data-v-768cb76d><div class=\"p-4 space-y-4 sm:p-6\" data-v-768cb76d><h1 class=\"text-lg font-bold leading-tight text-gray-900\" data-v-768cb76d>Crear cuenta</h1> <form class=\"space-y-3\" data-v-768cb76d><div data-v-768cb76d><label for=\"email\" class=\"block text-sm font-medium text-gray-700\" data-v-768cb76d>Correo Electrónico</label> <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"8hsabitgames@gmail.com\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " class=\"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50\" data-v-768cb76d></div> <div data-v-768cb76d><label for=\"password\" class=\"block text-sm font-medium text-gray-700\" data-v-768cb76d>Contraseña</label> <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"••••••••\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " class=\"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50\" data-v-768cb76d></div> <div data-v-768cb76d><label for=\"confirm-password\" class=\"block text-sm font-medium text-gray-700\" data-v-768cb76d>Confirmar Contraseña</label> <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" placeholder=\"••••••••\" required=\"required\"" + _vm._ssrAttr("value", _vm.confirmPassword) + " class=\"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50\" data-v-768cb76d></div> <div class=\"flex items-center\" data-v-768cb76d><input id=\"terms\" type=\"checkbox\" required=\"required\"" + _vm._ssrAttr("checked", Array.isArray(_vm.acceptTerms) ? _vm._i(_vm.acceptTerms, null) > -1 : _vm.acceptTerms) + " class=\"w-4 h-4 border-gray-300 rounded\" data-v-768cb76d> <label for=\"terms\" class=\"ml-2 text-sm text-gray-600\" data-v-768cb76d>Acepto los <a href=\"#\" class=\"text-sky-800 hover:underline\" data-v-768cb76d>términos</a></label></div> <button type=\"submit\" class=\"w-full bg-slate-100 text-black font-medium rounded-lg text-sm px-3 py-2 hover:bg-slate-200\" data-v-768cb76d>\n          Crear cuenta\n        </button> <p class=\"text-xs text-gray-500\" data-v-768cb76d>\n          ¿Ya tienes una cuenta? <a href=\"/login\" class=\"text-sky-800 hover:underline\" data-v-768cb76d>Inicia sesión</a></p></form></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=768cb76d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js
/* harmony default export */ var registervue_type_script_lang_js = ({
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            acceptTerms: this.acceptTerms
          })
        });
        if (response.ok) {
          this.$router.push('/login');
        } else {
          const data = await response.json();
          alert(data.message || 'Error en el registro');
        }
      } catch (error) {
        alert('Error de red. Inténtalo de nuevo.');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_registervue_type_script_lang_js = (registervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(67)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "768cb76d",
  "24708144"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=register.js.map