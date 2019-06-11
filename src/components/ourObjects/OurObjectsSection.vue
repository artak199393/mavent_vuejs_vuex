<template>
    <section id="ourObjects">
        <b-container class="bv-example-row text-center">
            <div class="title">
                <h1>{{ object.title }}</h1>
                <p>{{ object.description }}</p>
            </div>
            <our-objects-item></our-objects-item>
        </b-container>
    </section>
</template>

<script>
import OurObjectsItem from './../ourObjects/OurObjectsItem'
import { mapGetters, mapActions } from 'vuex';
 
export default {
    name: 'OurObjectsSection',
    created(){
        this.loadOurObject();
        this.loadOurObjectImg();
        emitter.$on("change_lng",(lng)=>{
            this.loadOurObjectLng(lng);
            this.loadOurObjectImg(lng)
        });
    },
    components:{
        OurObjectsItem
    },
    computed:{
        ...mapGetters('ourObject',{
            object: 'getOurObject',
        }),
    },
    methods:{		
        ...mapActions('ourObject',['loadOurObject','loadOurObjectLng','loadOurObjectImg']),
    }
}
</script>

<style>
    #ourObjects {
        padding: 143px 0 28px 0; 
    }
    #ourObjects .title {
      padding-bottom: 91px; 
    }
    #ourObjects .title h1 {
        color: #4b586b;
        font-size: 52px;
        font-family: "Blender Pro";
        margin: 20px 0 0 3px; 
    }
    #ourObjects .title p {
        color: #4b586b;
        font-size: 26px;
        font-family: "Blender Pro";
        line-height: 30px;
        letter-spacing: 0.2px;
        margin: 47px 120px 0 126px; 
    }

</style>