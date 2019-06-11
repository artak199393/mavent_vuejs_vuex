<template>
    <div class="container" id="newsItem">
        <div  v-for="(news,key) in newsImg" :key="'newsImg_'+key" class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 nkar">
            <router-link :to="{name:'news_page', params:{id: news.id}, hash:'#newsPage'}"><img :src="news.full_img_path" class="img-fluid"></router-link>
            <p>{{news.multilanguage.content}}</p>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 nkar">
          <router-link :to="{name:'news_all', hash:'#newsAll'}"><img src="./../../assets/item_5.png" class="img-fluid"></router-link>
          <p>{{ product.more }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MaventNewsItem',
    computed:{
      ...mapGetters('mainElements',{
        product: 'getProductsElements'
      }),
      ...mapGetters('maventNews',{
        newsImg: 'getNewsImg'
      }),
    }
}
</script>

<style>
  #newsItem{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -3px;
  }

  #newsItem .nkar {
    margin-top: 4px;
    margin-bottom: 74px;
    height: 300px;
  }

  #newsItem .nkar img {
    height: 300px;
    width: 86%;
    margin-left: 16px;
  }

  #newsItem .nkar p {
    color: white;
    font-size: 16px;
    font-family: "Museo Sans Cyrl";
    line-height: 30px;
    letter-spacing: 0.9px;
    margin: -3px 0 0 21px;
    position: relative;
    top: -190px;
    padding: 0 25px 0 26px;
  }

  #newsItem .nkar:nth-child(2) > p {
    line-height: 31px;
    margin-top: 8px; 
    padding: 0 48px 0 44px; 
  }

  #newsItem .nkar:nth-child(3) > p {
    line-height: 29px;
    letter-spacing: 1.2px;
    margin-top: -5px; 
    padding: 0 57px 0 58px; 
  }

  #newsItem .nkar:nth-child(4) > p {
    line-height: 30px;
    letter-spacing: 1px;
    margin-top: 7px;
    padding: 0 61px 0 59px; 
  }

  #newsItem .nkar:last-child > p {
    color: #7a8295;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 2px;
    margin-left: 18px; 
    padding: 0 42px 0 42px; 
  } 
</style>