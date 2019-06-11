import { api } from '../../../Api';

export const item = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        product: {},
        oneProduct: {},
        productRandom: []
        
    },
    actions: {
        loadProduct(context, lng) {
            api.get('elements/elements?alias=product&sub_alias=single_product_page').then((res) => {
                context.commit('setProduct', res.data.single_product_page.product);
            })
        },
        loadProductLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setProductLng', lng);
        },
        loadOneProduct(context, id) {
            const lng = context.rootState.lng;
            api.get(`/product/${lng}/product?id=${id}`).then((res) => {
                context.commit('setOneProduct', res.data);
            })
        },
        loadProductRandom(context) {
            const lng = context.rootState.lng;
            api.get(`/product/${lng}/products?limit=3&random=1`).then((res) => {
                context.commit('setProductRandom', res.data);
            })
        }
    },
    mutations: {
        setProduct(state, payload) {
            state.product = payload
        },
        setProductLng(state, payload) {
            state.lng = payload;
        },
        setOneProduct(state, payload) {
            state.oneProduct = payload
        },
        setProductRandom(state, payload) {
            state.productRandom = payload
        }
    },
    getters: {
        getProduct(state) {
            return Object.keys(state.product).length ? state.product[state.lng] : {}
        },
        getProductLng(state) {
            return state.lng
        },
        getOneProduct(state) {
            return state.oneProduct;
        },
        getProductRandom(state) {
            return state.productRandom
        }
    }
}
export default item;