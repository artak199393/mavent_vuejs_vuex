<template>
    <b-row id="ourObjectsItem">
        <b-col sm="6" md="6" lg="4" xl="4"  class="nkar"  v-for="(obj,key) in objectImg" :key="'objects_'+key">
             <router-link id="ourObjectNkar" :to="{name:'objects_page', params:{id: obj.id}, hash:'#objectsPage'}">
                <img :src="obj.images[0]" class="img-fluid">
                <p>{{ obj.multilanguage.title }}</p>
             </router-link>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'OurObjectsItem',
    computed:{
        ...mapGetters('ourObject',{
            objectImg: 'getOurObjectImg',
        }),
    }
}
</script>

<style>
    #ourObjectsItem{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: -3px;
    }

    #ourObjectsItem .nkar {
        margin-top: 3px;
        margin-bottom: 18px;
        height: 300px;
        position: relative;
        overflow: hidden; 
    }

    .nkar #ourObjectNkar img {
        height: 300px;
        width: 83%;
        margin: 5px -22px 0 0px;
    }

    #ourObjectsItem .nkar:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center;
        -webkit-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out; 
    }

    #ourObjectsItem .nkar:hover:before {
        background: url("./../../assets/hover.png") no-repeat center;
        -webkit-background-size: cover;
                background-size: cover;
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
                transform: scale(1.1); 
    }

    #ourObjectsItem .nkar:nth-child(4),
    #ourObjectsItem .nkar:nth-child(5),
    #ourObjectsItem .nkar:nth-child(6) {
        padding-bottom: 19px;
    }
    #ourObjectsItem .nkar:nth-child(7){
        padding-bottom: 30px;
    }
    .nkar #ourObjectNkar p {
        color: white;
        font-size: 16px;
        font-family: "Museo Sans Cyrl";
        line-height: 28px;
        letter-spacing: 1px;
        margin-left: 21px;
        position: relative;
        top: -178px; 
        padding: 0 42px 0 45px;
    }
    .nkar:nth-child(2) #ourObjectNkar > p {
        margin-top: -2px;
    }
    .nkar:nth-child(3) #ourObjectNkar > p {
        margin-top: 13px;
        letter-spacing: 0.9px;
    }
    .nkar:nth-child(4) #ourObjectNkar > p,
    .nkar:nth-child(5) #ourObjectNkar > p,
    .nkar:nth-child(7) #ourObjectNkar > p {
        margin-top: 14px;
    }
    .nkar:nth-child(6) #ourObjectNkar > p {
        margin-top: 0;
    }
    .nkar:last-child #ourObjectNkar > p {
        margin-top: 2px;
    }
</style>