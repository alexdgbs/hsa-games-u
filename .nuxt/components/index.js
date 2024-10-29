export const Botones = () => import('../..\\components\\Botones.vue' /* webpackChunkName: "components/botones" */).then(c => wrapFunctional(c.default || c))
export const HeroSection = () => import('../..\\components\\HeroSection.vue' /* webpackChunkName: "components/hero-section" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const Payment = () => import('../..\\components\\payment.vue' /* webpackChunkName: "components/payment" */).then(c => wrapFunctional(c.default || c))
export const Pong = () => import('../..\\components\\Pong.vue' /* webpackChunkName: "components/pong" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
