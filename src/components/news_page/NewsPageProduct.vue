<template>
    <b-row id="newsPageProduct">
        <b-col sm="6" md="6" lg="4" xl="4"  class="nkar"  v-for="(news,key) in newsRandom" :key="'newsRandom_'+key">
             <router-link id="newsPageProductLink" :to="{name:'news_page', params:{id: news.id}, hash:'#newsPage'}" v-scroll-to="{el:'#newsPage',duration:1}">
                <img :src="news.full_img_path" class="img-fluid">
                <p>{{ news.multilanguage.content }}</p>
             </router-link>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from 'vuex';
 
export default {
    name: 'NewsPageSection',
    computed:{
        ...mapGetters('newsPage',{
            newsRandom: 'getNewsRandom',
        }),
    }
}
</script>

<style>
    #newsPageProduct {
        margin-left: -34px;
    }
    
    #newsPageProduct .nkar {
        margin-bottom: 45px;
    }

    .nkar #newsPageProductLink > img {
        height: 300px;
        width: 85%; 
        margin-left: 10px;
    }

    .nkar #newsPageProductLink > p {
        color: white;
        font-size: 16px;
        font-family: "Museo Sans Cyrl";
        line-height: 30px;
        letter-spacing: 1px;
        margin-left: 21px;
        position: relative;
        top: -193px; 
    }  
</style>