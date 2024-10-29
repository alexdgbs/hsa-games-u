exports.ids = [6];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3bee9b3e", content, true, context)
};

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_748134b3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_748134b3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_748134b3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_748134b3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checkout_vue_vue_type_style_index_0_id_748134b3_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body[data-v-748134b3]{font-family:\"Inter\",sans-serif}h2[data-v-748134b3]{color:#1f2937;font-size:1.25rem}h3[data-v-748134b3]{color:#374151;font-size:1rem}.bg-white[data-v-748134b3]{background-color:#fff}#paypal-button-container[data-v-748134b3]{display:flex;justify-content:center;z-index:10}.bg-gray-100[data-v-748134b3]{padding:.5rem}.space-y-6>*+*[data-v-748134b3]{margin-top:1.5rem}.flex[data-v-748134b3]{margin-top:1rem}.menu[data-v-748134b3]{z-index:50}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=template&id=748134b3&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "relative z-0 bg-white max-w-sm mx-auto py-6 px-2 sm:px-4 lg:px-6"
  }, [_vm._ssrNode("<div class=\"space-y-6\" data-v-748134b3><div data-v-748134b3><h2 class=\"text-center text-2xl font-semibold text-gray-900\" data-v-748134b3>Suscríbete por solo $49</h2> <p class=\"mt-1 text-center text-xs text-gray-600\" data-v-748134b3>\n        Elige el método de pago y accede a contenido exclusivo.\n      </p></div> <div class=\"bg-gray-100 py-4 px-2 shadow sm:rounded-lg sm:px-6\" data-v-748134b3><h3 class=\"text-lg font-medium text-gray-700 text-center mb-4\" data-v-748134b3>Métodos de Pago</h3> <div id=\"paypal-button-container\" class=\"mt-2 relative\" data-v-748134b3></div> " + (_vm.isSubscribed ? "<button class=\"mt-4 w-full rounded-md bg-red-400 px-3 py-2 text-center text-xs font-semibold text-white shadow-sm hover:bg-red-500\" data-v-748134b3>\n        Cancelar Suscripción\n      </button>" : "<!---->") + "</div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=template&id=748134b3&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/checkout.vue?vue&type=script&lang=js
/* harmony default export */ var checkoutvue_type_script_lang_js = ({
  data() {
    return {
      isSubscribed: false
    };
  },
  mounted() {
    this.checkSubscription();
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AXQeb763-UfMzlLsheOGAQdXyM-xzZ4MPxXXZAaZ44MQT-7bWdbDuiRxl6-gwxuCgXf6Jnc0LKSdL1vk&currency=MXN";
    script.addEventListener('load', this.renderPayPalButton);
    document.body.appendChild(script);
  },
  methods: {
    async checkSubscription() {
      const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
      if (emailCookie) {
        const emailValue = emailCookie.split('=')[1];
        try {
          const response = await fetch(`/api/user?email=${emailValue}`);
          if (response.ok) {
            const userData = await response.json();
            this.isSubscribed = userData.isSubscribed;
          }
        } catch (error) {
          console.error('Error al obtener la información del usuario:', error);
        }
      }
    },
    renderPayPalButton() {
      if (!window.paypal) {
        console.error('PayPal SDK no está cargado.');
        return;
      }
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '49.00'
              }
            }]
          });
        },
        onApprove: async (data, actions) => {
          try {
            const orderDetails = await actions.order.capture();
            const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
            const emailValue = emailCookie ? emailCookie.split('=')[1] : null;
            if (emailValue) {
              const response = await fetch('/api/update-subscription', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: emailValue,
                  isSubscribed: true
                })
              });
              if (!response.ok) {
                throw new Error('Error al actualizar la suscripción');
              }
            }
            alert('Transacción completada por ' + orderDetails.payer.name.given_name);
            this.$router.push('/success');
          } catch (err) {
            console.error('Error en el proceso de pago:', err);
          }
        },
        onError: err => {
          console.error('Error en el proceso de pago:', err);
        }
      }).render('#paypal-button-container');
    },
    async cancelSubscription() {
      try {
        const emailCookie = document.cookie.split(';').find(item => item.trim().startsWith('email='));
        const emailValue = emailCookie ? emailCookie.split('=')[1] : null;
        if (emailValue) {
          const response = await fetch('/api/update-subscription', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: emailValue,
              isSubscribed: false
            })
          });
          if (!response.ok) {
            throw new Error('Error al cancelar la suscripción');
          }
          alert('Suscripción cancelada con éxito');
          this.$router.push('/cancel');
        } else {
          alert('No se encontró un correo electrónico en las cookies');
        }
      } catch (err) {
        console.error('Error en el proceso de cancelación:', err);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/checkout.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_checkoutvue_type_script_lang_js = (checkoutvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/checkout.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_checkoutvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "748134b3",
  "aa7e56fe"
  
)

/* harmony default export */ var checkout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=checkout.js.map