import VueRouter from 'vue-router';
import {routes} from './routes';

export const router = new VueRouter({
  mode:'history',
  // scrollBehavior(to, from, savedPosition) {
  //
  //   if (to.hash) {
  //     return { selector: to.hash }
  //   }
  // },
  routes 
});
