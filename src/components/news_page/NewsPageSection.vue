<template>
    <section id="newsPage">
        <div class="newsPage">
            <img :src="newImg.full_img_path">
        </div>
		<b-container class="bv-example-row">
            <news-page-text :newsText="newImg"></news-page-text>
            <hr>
            <div class="news text-center">
				<h1>{{ newsPage.other }}</h1>
				<news-page-product></news-page-product>
			</div>
		</b-container>
	</section>
</template>

<script>
import NewsPageText from "./../news_page/NewsPageText"
import NewsPageProduct from "./../news_page/NewsPageProduct"
import { mapGetters, mapActions } from 'vuex';
 
export default {
    name: 'NewsPageSection',
    watch:{
        "$route.params.id" : function(value){
            this.loadNew(value)
        }
    },
    created(){
        let id = this.$route.params.id;
        this.loadNewsPage();
        this.loadNew(id);
        this.loadNewsRandom()
        emitter.$on("change_lng",(lng)=>{
            this.loadNewsPageLng(lng);
            this.loadNew(id);
            this.loadNewsRandom(lng);
        });
    },
    components:{
        NewsPageText,
        NewsPageProduct
    },
    computed:{
        ...mapGetters('newsPage',{
            newsPage: 'getNewsPage',
            newImg: 'getNew'
        }),
    },
    methods:{		
        ...mapActions('newsPage',['loadNewsPage','loadNewsPageLng','loadNew','loadNewsRandom']),
    }
}
</script>

<style>
    #newsPage {
      padding-bottom: 18px; 
    }

    .newsPage {
        position: relative;
        display: inline-block;
        overflow: hidden;
        width: 100%;
        height: 585px;
    }

    .newsPage img {
        position: absolute;
        top: 50%;
        min-height: 100%;
        display: block;
        left: 50%;
        transform: translate(-50%,-50%);
        min-width: 100%;
    }

    #newsPage .news {
        padding-top: 62px;
        margin-left: 28px; 
    }

    #newsPage .news h1 {
        font-size: 48px;
        color: #4b586b;
        font-family: "Blender Pro"; 
        padding-bottom: 75px;
    }

    #newsPage .news #newsItem .nkar {
        margin: 36px 38px 0px -28px;
        padding: 41px 22px 0 48px; }
    #newsPage .news #newsItem .nkar > img {
        width: 100%; 
        margin-left: 0;}
    #newsPage .news #newsItem .nkar:nth-child(3) {
        margin-right: 0; }
    #newsPage .news #newsItem .nkar:nth-child(4),
    #newsPage .news #newsItem .nkar:last-child {
        margin-top: -46px;}
    #newsPage .news #newsItem .nkar > p{
        padding: 0 15px 0 0px;}
    #newsPage .news #newsItem .nkar:nth-child(2) > p{
        padding: 0 38px 0 14px;}
    #newsPage .news #newsItem .nkar:nth-child(3) > p{
        padding: 0 37px 0 20px;
        line-height: 30px;}
    #newsPage .news #newsItem .nkar:nth-child(4) > p{
        padding: 0 44px 0 25px;
        line-height: 32px;}
    #newsPage .news #newsItem .nkar:last-child > p{
        padding: 0 42px 0 25px;
        line-height: 42px;}
</style>