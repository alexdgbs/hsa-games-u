export { default as Botones } from '../..\\components\\Botones.vue'
export { default as HeroSection } from '../..\\components\\HeroSection.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as Payment } from '../..\\components\\payment.vue'
export { default as Pong } from '../..\\components\\Pong.vue'

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
