<template>
  <div>
    <mavent-slider></mavent-slider>
    <mavent-produkcia></mavent-produkcia>
    <mavent-info></mavent-info>
    <mavent-object></mavent-object>
    <mavent-call-back></mavent-call-back>
    <mavent-contact></mavent-contact>
    <mavent-news></mavent-news>
  </div>
</template>

<script>
import './../../css/main.css'
import MaventSlider from "./MaventSlider";
import MaventProdukcia from "./MaventProdukcia"
import MaventInfo from "./MaventInfo"
import MaventObject from "./MaventObject"
import MaventCallBack from "./MaventCallBack"
import MaventContact from "./MaventContact"
import MaventNews from "./MaventNews"
 
export default {
  name: 'MaventBody',
  components:{
    MaventSlider,
    MaventProdukcia,
    MaventInfo,
    MaventObject,
    MaventCallBack,
    MaventContact,
    MaventNews
  }
}
</script>

<style>
  .h1 {
    color: #4b586b!important;
    font-size: 52px!important;
    font-family: "Blender Pro"!important;
    margin: -7px 0 0 22px;
    padding-bottom: 90px;
  }

</style>