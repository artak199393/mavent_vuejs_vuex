import Vue from 'vue';
import Vuex from 'vuex';
import { api } from './../Api';
import sliderModul from './moduls/main/sliderModul';
import mainElements from './moduls/main/mainElements';
import mainProduct from './moduls/main/mainProduct';
import mainObject from './moduls/main/mainObject';
import maventNews from './moduls/main/maventNews';
import ourObject from './moduls/ourObject/ourObject'
import itemProduct from './moduls/itemAll/itemProduct'
import objectPage from './moduls/object_page/objectPage'
import newsAll from './moduls/newsAll/newsAll'
import newsPage from './moduls/news_page/newsPage'
import item from './moduls/item/item'

Vue.use(Vuex);

export default new Vuex.Store({
   state:{
      lng: localStorage.getItem('lng') || 'ru',
      navbars: {}, 
   },
   actions:{
      loadData(context,lng) {
         api.get('/elements/elements?alias=navbar&sub_alias=navbar_menu')
         .then((res) => {
            const { navbar } = res.data.navbar_menu;
            context.commit('setNavbar', navbar)
         });
      },
      setLng(context,lng){
         localStorage.setItem('lng',lng);
         context.commit('setLng', lng);
      }  
   },
   mutations:{
      setNavbar(state,payload){
         state.navbars = payload;
      },
      setLng(state,payload){
         state.lng = payload;
      }
   },
   getters:{
      getNavbar(state){
         return  Object.keys(state.navbars).length ? state.navbars[state.lng] : {};
      },
      getLng(state) {
         return state.lng
      }
   },
   modules: {
      sliderModul,
      mainElements,
      mainProduct,
      mainObject,
      maventNews,
      ourObject,
      itemProduct,
      objectPage,
      newsAll,
      newsPage,
      item
   }
})
