(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{288:function(e,t,l){var content=l(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(86).default)("143b3405",content,!0,{sourceMap:!1})},289:function(e,t,l){"use strict";var n=l(2),d=l(290),o=l(113);n({target:"Array",proto:!0},{fill:d}),o("fill")},290:function(e,t,l){"use strict";var n=l(25),d=l(87),o=l(38);e.exports=function(e){for(var t=n(this),l=o(t),r=arguments.length,c=d(r>1?arguments[1]:void 0,l),h=r>2?arguments[2]:void 0,v=void 0===h?l:d(h,l);v>c;)t[c++]=e;return t}},291:function(e,t,l){"use strict";l(288)},292:function(e,t,l){var n=l(85)((function(i){return i[1]}));n.push([e.i,"canvas[data-v-1be078f4]{height:auto;max-width:300px;width:100%}",""]),n.locals={},e.exports=n},293:function(e,t,l){"use strict";l.r(t);l(289);var n={data:function(){return{playerPaddleY:70,opponentPaddleY:70,playerScore:0,opponentScore:0,ballX:150,ballY:100,ballSpeedX:3,ballSpeedY:3,paddleWidth:5,paddleHeight:40,canvasWidth:300,canvasHeight:200}},mounted:function(){this.setupGame(),window.addEventListener("keydown",this.movePaddle),window.addEventListener("keydown",this.preventScroll)},beforeDestroy:function(){window.removeEventListener("keydown",this.movePaddle),window.removeEventListener("keydown",this.preventScroll)},methods:{setupGame:function(){var e=this,canvas=this.$refs.gameCanvas,t=canvas.getContext("2d");canvas.width=this.canvasWidth,canvas.height=this.canvasHeight;var l=function(){t.fillStyle="black",t.fillRect(0,0,e.canvasWidth,e.canvasHeight),t.fillStyle="white",t.fillRect(0,e.playerPaddleY,e.paddleWidth,e.paddleHeight),t.fillRect(e.canvasWidth-e.paddleWidth,e.opponentPaddleY,e.paddleWidth,e.paddleHeight),t.beginPath(),t.arc(e.ballX,e.ballY,4,0,2*Math.PI),t.fillStyle="white",t.fill(),e.ballX+=e.ballSpeedX,e.ballY+=e.ballSpeedY,(e.ballY<=0||e.ballY>=e.canvasHeight)&&(e.ballSpeedY=-e.ballSpeedY),e.ballX<=e.paddleWidth&&e.ballY>e.playerPaddleY&&e.ballY<e.playerPaddleY+e.paddleHeight&&(e.ballSpeedX=-e.ballSpeedX),e.ballX>=e.canvasWidth-e.paddleWidth&&e.ballY>e.opponentPaddleY&&e.ballY<e.opponentPaddleY+e.paddleHeight&&(e.ballSpeedX=-e.ballSpeedX),e.ballX<=0?(e.opponentScore++,e.resetBall()):e.ballX>=e.canvasWidth&&(e.playerScore++,e.resetBall()),e.opponentPaddleY+=.1*(e.ballY-(e.opponentPaddleY+e.paddleHeight/2)),requestAnimationFrame(l)};l()},resetBall:function(){this.ballX=this.canvasWidth/2,this.ballY=this.canvasHeight/2,this.ballSpeedX=-this.ballSpeedX},movePaddle:function(e){var canvas=this.$refs.gameCanvas;"ArrowUp"===e.key&&this.playerPaddleY>0?this.playerPaddleY-=10:"ArrowDown"===e.key&&this.playerPaddleY<canvas.height-this.paddleHeight&&(this.playerPaddleY+=10)},preventScroll:function(e){"ArrowUp"!==e.key&&"ArrowDown"!==e.key||e.preventDefault()}}},d=(l(291),l(32)),component=Object(d.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-col items-center bg-white h-screen relative"},[t("div",{staticClass:"text-black text-sm absolute top-5"},[e._v("J1: "+e._s(e.playerScore)+" - COM: "+e._s(e.opponentScore))]),e._v(" "),t("canvas",{ref:"gameCanvas",staticClass:"border-2 border-white mt-20"})])}),[],!1,null,"1be078f4",null);t.default=component.exports},348:function(e,t,l){"use strict";l.r(t);var n={components:{Pong:l(293).default}},d=l(32),component=Object(d.a)(n,(function(){var e=this._self._c;return e("div",[e("Pong")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Pong:l(293).default})}}]);