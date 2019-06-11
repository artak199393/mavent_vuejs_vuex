<template>
    <section id="newsAll">
        <b-container class="bv-example-row text-center">
            <div class="title">
                <h1>{{ newsObject.title }}</h1>
                <p>{{ newsObject.description }}</p>
            </div>
            <news-all-item></news-all-item>
        </b-container>
    </section>
</template>

<script>
import NewsAllItem from './../news_all/NewsAllItem'
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'NewsAllSection',
    created(){
        this.loadNewsObject();
        this.loadNews()
        emitter.$on("change_lng",(lng)=>{
            this.loadNewsObjectLng(lng);
            this.loadNews(lng)
        });
    },
    components:{
        NewsAllItem
    },
    computed:{
        ...mapGetters('newsAll',{
            newsObject: 'getNewsObject',
        }),
    },
    methods:{		
        ...mapActions('newsAll',['loadNewsObject','loadNewsObjectLng','loadNews']),
    }
}
</script>

<style>
    #newsAll{
        padding-top: 143px;
        padding-bottom: 22px; 
    }

    #newsAll .title {
      padding-bottom: 94px; 
    }

    #newsAll .title h1 {
        color: #4b586b;
        font-size: 52px;
        font-family: "Blender Pro";
        margin: 20px 0 0 3px; 
    }

    #newsAll .title p {
        color: #656f85;
        font-size: 24px;
        font-family: "Blender Pro";
        line-height: 30px;
        letter-spacing: 0.2px;
        padding: 47px 203px 0 203px;
    }
</style>

