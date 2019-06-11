import { api } from '../../../Api';

export const maventNews = {
    namespaced: true,
    state: {
        //lng: localStorage.getItem('lng') || 'ru',
        newsImg: []
    },
    actions: {
        loadNewsImg(context) {
            const lng = context.rootState.lng;
            api.get(`news/${lng}/news?limit=5`).then((res) => {
                context.commit('setNewsImg', res.data);
            })
        }
    },
    mutations: {
        setNewsImg(state, payload) {
            state.newsImg = payload
        }
    },
    getters: {
        getNewsImg(state) {
            return state.newsImg;
        }
    }
}
export default maventNews;