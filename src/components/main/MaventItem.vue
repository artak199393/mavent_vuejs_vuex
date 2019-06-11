<template>
    <router-link :to="{name:'item',params:{id:product.id}, hash:'#iteminfo'}"> 
        <div class="item">
            <img class="img-thumbnail" :src="product.full_img_path">
        </div>
        <p>{{product.multilanguage.short_description}}</p>
        <h1>{{product.multilanguage.title}}</h1>
    </router-link>
</template>

<script>

export default {
    name: 'MaventItem',
    props:{
        product:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    #produkcia .title .patuhan:nth-child(2) > a > p, #produkcia .title .patuhan:nth-child(4) > a > p,
    #produkcia .title .patuhan:nth-child(8) > a > p, #produkcia .title .patuhan:nth-child(10) > a > p {
        padding: 35px 11px 6px 11px;
    }

    #produkcia .title .patuhan:nth-child(4)  {
        margin-top: 50px;
    }
    
    #produkcia .title .patuhan:nth-child(5) {
        margin-top: 50px;
    }
    
    #produkcia .patuhan .item {
        position: relative;
        overflow: hidden;
    }
    
    #produkcia .title .patuhan .item img {
        width: 85%;
        height: 280px;
        margin-top: 7px;
    }

    #produkcia .title .patuhan > a > p {
        color: #4b586b;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
        line-height: 24px;
        letter-spacing: 0.4px;
        padding: 35px 21px 6px 38px;
    }

    #produkcia .title .patuhan > a > h1 {
        color: #303d4e;
        font-size: 31px;
        font-family: "Blender Pro";
        text-transform: uppercase;
        margin: 0 0 16px 21px;
    }

    #produkcia .title .patuhan .item:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: no-repeat center;
        -webkit-transition: all 200ms ease-in-out;
        -o-transition: all 200ms ease-in-out;
        transition: all 200ms ease-in-out;
    }

    #produkcia .title .patuhan .item:hover:before {
        background: url("./../../assets/hover.png") no-repeat center;
        -webkit-background-size: cover;
                background-size: cover;
        -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
                transform: scale(1.1);
    } 
</style>