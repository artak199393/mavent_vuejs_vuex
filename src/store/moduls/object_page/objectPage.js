import { api } from '../../../Api';

export const objectPage = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        page: {},
        object:{}
    },
    actions: {
        loadPage(context, lng) {
            api.get('elements/elements?alias=object&sub_alias=single_object_page').then((res) => {
                context.commit('setPage', res.data.single_object_page.object);
            })
        },
        loadPageLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setPageLng', lng);
        },
        loadObject(context,id) {
            const lng = context.rootState.lng;
            api.get(`/object/${lng}/object?id=${id}`).then((res) => {
                context.commit('setObject', res.data);
            })
        }
    },
    mutations: {
        setPage(state, payload) {
            state.page = payload
        },
        setPageLng(state, payload) {
            state.lng = payload;
        },
        setObject(state, payload) {
            state.object = payload
        }
    },
    getters: {
        getPage(state) {
            return Object.keys(state.page).length ? state.page[state.lng] : {}
        },
        getPageLng(state) {
            return state.lng
        },
        getObject(state){
            return state.object;
        }
    }
}
export default objectPage;