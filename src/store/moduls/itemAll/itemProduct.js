import { api } from './../../../Api';

export const itemProduct = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        product: {}
    },
    actions: {
        loadItemProduct(context, lng) {
            api.get('elements/elements?alias=product&sub_alias=product_page').then((res) => {
                context.commit('setItemProduct', res.data.product_page.product);
            })
        },
        loadItemProductLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setItemProductLng', lng);
        }
    },
    mutations: {
        setItemProduct(state, payload) {
            state.product = payload
        },
        setItemProductLng(state, payload) {
            state.lng = payload;
        }
    },
    getters: {
        getItemProduct(state) {
            return Object.keys(state.product).length ? state.product[state.lng] : {}
        },
        getItemProductLng(state) {
            return state.lng
        }
    }
}
export default itemProduct;