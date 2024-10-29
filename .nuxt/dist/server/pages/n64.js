exports.ids = [14];
exports.modules = {

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0ffafcf4", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_n64_vue_vue_type_style_index_0_id_47fd9738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_n64_vue_vue_type_style_index_0_id_47fd9738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_n64_vue_vue_type_style_index_0_id_47fd9738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_n64_vue_vue_type_style_index_0_id_47fd9738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_n64_vue_vue_type_style_index_0_id_47fd9738_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-47fd9738]{animation:fadeIn-47fd9738 .5s ease-in;max-width:1200px}.game-card[data-v-47fd9738]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-47fd9738]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-47fd9738]{transition:transform .3s}@keyframes fadeIn-47fd9738{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-47fd9738],.fade-leave-active[data-v-47fd9738]{transition:opacity .5s,transform .5s}.fade-enter[data-v-47fd9738],.fade-leave-to[data-v-47fd9738]{opacity:0;transform:translateY(-20px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/n64.vue?vue&type=template&id=47fd9738&scoped=true
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
  }, [_vm._v("Catálogo de Juegos N64")]) : _vm._e()]), _vm._ssrNode(" <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4\" data-v-47fd9738>" + _vm._ssrList(_vm.games, function (game) {
    return "<div class=\"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card\" data-v-47fd9738><img" + _vm._ssrAttr("src", game.cover) + " alt=\"Carátula del juego\" class=\"game-image w-full h-24 object-contain rounded-lg mb-1\" data-v-47fd9738> <h2 class=\"text-xs font-bold\" data-v-47fd9738>" + _vm._ssrEscape(_vm._s(game.name)) + "</h2> <p class=\"text-xs text-gray-600\" data-v-47fd9738>" + _vm._ssrEscape(_vm._s(game.description)) + "</p> " + (_vm.isSubscribed || _vm.isAdmin ? "<button class=\"mt-1 bg-slate-50 text-sky-800 text-xs\" data-v-47fd9738>\n        Descargar\n      </button>" : "<p class=\"mt-1 text-red-500 text-xs\" data-v-47fd9738>Suscríbete para descargar</p>") + "</div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/n64.vue?vue&type=template&id=47fd9738&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/n64.vue?vue&type=script&lang=js
/* harmony default export */ var n64vue_type_script_lang_js = ({
  data() {
    return {
      isVisible: false,
      isAdmin: false,
      isSubscribed: false,
      games: [{
        id: 1,
        name: 'Jet Force Gemini',
        cover: '/img/jet-force-gemini.webp',
        description: 'Aventuras',
        downloadLink: 'https://drive.google.com/file/d/1Tzl8CtlaN00RJ_SRKsfIour88DM3gtqA/view?usp=sharing'
      }, {
        id: 2,
        name: 'Body Harvest',
        cover: '/img/body-harvest.webp',
        description: 'Acción',
        downloadLink: 'https://drive.google.com/file/d/1ePA3XfwGu41INWgrOG1wUQSKJJ5tQbtF/view?usp=sharing'
      }, {
        id: 3,
        name: 'Space Station Silicon Valley',
        cover: '/img/space-station-silicon-valley.webp',
        description: 'Plataformas',
        downloadLink: 'https://drive.google.com/file/d/1jLjMFyazzmieXVCCNl53TZ7IdkR_OWlp/view?usp=sharing'
      }, {
        id: 4,
        name: 'Blast Corps',
        cover: '/img/blast-corps-v1-1.webp',
        description: ' Estrategia',
        downloadLink: 'https://drive.google.com/file/d/1Dp5jxtrT10vN9Ia84To5mC3cf5dPn8gp/view?usp=sharing'
      }, {
        id: 5,
        name: 'Forsaken 64',
        cover: '/img/forsaken-64.webp',
        description: 'Shooter',
        downloadLink: 'https://drive.google.com/file/d/17-GmMV5qQWnjlRSjJHytUgjXjPifh_X2/view?usp=sharing'
      }, {
        id: 6,
        name: 'Turok: Dinosaur Hunter',
        cover: '/img/turok-dinosaur-hunter-v1-2.webp',
        description: 'Shooter',
        downloadLink: 'https://drive.google.com/file/d/1qUJMbZLSb52f66r-5R4MuN1FF25HOAfu/view?usp=sharing'
      }, {
        id: 7,
        name: 'Shadow Man',
        cover: '/img/shadow-man.webp',
        description: 'Acción',
        downloadLink: 'https://drive.google.com/file/d/1Z54qeeLentle9rYi6QitUqa_5JGOuBXu/view?usp=sharing'
      }, {
        id: 8,
        name: 'Extreme-G',
        cover: '/img/extreme-g.webp',
        description: 'Carreras',
        downloadLink: 'https://drive.google.com/file/d/1H_db9KDB3QT6Y4quUOwuErcwPhOsRPjV/view?usp=sharing'
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
        const response = await fetch(`/api/user?email=${email}`);
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
// CONCATENATED MODULE: ./pages/n64.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_n64vue_type_script_lang_js = (n64vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/n64.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_n64vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47fd9738",
  "1f843ec1"
  
)

/* harmony default export */ var n64 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=n64.js.map