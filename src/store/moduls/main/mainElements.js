import { api } from '../../../Api';

export const mainElements = {
    namespaced: true,
    state: {
        lng: localStorage.getItem('lng') || 'ru',
        home: {}
    },
    actions: {
        loadMainElements(context,lng) {
            api.get('/elements/elements?sub_alias=home').then((res) => {
                context.commit('setMainElements', res.data.home);
            })
        },
        loadMainElementsLng(context, lng) {
            localStorage.setItem('lng', lng);
            context.commit('setMainElementsLng', lng);
        }
    },
    mutations: {
        setMainElements(state, payload) {
            state.home = payload
        },
        setMainElementsLng(state, payload) {
            state.lng = payload;
        } 
    },
    getters: {
        getMainSlider(state) {
            if (Object.keys(state.home).length){
                return state.home.slider[state.lng]
            }
            return {}
            //return Object.keys(state.home).length ? state.home[state.lng] : {}
        },
        getProductsElements(state){
            if (Object.keys(state.home).length) {
                return state.home.product[state.lng]
            }
            return {}
        },
        getObjectsElements(state) {
            if (Object.keys(state.home).length) {
                return state.home.object[state.lng]
            }
            return {}
        },
        getContactElements(state) {
            if (Object.keys(state.home).length) {
                const { fax, phone, email } = state.home.contacts;
                return { fax, phone, email, ...state.home.contacts[state.lng] }

            }
            return {};
        },
        getFeedBackElements(state) {
            if (Object.keys(state.home).length) {
                return state.home.feedback[state.lng]
            }
            return {}
        },
        getInfoElements(state) {
            if (Object.keys(state.home).length) {
                return state.home.about[state.lng]
            }
            return {}
        },
        getNewsElements(state) {
            if (Object.keys(state.home).length) {
                return state.home.news[state.lng]
            }
            return {}
        },
        getMainElementsLng(state) {
            return state.lng
        }
    }
}
export default mainElements;