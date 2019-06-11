<template>
    <section id="objectsPage">
        <b-container class="bv-example-row text-center">
            <item-information-icons></item-information-icons>
            <mavent-object-slider :object="object"></mavent-object-slider>
            <b-row>
                <mavent-object-name :object="object" :mainObject="mainObj"></mavent-object-name>
            </b-row>
            <div class="anotherNews">
                <h1>{{ objectPage.other }}</h1>
                <our-objects-item></our-objects-item>
            </div>
        </b-container>
	</section>
</template>

<script>
import ItemInformationIcons from "./../item/ItemInformationIcons"
import MaventObjectSlider from "./../main/MaventObjectSlider"
import MaventObjectName from "./../main/MaventObjectName"
import OurObjectsItem from "./../ourObjects/OurObjectsItem"
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ObjectsPageSection',
    watch:{
        "$route.params.id" : function(value){
            this.loadObject(value)
        }
    },
    created(){
        let id = this.$route.params.id;
        this.loadObject(id);
        this.loadPage();
        this.loadOurObjectImg()
        emitter.$on("change_lng",(lng)=>{
            this.loadObject(id);
            this.loadPageLng(lng)
            this.loadOurObjectImg(lng)
        });
    },
    components:{
        ItemInformationIcons,
        MaventObjectSlider,
        MaventObjectName,
        OurObjectsItem,
    },
    computed:{
        ...mapGetters('objectPage',{
            objectPage: 'getPage',
            object: 'getObject'
        }),
        ...mapGetters('mainElements',{
            mainObj: 'getObjectsElements'
        })
    },
    methods:{		
        ...mapActions('objectPage',['loadObject','loadPage','loadPageLng']),
        ...mapActions('ourObject',['loadOurObjectImg']),
    }
}
</script>

<style>
    #objectsPage{
        padding-top: 143px;
        padding-bottom: 79px;
    }

    #objectsPage .icons {
        margin: 0px 77px 0 0px;
        float: right !important;
    }

    #objectsPage #sliderObject {
        padding-top: 40px;
    }

    #objectsPage #sliderObject .slaq-left,
    #objectsPage #sliderObject .slaq-right {
        margin-top: 241px;
    }

    #objectsPage .icons i {
        background-color: #add1e5;
        color: #fff;
        -webkit-border-radius: 50%;
                border-radius: 50%;
        width: 25px;
        padding: 4px;
        opacity: 0.8;
        margin-right: 5px; 
    }

    #objectsPage .icons i:nth-child(4) {
        background-color: #adadad; 
    }

    #objectsPage .icons i:nth-child(4):hover {
        background-color: #403f3f; 
    }

    #objectsPage .icons i:last-child {
        background-color: #e9a7ab;
        margin-right: -5px;
        margin-top: 2px; 
    }

    #objectsPage .icons i:last-child:hover {
        background-color: #ff4651; 
    }

    #objectsPage .icons i:hover {
        background-color: #1a98c6; 
    }

    #objectsPage .anotherNews{
        padding-top: 122px;
    }

    #objectsPage .anotherNews h1{
        font-size: 48px;
        color: #4b586b;
        font-family: "Blender Pro";
        margin: 34px 0 83px 22px;
    }
</style>