import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import moment from 'moment'
import 'moment/locale/th'
import VueMoment from 'vue-moment'
 
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueMoment, { moment })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')