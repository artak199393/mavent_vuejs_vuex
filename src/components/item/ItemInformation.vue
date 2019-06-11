<template>
    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6 iteminfo-info" v-if="oneProduct.available_current_lng">
        <span class="minHeader" >{{ oneProduct.available_current_lng.description }}</span>
        <item-information-icons></item-information-icons>
        <h1>{{ oneProduct.title }}</h1>
        <p class="info-text">{{ oneProduct.short_description }}</p>
        <hr>
        <div v-html="oneProduct.long_description"></div>
        <item-information-button></item-information-button>
    </div>
</template>

<script>
import ItemInformationIcons from "./../item/ItemInformationIcons"
import ItemInformationButton from "./../item/ItemInformationButton"
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ItemInformation',
    components:{
        ItemInformationIcons,
        ItemInformationButton
    },
    props:{
        oneProduct:{type:Object, required:true} 
    }
}
</script>

<style>
    #iteminfo .iteminfo-info {
        margin: -9px 0 0 -19px; 
    }
    #iteminfo .iteminfo-info .minHeader {
        color: #c0d690;
        font-size: 12px;
        letter-spacing: 0.2px; 
    }
    #iteminfo .iteminfo-info h1 {
        color: #303d4e;
        font-size: 36px;
        font-family: "Blender Pro";
        text-transform: uppercase;
        margin-top: 4px; 
    }
    #iteminfo .iteminfo-info .info-text {
        color: #4b586b;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
        letter-spacing: 0.5px;
        margin-top: -5px; 
    }
    #iteminfo .iteminfo-info hr {
        margin-top: 44px;
        margin-bottom: 47px; 
    }
    
    #iteminfo .iteminfo-info p {
        color: #4b586b;
        font-size: 21px;
        font-family: "Museo Sans Cyrl";
        line-height: 20px; 
    }
    #iteminfo .iteminfo-info .info-p {
        font-size: 20px;
        font-family: "Museo Sans Cyrl";
        letter-spacing: 0.4px;
        margin: -20px 0 0 -37px; 
    }
    .mini > li:last-child {
        margin-top: 2px !important;
    }
</style>