<template>
    <section id="iteminfo">
        <b-container fluid>
            <b-row>
                <item-slider :oneProduct="oneProduct"></item-slider>
                <item-information :oneProduct="oneProduct"></item-information>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import ItemSlider from "./../item/ItemSlider"
import ItemInformation from "./../item/ItemInformation"
import { mapGetters } from 'vuex';
 
export default {
  name: 'ItemInfo',
  components:{
    ItemSlider,
    ItemInformation
  },
  computed:{
    ...mapGetters('item',{
        oneProduct: 'getOneProduct'
    })
  },
  
}
</script>

<style>
  #iteminfo {
    padding: 180px 0 76px 90px; 
  }
</style>