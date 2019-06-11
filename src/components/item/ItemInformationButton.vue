<template>
    <button type="button" class="btn btn-lg">
        <i class="fas fa-angle-down"></i>{{ product.pdf_btn }}
    </button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ItemInformationButton',
    computed:{
        ...mapGetters('item',{
            product: 'getProduct'
        }),
    }  
}
</script>

<style>
    .iteminfo-info button {
        width: 42%;
        color: white;
        background-color: #269ac9;
        font-size: 16px;
        font-family: "Blender Pro";
        text-transform: uppercase;
        padding: 12px;
        margin-top: 30px; }
    .iteminfo-info button:hover{
        background-color: #2c8bb1;}
    .iteminfo-info button i {
        margin: 0 20px 0 -20px; }
</style>