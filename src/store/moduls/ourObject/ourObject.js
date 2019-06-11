import { api } from '../../../Api';

export const ourObject = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        object: {},
        objectImg: []
    },
    actions: {
        loadOurObject(context, lng) {
            api.get('elements/elements?alias=object&sub_alias=object_page').then((res) => {
                context.commit('setOurObject', res.data.object_page.object);
            })
        },
        loadOurObjectLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setOurObjectLng', lng);
        },
        loadOurObjectImg(context) {
            const lng = context.rootState.lng;
            api.get(`/object/${lng}/objects`).then((res) => {
                context.commit('setOurObjectImg', res.data);
            })
        }
    },
    mutations: {
        setOurObject(state, payload) {
            state.object = payload
        },
        setOurObjectLng(state, payload) {
            state.lng = payload;
        },
        setOurObjectImg(state, payload) {
            state.objectImg = payload
        }
    },
    getters: {
        getOurObject(state) {
            return Object.keys(state.object).length ? state.object[state.lng] : {}
        },
        getOurObjectLng(state) {
            return state.lng
        },
        getOurObjectImg(state) {
            return state.objectImg;
        }
    }
}
export default ourObject;