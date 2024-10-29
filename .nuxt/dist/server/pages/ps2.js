exports.ids = [17];
exports.modules = {

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28660e98", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ps2_vue_vue_type_style_index_0_id_bc7ea578_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ps2_vue_vue_type_style_index_0_id_bc7ea578_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ps2_vue_vue_type_style_index_0_id_bc7ea578_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ps2_vue_vue_type_style_index_0_id_bc7ea578_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ps2_vue_vue_type_style_index_0_id_bc7ea578_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-bc7ea578]{animation:fadeIn-bc7ea578 .5s ease-in;max-width:1200px}.game-card[data-v-bc7ea578]{padding:.5rem;transition:background-color .3s,box-shadow .3s}.game-card[data-v-bc7ea578]:hover{background-color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.3)}.game-image[data-v-bc7ea578]{transition:transform .3s}@keyframes fadeIn-bc7ea578{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.fade-enter-active[data-v-bc7ea578],.fade-leave-active[data-v-bc7ea578]{transition:opacity .5s,transform .5s}.fade-enter[data-v-bc7ea578],.fade-leave-to[data-v-bc7ea578]{opacity:0;transform:translateY(-20px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ps2.vue?vue&type=template&id=bc7ea578&scoped=true
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
  }, [_vm._v("Catálogo de Juegos PS2")]) : _vm._e()]), _vm._ssrNode(" <div class=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4\" data-v-bc7ea578>" + _vm._ssrList(_vm.games, function (game) {
    return "<div class=\"bg-white rounded-lg p-1 shadow hover:shadow-lg transition transform game-card\" data-v-bc7ea578><img" + _vm._ssrAttr("src", game.cover) + " alt=\"Carátula del juego\" class=\"game-image w-full h-24 object-contain rounded-lg mb-1\" data-v-bc7ea578> <h2 class=\"text-xs font-bold\" data-v-bc7ea578>" + _vm._ssrEscape(_vm._s(game.name)) + "</h2> <p class=\"text-xs\" data-v-bc7ea578>" + _vm._ssrEscape(_vm._s(game.description)) + "</p> " + (_vm.isSubscribed || _vm.isAdmin ? "<button class=\"mt-1 bg-slate-50 text-sky-800 text-xs\" data-v-bc7ea578>\n        Descargar\n      </button>" : "<p class=\"mt-1 text-red-500 text-xs\" data-v-bc7ea578>Suscríbete para descargar</p>") + "</div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ps2.vue?vue&type=template&id=bc7ea578&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ps2.vue?vue&type=script&lang=js
/* harmony default export */ var ps2vue_type_script_lang_js = ({
  data() {
    return {
      isVisible: false,
      isAdmin: false,
      isSubscribed: false,
      games: [{
        id: 1,
        name: 'True Crime Streets of LA',
        cover: '/img/true-crime-streets-of-la.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-Redump/True%20Crime%20-%20Streets%20of%20LA%20(USA).zip?token=c3xZcltjWVFOEHJxU3dYYQtbFkJ5IlN8UmYKWxUWc3ZTcFRgWx1FFnN9UXZZZ19T',
        description: 'Acción'
      }, {
        id: 2,
        name: 'Gun',
        cover: '/img/Gun.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-Redump/Gun%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFF0Vg%3D%3D',
        description: 'Acción'
      }, {
        id: 3,
        name: 'Black',
        cover: '/img/Black.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-Redump/Black%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFFxVQ%3D%3D',
        description: 'Shooter'
      }, {
        id: 4,
        name: 'The Warriors',
        cover: '/img/Warriors,+The+(USA)+(En,Fr,De,Es,It)-image.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-CHD/Warriors%20The%20(USA)%20(EnFrDeEsIt).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFFzUg%3D%3D',
        description: 'Acción'
      }, {
        id: 5,
        name: 'OutRun 2006: Coast 2 Coast',
        cover: '/img/outrun-2006-coast-2-coast.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-Redump/OutRun%202006%20-%20Coast%202%20Coast%20(USA)%20(EnFrEs).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFBxUA%3D%3D',
        description: 'Carreras'
      }, {
        id: 6,
        name: 'Burnout 3: Takedown',
        cover: '/img/burnout-3-takedown.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-Redump/Burnout%203%20-%20Takedown%20(USA).zip?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfFB8UQ%3D%3D',
        description: 'Carreras'
      }, {
        id: 7,
        name: 'Mark of Kri',
        cover: '/img/the-mark-of-kri.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-CHD/Mark%20of%20Kri%20The%20(USA).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfVlwWQ%3D%3D',
        description: 'Acción'
      }, {
        id: 8,
        name: 'Urban Reign',
        cover: '/img/urban-reign.jpg',
        downloadLink: 'https://sto.romsfast.com/PS2-CHD/Urban%20Reign%20(USA).chd?token=cHNealNkUU9FF3lqXH0dYV9TTRlzfVlwVA%3D%3D',
        description: 'Lucha'
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
// CONCATENATED MODULE: ./pages/ps2.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ps2vue_type_script_lang_js = (ps2vue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ps2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ps2vue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bc7ea578",
  "1d67b7b8"
  
)

/* harmony default export */ var ps2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ps2.js.map