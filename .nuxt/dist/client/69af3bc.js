(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{303:function(e,t,r){var content=r(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(86).default)("f503405a",content,!0,{sourceMap:!1})},329:function(e,t,r){"use strict";r(303)},330:function(e,t,r){var n=r(85)((function(i){return i[1]}));n.push([e.i,"button[data-v-768cb76d],input[data-v-768cb76d]{transition:all .2s ease-in-out}input[data-v-768cb76d]:focus{border-color:#3b82f6;outline:none}",""]),n.locals={},e.exports=n},352:function(e,t,r){"use strict";r.r(t);r(114),r(67);var n=r(12),o=(r(46),r(20),{data:function(){return{email:"",password:"",confirmPassword:"",acceptTerms:!1}},methods:{handleSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.password===e.confirmPassword){t.next=3;break}return alert("Las contraseñas no coinciden."),t.abrupt("return");case 3:return t.prev=3,t.next=6,fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password,acceptTerms:e.acceptTerms})});case 6:if(!(r=t.sent).ok){t.next=11;break}e.$router.push("/login"),t.next=15;break;case 11:return t.next=13,r.json();case 13:data=t.sent,alert(data.message||"Error en el registro");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),alert("Error de red. Inténtalo de nuevo.");case 20:case"end":return t.stop()}}),t,null,[[3,17]])})))()}}}),c=(r(329),r(32)),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"bg-white py-6 flex items-center justify-center"},[t("div",{staticClass:"w-full max-w-xs bg-white rounded-lg"},[t("div",{staticClass:"p-4 space-y-4 sm:p-6"},[t("h1",{staticClass:"text-lg font-bold leading-tight text-gray-900"},[e._v("Crear cuenta")]),e._v(" "),t("form",{staticClass:"space-y-3",on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"email"}},[e._v("Correo Electrónico")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"email",name:"email",id:"email",placeholder:"8hsabitgames@gmail.com",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"password"}},[e._v("Contraseña")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"password",name:"password",id:"password",placeholder:"••••••••",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"confirm-password"}},[e._v("Confirmar Contraseña")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"w-full mt-1 px-2 py-1 text-sm border border-gray-300 rounded-lg text-gray-900 bg-gray-50",attrs:{type:"password",name:"confirm-password",id:"confirm-password",placeholder:"••••••••",required:""},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}})]),e._v(" "),t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.acceptTerms,expression:"acceptTerms"}],staticClass:"w-4 h-4 border-gray-300 rounded",attrs:{id:"terms",type:"checkbox",required:""},domProps:{checked:Array.isArray(e.acceptTerms)?e._i(e.acceptTerms,null)>-1:e.acceptTerms},on:{change:function(t){var r=e.acceptTerms,n=t.target,o=!!n.checked;if(Array.isArray(r)){var c=e._i(r,null);n.checked?c<0&&(e.acceptTerms=r.concat([null])):c>-1&&(e.acceptTerms=r.slice(0,c).concat(r.slice(c+1)))}else e.acceptTerms=o}}}),e._v(" "),e._m(0)]),e._v(" "),t("button",{staticClass:"w-full bg-slate-100 text-black font-medium rounded-lg text-sm px-3 py-2 hover:bg-slate-200",attrs:{type:"submit"}},[e._v("\n          Crear cuenta\n        ")]),e._v(" "),e._m(1)])])])])}),[function(){var e=this,t=e._self._c;return t("label",{staticClass:"ml-2 text-sm text-gray-600",attrs:{for:"terms"}},[e._v("Acepto los "),t("a",{staticClass:"text-sky-800 hover:underline",attrs:{href:"#"}},[e._v("términos")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"text-xs text-gray-500"},[e._v("\n          ¿Ya tienes una cuenta? "),t("a",{staticClass:"text-sky-800 hover:underline",attrs:{href:"/login"}},[e._v("Inicia sesión")])])}],!1,null,"768cb76d",null);t.default=component.exports}}]);