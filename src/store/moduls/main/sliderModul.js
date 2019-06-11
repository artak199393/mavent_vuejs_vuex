import {api} from './../../../Api';

export const sliderModul = {
    namespaced: true,
    state:{
        slides:[]
    },
    actions:{
        loadSlides(context){
            const lng =  context.rootState.lng;
            api.get(`/slide/${lng}/slides`).then((res)=>{
                context.commit('setSlides',res.data);
            })
        }        
    },
    mutations:{
        setSlides(state,payload){
            state.slides = payload
        } 
    },
    getters:{
        getSlides(state){
            return state.slides;
        }
    }
}
export default sliderModul;