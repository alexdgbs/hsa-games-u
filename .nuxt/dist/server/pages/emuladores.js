exports.ids = [8];
exports.modules = {

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0488c922", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emuladores_vue_vue_type_style_index_0_id_3163baae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emuladores_vue_vue_type_style_index_0_id_3163baae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emuladores_vue_vue_type_style_index_0_id_3163baae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emuladores_vue_vue_type_style_index_0_id_3163baae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_emuladores_vue_vue_type_style_index_0_id_3163baae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".fade-in[data-v-3163baae]{animation:fadeIn-3163baae 1s forwards;opacity:0}.slide-in[data-v-3163baae]{animation:slideIn-3163baae 1s forwards;opacity:0;transform:translateY(20px)}@keyframes fadeIn-3163baae{to{opacity:1}}@keyframes slideIn-3163baae{to{opacity:1;transform:translateY(0)}}.emuladores-container[data-v-3163baae]{margin:0 auto;max-width:800px;padding:20px;text-align:center}h1[data-v-3163baae]{font-size:1.5rem;margin-bottom:20px}.tv-container[data-v-3163baae]{background:#fff;border-radius:15px;box-shadow:0 0 10px rgba(0,0,0,.5);overflow:hidden;padding:35px;position:relative}.tv-container[data-v-3163baae]:before{border:5px solid #fff;border-radius:10px;bottom:5px;content:\"\";left:5px;pointer-events:none;position:absolute;right:5px;top:5px}.emulador-grid[data-v-3163baae]{display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));grid-gap:15px;gap:15px;padding:10px 0}.emulador-card[data-v-3163baae]{align-items:center;background-color:#fff;border-radius:100px;box-shadow:0 2px 10px rgba(0,0,0,.1);display:flex;height:100px;justify-content:center;text-align:center;transition:transform .3s,box-shadow .3s;width:100px}.emulador-card[data-v-3163baae]:hover{box-shadow:0 4px 20px rgba(0,0,0,.2);transform:scale(1.05)}.emulador-imagen[data-v-3163baae]{height:auto;width:60%}.emulador-link[data-v-3163baae]{align-items:center;display:flex;height:100%;justify-content:center;width:100%}@media (max-width:640px){h1[data-v-3163baae]{font-size:1.25rem}.emulador-card[data-v-3163baae]{height:80px;margin:10px;width:80px}.emulador-grid[data-v-3163baae]{grid-template-columns:repeat(auto-fill,minmax(70px,1fr))}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/emuladores.vue?vue&type=template&id=3163baae&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "emuladores-container fade-in slide-in"
  }, [_vm._ssrNode("<h1 class=\"text-xl font-bold tracking-tight text-gray-900 sm:text-xl\" data-v-3163baae>Emuladores</h1> <p class=\"text-slate-500 mb-6 text-sm py-5\" data-v-3163baae>Links de las páginas oficiales</p> <div class=\"tv-container\" data-v-3163baae><div class=\"emulador-grid\" data-v-3163baae>" + _vm._ssrList(_vm.emuladores, function (emulador, index) {
    return "<div class=\"emulador-card\" data-v-3163baae><a" + _vm._ssrAttr("href", emulador.link) + " target=\"_blank\" class=\"emulador-link\" data-v-3163baae><img" + _vm._ssrAttr("src", emulador.imagen) + _vm._ssrAttr("alt", 'Imagen de ' + emulador.nombre) + " class=\"emulador-imagen\" data-v-3163baae></a></div>";
  }) + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/emuladores.vue?vue&type=template&id=3163baae&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/emuladores.vue?vue&type=script&lang=js
/* harmony default export */ var emuladoresvue_type_script_lang_js = ({
  data() {
    return {
      emuladores: [{
        nombre: 'PSP',
        link: 'https://www.ppsspp.org/',
        imagen: '/img/psp.png'
      }, {
        nombre: 'PS2',
        link: 'https://pcsx2.net/',
        imagen: '/img/ps2.png'
      }, {
        nombre: 'GameCube',
        link: 'https://es.dolphin-emu.org/?cr=es',
        imagen: '/img/gamecube-consoles.png'
      }, {
        nombre: 'GBA',
        link: 'https://visualboyadvance.org/',
        imagen: '/img/gameboyadvance.png'
      }, {
        nombre: 'Snes',
        link: 'https://www.snes9x.com/',
        imagen: '/img/nes.png'
      }, {
        nombre: 'Nintendo 64',
        link: 'https://www.pj64-emu.com/',
        imagen: '/img/nintendo64.png'
      }],
      hoveredIndex: null
    };
  }
});
// CONCATENATED MODULE: ./pages/emuladores.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_emuladoresvue_type_script_lang_js = (emuladoresvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/emuladores.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_emuladoresvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3163baae",
  "880abb24"
  
)

/* harmony default export */ var emuladores = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=emuladores.js.map