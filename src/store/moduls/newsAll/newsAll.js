import { api } from '../../../Api';

export const newsAll = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        newsObject: {},
        news: []
    },
    actions: {
        loadNewsObject(context, lng) {
            api.get('elements/elements?alias=news&sub_alias=news_page').then((res) => {
                context.commit('setNewsObject', res.data.news_page.news);
            })
        },
        loadNewsObjectLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setNewsObjectLng', lng);
        },
        loadNews(context) {
            const lng = context.rootState.lng;
            api.get(`/news/${lng}/news`).then((res) => {
                context.commit('setNews', res.data);
            })
        }
    },
    mutations: {
        setNewsObject(state, payload) {
            state.newsObject = payload
        },
        setNewsObjectLng(state, payload) {
            state.lng = payload;
        },
        setNews(state, payload) {
            state.news = payload
        }
    },
    getters: {
        getNewsObject(state) {
            return Object.keys(state.newsObject).length ? state.newsObject[state.lng] : {}
        },
        getNewsObjectLng(state) {
            return state.lng
        },
        getNews(state) {
            return state.news;
        }
    }
}
export default newsAll;