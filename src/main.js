import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import './assets/sass/main.sass'
import loader from './components/loader'
import apolloProvider from './utils/apollo'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.component('loader', loader)

new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  components: { App },
  template: '<App/>'
})
