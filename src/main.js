import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import { router } from './router';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo,{
    duration: 1000,
});

library.add(faCoffee);

Vue.component('font-awesome-icon', FontAwesomeIcon)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './fonts/stylesheet.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)

window.emitter = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
