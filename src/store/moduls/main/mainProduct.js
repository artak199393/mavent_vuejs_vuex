import { api } from '../../../Api';

export const mainProduct = {
    namespaced: true,
    state: {
        productItem: []
    },
    actions: {
        loadProductItem(context) {
            const lng = context.rootState.lng;
            api.get(`/product/${lng}/type-products?limit=5`).then((res) => {
                context.commit('setProductItem', res.data);
            })
        }
    },
    mutations: {
        setProductItem(state, payload) {
            state.productItem = payload
        }
    },
    getters: {
        getProductItem(state) {
            return state.productItem;
        }
    }
}
export default mainProduct;