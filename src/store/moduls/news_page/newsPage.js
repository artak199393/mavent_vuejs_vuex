import { api } from '../../../Api';

export const newsPage = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        newsPage: {},
        new: {},
        newsRandom: []
    },
    actions: {
        loadNewsPage(context, lng) {
            api.get('elements/elements?alias=news&sub_alias=single_news_page').then((res) => {
                context.commit('setNewsPage', res.data.single_news_page.news);
            })
        },
        loadNewsPageLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setNewsPageLng', lng);
        },
        loadNew(context,id) {
            const lng = context.rootState.lng;
            api.get(`/news/${lng}/one-news?id=${id}`).then((res) => {
                context.commit('setNew', res.data);
            })
        },
        loadNewsRandom(context) {
            const lng = context.rootState.lng;
            api.get(`/news/${lng}/news?limit=3&random=1`).then((res) => {
                context.commit('setNewsRandom', res.data);
            })
        }
    },
    mutations: {
        setNewsPage(state, payload) {
            state.newsPage = payload
        },
        setNewsPageLng(state, payload) {
            state.lng = payload;
        },
        setNew(state, payload) {
            state.new = payload
        },
        setNewsRandom(state, payload){
            state.newsRandom = payload
        }
    },
    getters: {
        getNewsPage(state) {
            return Object.keys(state.newsPage).length ? state.newsPage[state.lng] : {}
        },
        getNewsPageLng(state) {
            return state.lng
        },
        getNew(state) {
            return state.new;
        },
        getNewsRandom(state){
            return state.newsRandom
        }
    }
}
export default newsPage;