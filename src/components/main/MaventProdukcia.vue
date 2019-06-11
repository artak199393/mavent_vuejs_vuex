<template>
  <section id="produkcia">
    <b-container class="bv-example-row text-center">
        <img class="logo-1" src="./../../assets/icon.png">
        <h1 class="h1">{{ product.title }}</h1>
        <div class="title" v-for="(category,key) in categoryList" :key="'productItem_'+key">
            <div class="gic"></div>
            <div class="qarakusi">{{ category.title }}</div>
            <p class="text"> {{ product.description }}</p>
            <b-row>
                <b-col sm="6" md="4" lg="4" xl="4" class="patuhan" v-for="prod in category.products" :key="'product'+ prod.id">
                    <mavent-item :product="prod"></mavent-item>
                </b-col>
                <b-col sm="6" md="4" lg="4" xl="4" class="patuhan" >
                    <router-link :to="{name:'item_all', hash:'#itemAll'}"> 
                        <div class="item">
                            <img class="img-thumbnail" src="./../../assets/item_5.png">
                        </div>
                        <p>{{ product.more }}</p>
                    </router-link>
                </b-col>
            </b-row>
        </div>	
    </b-container>
  </section>
</template>

<script>

import MaventItem from './MaventItem'
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MaventProdukcia',
    created(){
        this.loadProductItem()
        emitter.$on("change_lng",(lng)=>{
            this.loadProductItem(lng)
        });
    },
  components:{
    MaventItem
  },
  computed:{
    ...mapGetters('mainElements',{
            product: 'getProductsElements'
    }),
    ...mapGetters('mainProduct',{
            categoryList: 'getProductItem'
    }),
  },
  methods:{
    ...mapActions('mainProduct',['loadProductItem']),
  }
}
</script>

<style>
    .padding{
        padding-top: 50px;
    }
    .treeItems:first-child> .patuhan .item>img{
        margin: 7px 9px 2px 32px;
    }

    #produkcia {
        padding: 90px 0 74px 0; 
    }
        
    #produkcia .container .logo-1 {
        margin: 45px 0 0 19px;
        padding-bottom: 54px; 
    }

    .title {
        margin-left: 18px; 
    }
        
    .title .gic {
        width: 100%;
        border: 0.5px solid #4b586b;
        margin: 45px auto; 
    }

    .title .qarakusi {
        width: 178px;
        color: #4b586b;
        background-color: #fff;
        border: 1px solid;
        font-family: "Blender Pro";
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        margin: -65px auto;
        padding: 8px 0; 
    }

    .text {
        color: #4b586b;
        font-size: 20px;
        font-family: "Blender Pro";
        line-height: 30px;
        letter-spacing: 0.2px;
        padding: 135px 204px 50px 220px; 
    }

    #produkcia .patuhan:last-child > a > p{
        font-size: 20px;
        font-family: "Museo Sans Cyrl";
        line-height: 45px;
        letter-spacing: 0.9px;
        position: relative;
        top: -190px;
        padding: 0 64px 0 63px;
    }
</style>