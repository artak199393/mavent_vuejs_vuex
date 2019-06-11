<template>
  <div>
    <item-info></item-info>
    <another-items></another-items>
  </div>
</template>

<script>
import './../../css/item.css'
import ItemInfo from "./../item/ItemInfo"
import AnotherItems from "./../item/AnotherItems"
import { mapActions, mapGetters } from 'vuex';
 
export default {
  name: 'ItemBody',
  watch:{
    "$route.params.id" : function(value){
      this.loadOneProduct(value)
    },
  },
  created(){
    let id = this.$route.params.id;
    this.loadProduct();
    this.loadOneProduct(id);
    this.loadProductRandom();
    emitter.$on("change_lng",(lng)=>{
        this.loadProductLng(lng);
        this.loadOneProduct(id);
        this.loadProductRandom(lng)
    });
  },
  components:{
    ItemInfo,
    AnotherItems
  },
  methods:{		
    ...mapActions('item',['loadProduct','loadProductLng','loadOneProduct','loadProductRandom']),
  }
}
</script>

<style>

</style>