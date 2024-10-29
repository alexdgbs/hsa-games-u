exports.ids = [15,4];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("143b3405", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pong_vue_vue_type_style_index_0_id_1be078f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pong_vue_vue_type_style_index_0_id_1be078f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pong_vue_vue_type_style_index_0_id_1be078f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pong_vue_vue_type_style_index_0_id_1be078f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pong_vue_vue_type_style_index_0_id_1be078f4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "canvas[data-v-1be078f4]{height:auto;max-width:300px;width:100%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pong.vue?vue&type=template&id=1be078f4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex flex-col items-center bg-white h-screen relative"
  }, [_vm._ssrNode("<div class=\"text-black text-sm absolute top-5\" data-v-1be078f4>" + _vm._ssrEscape("J1: " + _vm._s(_vm.playerScore) + " - COM: " + _vm._s(_vm.opponentScore)) + "</div> <canvas class=\"border-2 border-white mt-20\" data-v-1be078f4></canvas>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Pong.vue?vue&type=template&id=1be078f4&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Pong.vue?vue&type=script&lang=js
/* harmony default export */ var Pongvue_type_script_lang_js = ({
  data() {
    return {
      playerPaddleY: 70,
      opponentPaddleY: 70,
      playerScore: 0,
      opponentScore: 0,
      ballX: 150,
      ballY: 100,
      ballSpeedX: 3,
      ballSpeedY: 3,
      paddleWidth: 5,
      paddleHeight: 40,
      canvasWidth: 300,
      canvasHeight: 200
    };
  },
  mounted() {
    this.setupGame();
    window.addEventListener("keydown", this.movePaddle);
    window.addEventListener("keydown", this.preventScroll);
  },
  beforeDestroy() {
    window.removeEventListener("keydown", this.movePaddle);
    window.removeEventListener("keydown", this.preventScroll);
  },
  methods: {
    setupGame() {
      const canvas = this.$refs.gameCanvas;
      const context = canvas.getContext('2d');
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      const drawEverything = () => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        context.fillStyle = 'white';
        context.fillRect(0, this.playerPaddleY, this.paddleWidth, this.paddleHeight);
        context.fillRect(this.canvasWidth - this.paddleWidth, this.opponentPaddleY, this.paddleWidth, this.paddleHeight);
        context.beginPath();
        context.arc(this.ballX, this.ballY, 4, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;
        if (this.ballY <= 0 || this.ballY >= this.canvasHeight) {
          this.ballSpeedY = -this.ballSpeedY;
        }
        if (this.ballX <= this.paddleWidth && this.ballY > this.playerPaddleY && this.ballY < this.playerPaddleY + this.paddleHeight) {
          this.ballSpeedX = -this.ballSpeedX;
        }
        if (this.ballX >= this.canvasWidth - this.paddleWidth && this.ballY > this.opponentPaddleY && this.ballY < this.opponentPaddleY + this.paddleHeight) {
          this.ballSpeedX = -this.ballSpeedX;
        }
        if (this.ballX <= 0) {
          this.opponentScore++;
          this.resetBall();
        } else if (this.ballX >= this.canvasWidth) {
          this.playerScore++;
          this.resetBall();
        }
        this.opponentPaddleY += (this.ballY - (this.opponentPaddleY + this.paddleHeight / 2)) * 0.1;
      };
      const gameLoop = () => {
        drawEverything();
        requestAnimationFrame(gameLoop);
      };
      gameLoop();
    },
    resetBall() {
      this.ballX = this.canvasWidth / 2;
      this.ballY = this.canvasHeight / 2;
      this.ballSpeedX = -this.ballSpeedX;
    },
    movePaddle(e) {
      const canvas = this.$refs.gameCanvas;
      if (e.key === "ArrowUp" && this.playerPaddleY > 0) {
        this.playerPaddleY -= 10;
      } else if (e.key === "ArrowDown" && this.playerPaddleY < canvas.height - this.paddleHeight) {
        this.playerPaddleY += 10;
      }
    },
    preventScroll(e) {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Pong.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Pongvue_type_script_lang_js = (Pongvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Pong.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Pongvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1be078f4",
  "e94408ea"
  
)

/* harmony default export */ var Pong = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pong.vue?vue&type=template&id=ef70995c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('Pong')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/pong.vue?vue&type=template&id=ef70995c

// EXTERNAL MODULE: ./components/Pong.vue + 4 modules
var Pong = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/pong.vue?vue&type=script&lang=js

/* harmony default export */ var pongvue_type_script_lang_js = ({
  components: {
    Pong: Pong["default"]
  }
});
// CONCATENATED MODULE: ./pages/pong.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_pongvue_type_script_lang_js = (pongvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/pong.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_pongvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63f6809a"
  
)

/* harmony default export */ var pong = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Pong: __webpack_require__(34).default})


/***/ })

};;
//# sourceMappingURL=pong.js.map