const install = function (Vue, options) {
  const { name, tag, opacity, color } = options || {}
  const [r, g, b] = (color instanceof Array && color.length === 3) ? color : [0, 0, 0]
  const target = `<${tag || 'span'} style="color: rgba(${r}, ${g}, ${b}, ${opacity || 0.25})">$1</${tag}>`
  const fadezero = {
    bind: function (el, { value }) {
      el.innerHTML = value.toString().replace(/([0]+)$/g, target)
    }
  }
  Vue.directive(name || 'fadezero', fadezero)
}

export default {
  install
}
