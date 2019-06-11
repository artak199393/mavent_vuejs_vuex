import { api } from '../../../Api';

export const mainObject = {
    namespaced: true,
    state: {
        objectName: {}
    },
    actions: {
        loadObjectName(context) {
            const lng = context.rootState.lng;
            api.get(`object/${lng}/object`).then((res) => {
                context.commit('setObjectName', res.data);
            })
        }
    },
    mutations: {
        setObjectName(state, payload) {
            state.objectName = payload
        }
    },
    getters: {
        getObjectName(state) {
            return state.objectName;
        }
    }
}
export default mainObject;