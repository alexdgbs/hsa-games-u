exports.ids = [13];
exports.modules = {

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3b41f00d", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77166f08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77166f08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77166f08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77166f08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_77166f08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "button[data-v-77166f08],input[data-v-77166f08]{transition:all .2s ease-in-out}input[data-v-77166f08]:focus{border-color:#3b82f6;outline:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=77166f08&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "bg-white py-6 flex items-center justify-center"
  }, [_vm._ssrNode("<div class=\"w-full max-w-xs bg-white rounded-lg\" data-v-77166f08>", "</div>", [_vm._ssrNode("<div class=\"p-4 space-y-4 sm:p-4\" data-v-77166f08>", "</div>", [_vm._ssrNode("<h2 class=\"text-lg font-bold leading-tight text-gray-900 text-left\" data-v-77166f08>Inicia sesión</h2> "), _vm._ssrNode("<form class=\"space-y-2\" data-v-77166f08>", "</form>", [_vm._ssrNode("<div data-v-77166f08><label for=\"email\" class=\"block text-sm font-medium text-gray-700\" data-v-77166f08>Correo electrónico</label> <input type=\"email\" id=\"email\" placeholder=\"8hsabitgames@gmail.com\" required=\"required\"" + _vm._ssrAttr("value", _vm.email) + " class=\"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50\" data-v-77166f08></div> <div data-v-77166f08><label for=\"password\" class=\"block text-sm font-medium text-gray-700\" data-v-77166f08>Contraseña</label> <input type=\"password\" id=\"password\" placeholder=\"********\" required=\"required\"" + _vm._ssrAttr("value", _vm.password) + " class=\"mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50\" data-v-77166f08></div> <button type=\"submit\"" + _vm._ssrAttr("disabled", _vm.isSubmitting) + " class=\"w-full bg-slate-100 text-black font-medium rounded-lg text-sm px-3 py-2 hover:bg-slate-200\" data-v-77166f08>\n          Continuar\n        </button> " + (_vm.errorMessage ? "<p class=\"mt-2 text-red-600 text-center\" data-v-77166f08>" + _vm._ssrEscape(_vm._s(_vm.errorMessage)) + "</p>" : "<!---->") + " "), _vm._ssrNode("<p class=\"text-xs text-gray-500 text-center\" data-v-77166f08>", "</p>", [_vm._ssrNode("\n          ¿No tienes una cuenta? "), _c('nuxt-link', {
    staticClass: "text-sky-800 hover:underline",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Crea una cuenta")])], 2)], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=77166f08&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js
/* harmony default export */ var loginvue_type_script_lang_js = ({
  data() {
    return {
      email: '',
      password: '',
      isSubmitting: false,
      errorMessage: ''
    };
  },
  methods: {
    async handleLogin() {
      this.isSubmitting = true;
      this.errorMessage = '';
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Error al iniciar sesión');
        }
        document.cookie = `email=${data.email}; path=/;`;
        document.cookie = `isSubscribed=${data.isSubscribed}; path=/;`;
        this.$router.push('/');
        window.dispatchEvent(new Event('storage'));
      } catch (error) {
        this.errorMessage = error.message || 'Error de red. Inténtalo de nuevo.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_loginvue_type_script_lang_js = (loginvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77166f08",
  "3604b8be"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map