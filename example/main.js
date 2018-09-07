import Vue from 'Vue'
import App from './App.vue'

import fadezero from '../src/index'

Vue.config.productionTip = false

Vue.use(fadezero, {
  name: 'fadezero', // default: fadezero (v-fadezero)
  tag: 'b', // default: span
  opacity: 0.25, // default: 0.5
  color: [100, 0, 0] // #000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  template: '<App/>',
  components: {App}
})
