<template>
    <section id="itemAll">
        <b-container class="bv-example-row text-center">
          <h1>{{ product.title }}</h1>
          <div class="text-first" v-html="product.welcome_text"></div>
          <div class="title" v-for="(category,key) in categoryList" :key="'productItem_'+key">
            <div class="gic"></div>
            <div class="qarakusi">{{ category.title }}</div>
            <p class="text"> {{ product.description }}</p>
            <b-row>
                <b-col sm="6" md="4" lg="4" xl="4" class="patuhan" v-for="prod in category.products" :key="'product'+ prod.id">
                    <item-all-item :product="prod"></item-all-item>
                </b-col>
            </b-row>
          </div>
        </b-container>
      </section>
</template>

<script>
import ItemAllItem from "./../item_all/ItemAllItem"
import { mapGetters, mapActions } from 'vuex'; 

export default {
  name: 'ItemAllSection',
  created(){
    this.loadItemProduct()
    this.loadProductItem()
    emitter.$on("change_lng",(lng)=>{
      this.loadItemProductLng(lng)
      this.loadProductItem(lng)
    });
  },
  components:{
      ItemAllItem,
  },
  computed:{
    ...mapGetters('itemProduct',{
      product: 'getItemProduct'
    }),
    ...mapGetters('mainProduct',{
      categoryList: 'getProductItem'
    }),
  },
  methods:{
    ...mapActions('mainProduct',['loadProductItem']),
    ...mapActions('itemProduct',['loadItemProduct','loadItemProductLng']),
  }
}
</script>

<style>
    #itemAll{
        padding: 64px 0; 
    }

    #itemAll h1 {
      color: #4b586b;
      font-size: 52px;
      font-family: "Blender Pro";
      margin: 20px 0 0 18px; 
    }

    #itemAll .text-first {
      color: #4b586b;
      font-size: 24px;
      font-family: "Blender Pro";
      letter-spacing: 0.3px;
      line-height: 30px;
      margin: 47px 0 -16px 25px; 
    }

    #itemAll .text-first > p:last-child {
      margin-top: -16px;
    }    

    #itemAll .title {
      margin-left: 15px;
      padding: 67px 0 90px 0; 
    }
    
    #itemAll.title .gic {
        width: 100%;
        border: 0.5px solid #4b586b;
        margin: 44px auto; 
    }

    #itemAll .title .qarakusi {
        width: 178px;
        color: #4b586b;
        background-color: #fff;
        border: 1px solid;
        font-family: "Blender Pro";
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 6px;
        margin: -64px auto; 
    }
</style>