exports.ids = [20];
exports.modules = {

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("281a3bb1", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snes_vue_vue_type_style_index_0_id_308dc764_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snes_vue_vue_type_style_index_0_id_308dc764_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snes_vue_vue_type_style_index_0_id_308dc764_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snes_vue_vue_type_style_index_0_id_308dc764_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_snes_vue_vue_type_style_index_0_id_308dc764_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-308dc764]{animation:fadeIn-308dc764 .5s ease-in;max-width:1200px}.game-card[data-v-308dc764]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-308dc764]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-308dc764]{transition:transform .3s}@keyframes fadeIn-308dc764{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-308dc764],.fade-leave-active[data-v-308dc764]{transition:opacity .5s,transform .5s}.fade-enter[data-v-308dc764],.fade-leave-to[data-v-308dc764]{opacity:0;transform:translateY(-20px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/snes.vue?vue&type=template&id=308dc764&scoped=true
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
  }, [_vm._v("Catálogo de Juegos SNES")]) : _vm._e()]), _vm._ssrNode(" <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4\" data-v-308dc764>" + _vm._ssrList(_vm.games, function (game) {
    return "<div class=\"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card\" data-v-308dc764><img" + _vm._ssrAttr("src", game.cover) + " alt=\"Carátula del juego\" class=\"game-image w-full h-24 object-contain rounded-lg mb-1\" data-v-308dc764> <h2 class=\"text-xs font-bold\" data-v-308dc764>" + _vm._ssrEscape(_vm._s(game.name)) + "</h2> <p class=\"text-xs text-gray-600\" data-v-308dc764>" + _vm._ssrEscape(_vm._s(game.description)) + "</p> " + (_vm.isSubscribed || _vm.isAdmin ? "<button class=\"mt-1 bg-slate-50 text-sky-800 text-xs\" data-v-308dc764>\n        Descargar\n      </button>" : "<p class=\"mt-1 text-red-500 text-xs\" data-v-308dc764>Suscríbete para descargar</p>") + "</div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/snes.vue?vue&type=template&id=308dc764&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/snes.vue?vue&type=script&lang=js
/* harmony default export */ var snesvue_type_script_lang_js = ({
  data() {
    return {
      isVisible: false,
      isAdmin: false,
      isSubscribed: false,
      games: [{
        id: 1,
        name: 'Street Fighter II Turbo',
        cover: '/img/street-fighter-ii-turbo.webp',
        downloadLink: 'https://drive.google.com/file/d/1QL_R5yv_hTQpXt57TW1a0IVLCHrW0aB_/view?usp=sharing',
        description: 'Lucha'
      }, {
        id: 2,
        name: 'Chrono Trigger',
        cover: '/img/Chrono+Trigger.jpg',
        downloadLink: 'https://drive.google.com/file/d/1sei4p0EfzSwTLtRtRdQXIYfwXJCMf639/view?usp=drive_link',
        description: 'RPG'
      }, {
        id: 3,
        name: 'EarthBound',
        cover: '/img/EarthBound.jpg',
        downloadLink: 'https://drive.google.com/file/d/17lmqCPu9cTj5x_AUHHwKjz4vrivx6GfB/view?usp=sharing',
        description: 'RPG'
      }, {
        id: 4,
        name: 'Final Fantasy III',
        cover: '/img/Final+Fantasy+III.jpg',
        downloadLink: 'https://drive.google.com/file/d/1YueokRaXH-mzwBaL2Hyksrv5NVFSmyAj/view?usp=sharing',
        description: 'RPG'
      }, {
        id: 5,
        name: 'Super Mario All-Stars',
        cover: '/img/super-mario-all-stars.webp',
        downloadLink: 'https://drive.google.com/file/d/1_FwJAurQP7_GjGeB0RxjnuHz2ywEzw0q/view?usp=sharing',
        description: 'Plataformas'
      }, {
        id: 6,
        name: 'The Legend of Zelda: A Link to the Past',
        cover: '/img/legend-of-zelda-the-a-link-to-the-past.webp',
        downloadLink: 'https://drive.google.com/file/d/1qf6gao1MPlozBbcX-p4SY5Dtt-bESoko/view?usp=drive_link',
        description: 'Acción/Aventura'
      }, {
        id: 7,
        name: 'Super Metroid',
        cover: '/img/super-metroid.webp',
        downloadLink: 'https://drive.google.com/file/d/1wpzYXkOEoRJLrVorr06a71g30yMDkFog/view?usp=sharing',
        description: 'Acción/Aventura'
      }, {
        id: 8,
        name: 'Contra III: The Alien Wars',
        cover: '/img/contra-iii-the-alien-wars.webp',
        downloadLink: 'https://drive.google.com/file/d/1-tBZehpH5YfcFrPFvFODlRUgM4QK6aGv/view?usp=sharing',
        description: 'Acción'
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
// CONCATENATED MODULE: ./pages/snes.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_snesvue_type_script_lang_js = (snesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/snes.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_snesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "308dc764",
  "7be0f0f8"
  
)

/* harmony default export */ var snes = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=snes.js.map