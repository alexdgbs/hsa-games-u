import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1273457d = () => interopDefault(import('..\\pages\\cancel.vue' /* webpackChunkName: "pages/cancel" */))
const _45496f89 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _11093ac3 = () => interopDefault(import('..\\pages\\consolas.vue' /* webpackChunkName: "pages/consolas" */))
const _526ec914 = () => interopDefault(import('..\\pages\\emuladores.vue' /* webpackChunkName: "pages/emuladores" */))
const _0c7fde2c = () => interopDefault(import('..\\pages\\gamecube.vue' /* webpackChunkName: "pages/gamecube" */))
const _0a7c9cf3 = () => interopDefault(import('..\\pages\\gba.vue' /* webpackChunkName: "pages/gba" */))
const _533d57e8 = () => interopDefault(import('..\\pages\\inicio.vue' /* webpackChunkName: "pages/inicio" */))
const _2b113ab6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2f38deb9 = () => interopDefault(import('..\\pages\\n64.vue' /* webpackChunkName: "pages/n64" */))
const _9637c28a = () => interopDefault(import('..\\pages\\pong.vue' /* webpackChunkName: "pages/pong" */))
const _ab239c0c = () => interopDefault(import('..\\pages\\precios.vue' /* webpackChunkName: "pages/precios" */))
const _0100c41c = () => interopDefault(import('..\\pages\\ps2.vue' /* webpackChunkName: "pages/ps2" */))
const _046a755a = () => interopDefault(import('..\\pages\\psp.vue' /* webpackChunkName: "pages/psp" */))
const _ef5f4b34 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _ae2232e8 = () => interopDefault(import('..\\pages\\snes.vue' /* webpackChunkName: "pages/snes" */))
const _50aa3510 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _2d900ea0 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */))
const _6169979f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cancel",
    component: _1273457d,
    name: "cancel"
  }, {
    path: "/checkout",
    component: _45496f89,
    name: "checkout"
  }, {
    path: "/consolas",
    component: _11093ac3,
    name: "consolas"
  }, {
    path: "/emuladores",
    component: _526ec914,
    name: "emuladores"
  }, {
    path: "/gamecube",
    component: _0c7fde2c,
    name: "gamecube"
  }, {
    path: "/gba",
    component: _0a7c9cf3,
    name: "gba"
  }, {
    path: "/inicio",
    component: _533d57e8,
    name: "inicio"
  }, {
    path: "/login",
    component: _2b113ab6,
    name: "login"
  }, {
    path: "/n64",
    component: _2f38deb9,
    name: "n64"
  }, {
    path: "/pong",
    component: _9637c28a,
    name: "pong"
  }, {
    path: "/precios",
    component: _ab239c0c,
    name: "precios"
  }, {
    path: "/ps2",
    component: _0100c41c,
    name: "ps2"
  }, {
    path: "/psp",
    component: _046a755a,
    name: "psp"
  }, {
    path: "/register",
    component: _ef5f4b34,
    name: "register"
  }, {
    path: "/snes",
    component: _ae2232e8,
    name: "snes"
  }, {
    path: "/success",
    component: _50aa3510,
    name: "success"
  }, {
    path: "/team",
    component: _2d900ea0,
    name: "team"
  }, {
    path: "/",
    component: _6169979f,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
