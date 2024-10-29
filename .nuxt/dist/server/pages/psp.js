exports.ids = [18];
exports.modules = {

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("08543a44", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_psp_vue_vue_type_style_index_0_id_06214ffc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_psp_vue_vue_type_style_index_0_id_06214ffc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_psp_vue_vue_type_style_index_0_id_06214ffc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_psp_vue_vue_type_style_index_0_id_06214ffc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_psp_vue_vue_type_style_index_0_id_06214ffc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-06214ffc]{animation:fadeIn-06214ffc .5s ease-in;max-width:1200px}.game-card[data-v-06214ffc]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-06214ffc]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-06214ffc]{transition:transform .3s}@keyframes fadeIn-06214ffc{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-06214ffc],.fade-leave-active[data-v-06214ffc]{transition:opacity .5s,transform .5s}.fade-enter[data-v-06214ffc],.fade-leave-to[data-v-06214ffc]{opacity:0;transform:translateY(-20px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/psp.vue?vue&type=template&id=06214ffc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mx-auto p-4 fadeIn"
  }, [_c('transition', {
    attrs: {
      "name": "fade"
    },
    on: {
      "before-enter": _vm.beforeEnter,
      "enter": _vm.enter
    }
  }, [_vm.isVisible ? _c('h1', {
    staticClass: "text-xl font-bold mb-6"
  }, [_vm._v("Catálogo de Juegos PSP")]) : _vm._e()]), _vm._ssrNode(" <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4\" data-v-06214ffc>" + _vm._ssrList(_vm.games, function (game) {
    return "<div class=\"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card\" data-v-06214ffc><img" + _vm._ssrAttr("src", game.cover) + " alt=\"Carátula del juego\" class=\"game-image w-full h-24 object-contain rounded-lg mb-1\" data-v-06214ffc> <h2 class=\"text-xs font-bold\" data-v-06214ffc>" + _vm._ssrEscape(_vm._s(game.name)) + "</h2> <p class=\"text-xs text-gray-600\" data-v-06214ffc>" + _vm._ssrEscape(_vm._s(game.description)) + "</p> " + (_vm.isSubscribed || _vm.isAdmin ? "<button class=\"mt-1 bg-slate-50 text-sky-800 text-xs\" data-v-06214ffc>\n        Descargar\n      </button>" : "<p class=\"mt-1 text-red-500 text-xs\" data-v-06214ffc>Suscríbete para descargar</p>") + "</div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/psp.vue?vue&type=template&id=06214ffc&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/psp.vue?vue&type=script&lang=js
/* harmony default export */ var pspvue_type_script_lang_js = ({
  data() {
    return {
      isVisible: false,
      isAdmin: false,
      isSubscribed: false,
      games: [{
        id: 1,
        name: 'Gran Turismo',
        cover: '/img/psp-granturismo.jpg',
        downloadLink: 'https://drive.google.com/file/d/1tXIe_NEj682QdCLAg1SMDbw_fxhXx_OR/view?usp=sharing',
        description: 'Carreras'
      }, {
        id: 2,
        name: 'G.I. Joe: The Rise of Cobra',
        cover: '/img/psp-joe.jpg',
        downloadLink: 'https://drive.google.com/file/d/16J8J9mlBUnfhjguRRhz7vHmAsS0LTGPH/view?usp=sharing',
        description: 'Acción'
      }, {
        id: 3,
        name: 'Duke Nukem: Critical Mass (Jul 30, 2010 prototype)',
        cover: '/img/psp-dukenukemcriticalmass.jpg',
        downloadLink: 'https://drive.google.com/file/d/1tiR3azYz9U7ByhWQ4J6Nckeg9M0oD5zl/view?usp=sharing',
        description: 'Acción'
      }, {
        id: 4,
        name: 'Def Jam Fight for NY: The Takeover',
        cover: '/img/psp-defjam.png',
        downloadLink: 'https://drive.google.com/file/d/1WKE5Lr1S3MI6hUaLvZXQVk1kM6C9kreL/view?usp=sharing',
        description: 'Lucha'
      }, {
        id: 5,
        name: 'Midnight Club: Los Angeles',
        cover: '/img/psp-mcremix.jpg',
        downloadLink: 'https://drive.google.com/file/d/15j7y2E77oltV37cqRijRmmhauVB_XRDm/view?usp=sharing',
        description: 'Carreras'
      }, {
        id: 6,
        name: 'Little Big Planet',
        cover: '/img/psp-LittleBigPlanet.jpg',
        downloadLink: 'https://drive.google.com/file/d/1RZz4f0OZ_ChYixw3hWKOGulIEUstB5mF/view?usp=sharing',
        description: 'Plataformas'
      }, {
        id: 7,
        name: 'Silent Hill: Origins',
        cover: '/img/psp-silenthill.origins.png',
        downloadLink: 'https://drive.google.com/file/d/1mcLI4ruO9glsd_P3L-by527kNTDGVzLR/view?usp=sharing',
        description: 'Survival Horror / Aventura'
      }, {
        id: 8,
        name: 'Peggle',
        cover: '/img/Peggle.png',
        downloadLink: 'https://drive.google.com/file/d/14xeCREAbUCguZ28H5xlz3ilEKZRAIIbG/view?usp=sharing',
        description: 'Puzzle'
      }]
    };
  },
  mounted() {
    this.isVisible = true;
    const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
    if (emailCookie) {
      const emailValue = emailCookie.split('=')[1];
      this.isAdmin = emailValue === '8hsabitgames@gmail.com';
      this.getUserInfo(emailValue);
    }
  },
  methods: {
    async getUserInfo(email) {
      try {
        const response = await fetch(`api/user?email=${email}`);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const userData = await response.json();
        this.isSubscribed = userData.isSubscribed;
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    },
    downloadGame(game) {
      window.location.href = game.downloadLink;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
    },
    enter(el, done) {
      el.offsetHeight;
      el.style.transition = 'opacity 0.5s, transform 0.5s';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      done();
    }
  }
});
// CONCATENATED MODULE: ./pages/psp.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_pspvue_type_script_lang_js = (pspvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/psp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pspvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06214ffc",
  "1694553c"
  
)

/* harmony default export */ var psp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=psp.js.map