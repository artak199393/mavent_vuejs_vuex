<template>
    <b-row id="newsAllItem">
        <b-col v-for="(n,key) in news" :key="'news_'+key" sm="6" md="6" lg="4" xl="4" class="nkar">
            <router-link :to="{name:'news_page', params:{id: n.id}, hash:'#newsPage'}">
                <img :src="n.full_img_path" class="img-fluid">
                <p>{{ n.multilanguage.content }}</p>
            </router-link>
        </b-col>
    </b-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'NewsAllItem',
    computed:{
        ...mapGetters('newsAll',{
            news: 'getNews',
        }),
    },
}
</script>

<style>
    #newsAllItem{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: -3px;
    }

    #newsAllItem .nkar {
        margin-top: -13px;
        margin-bottom: 45px;
    }

    #newsAllItem .nkar > a > img {
        margin-left: 14px;
        height: 300px;
        width: 85%; 
    }

    #newsAllItem .nkar > a > p {
        color: white;
        font-size: 16px;
        font-family: "Museo Sans Cyrl";
        line-height: 30px;
        letter-spacing: 1px;
        margin-left: 21px;
        position: relative;
        top: -193px; 
    } 

    #newsAllItem .nkar:nth-child(3) > a > p,
    #newsAllItem .nkar:nth-child(9) > a > p {
        padding: 0 55px 0 56px;
    }    

    #newsAllItem .nkar:nth-child(4) > a > p {
        margin-top: 12px;
    }

    #newsAllItem .nkar:nth-child(6) > a > p,
    #newsAllItem .nkar:nth-child(8) > a > p {
        padding: 0 46px 0 42px;
        position: relative;
        top: -179px;
    }

    #newsAllItem .nkar:nth-child(10) > a > p{
        padding: 0 60px 0 58px;
        margin-top: 14px;
    }

    #newsAllItem .nkar:last-child > a > p{
        padding: 0 31px 0 31px;
    }

    #newsAllItem .nkar:nth-child(7) > a > p
    #newsAllItem .nkar:last-child > a > p{
        position: relative;
        top: -190px
    }
</style>