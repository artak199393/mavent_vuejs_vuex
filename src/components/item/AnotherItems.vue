<template>
    <section id="anotheritems">
        <b-container class="bv-example-row text-center">
            <div class="title">
                <div class="gic"></div>
                <div class="qarakusi">{{ product.other }}</div>
            </div>
            <b-row>
                <b-col sm="6" md="4" lg="4" xl="4" class="patuhan" v-for="prod in productRandom" :key="'productRandom'+ prod.id">
                    <product-item :random="prod"></product-item>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import ProductItem from "./ProductItem"
import { mapGetters } from 'vuex';

export default {
    name: 'AnotherItems',
    components:{
        ProductItem
    },
    computed:{
        ...mapGetters('item',{
            product: 'getProduct',
            productRandom: 'getProductRandom'
        })
    },
    mounted(){
        console.log('productRandom',this.productRandom)
    }
}
</script>

<style>
    #anotheritems {
        padding-bottom: 75px; }
    #anotheritems .title {
        margin: -1px 0 0 17px;
        padding-bottom: 87px; }
    #anotheritems .title .gic {
        width: 100%;
        border: 0.5px solid #4b586b;
        margin: 46px auto; }
    #anotheritems .title .qarakusi {
        width: 178px;
        color: #4b586b;
        background-color: #fff;
        border: 1px solid;
        font-family: "Blender Pro";
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        margin: -68px auto;
        padding: 8px 0px; }
</style>