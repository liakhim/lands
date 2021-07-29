// JS
import './js/'
import Vue from 'vue'
import VModal from 'vue-js-modal/dist/index.nocss.js'
import VueAgile from 'vue-agile'
import './assets/scss/main.scss'
Vue.use(VueAgile)
// CSS (example)
// import './assets/css/main.css'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('main-component', require('./js/components/Main.vue').default)
Vue.component('main-second-component', require('./js/components/MainSecond.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
