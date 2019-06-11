<template>
    <router-link :to="{name:'item', params:{id:product.id}, hash:'#iteminfo'}"> 
        <div class="item">
            <img class="img-thumbnail img" :src="product.full_img_path">
        </div>
        <p>{{product.multilanguage.short_description}}</p>
        <h1>{{product.multilanguage.title}}</h1>
    </router-link>
</template>

<script>
 
export default {
    name: 'ItemAllFirstItem',
    props:{
        product:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    #itemAll .patuhan {
        margin-bottom: 5px; 
    }

    #itemAll .patuhan:nth-child(6), #itemAll .patuhan:nth-child(7), 
    #itemAll .patuhan:nth-child(8), #itemAll .patuhan:nth-child(9), 
    #itemAll .patuhan:nth-child(10), #itemAll.patuhan:nth-child(11) {
        margin-top: 50px;
    }

    /* #itemAll .patuhan:last-child {
        margin-top: 50px;
    } */

    #itemAll .patuhan .item img {
        width: 85%;
        height: 280px;
        margin: 6px 0 0 0; 
    }

    #itemAll .patuhan p {
        color: #4b586b;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
        line-height: 24px;
        letter-spacing: 0.4px;
        padding: 35px 21px 6px 38px;
    }

    #itemAll .patuhan h1 {
        color: #303d4e;
        font-size: 31px;
        font-family: "Blender Pro";
        text-transform: uppercase;
        margin: 0 0 16px 21px; 
    }
</style>