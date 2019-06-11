<template>
  <div id="sliderObject">
    <img class="slaq-left" @click="goBack" src="./../../assets/arrow.png">
    <img class="slaq-right" @click="next" src="./../../assets/arrow1.png">
    <b-carousel class="sliderObject"
      id="carousel2"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
    >
      <b-carousel-slide v-for="(img,index) in object.images" :key="`objImg_${index}`">
        <img slot="img" id="objectSlider" class="d-block img-fluid w-100 " width="900" height="320" :src="img" alt="image slot"/>
      </b-carousel-slide>
      
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MaventObjectSlider',
  data() {
    return {
      slide: 0,
    }
  },
  props:{
    object:{type:Object, required:true} 
  },
  methods:{
    goBack(){
      this.slide--;
    },
    next(){
      this.slide++;
    }
  }
}
</script>

<style>
  .sliderObject{
    max-width: 85%;
    margin: 17px 0 0 91px 
  }

  .slaq-right {
    float: right;
    margin: 223px -25px 0 0px;
  }

  .slaq-left {
    float: left;
    margin: 223px 0 0 -10px; 
  }

  #carousel2 #objectSlider{
    height: 505px;
  }

  #carousel2 .carousel-indicators .active {
    background-color: red!important;
  }

  #carousel2 .carousel-indicators>li{
    opacity: unset!important;
    width: 15px!important;
    height: 15px!important;
    border-radius: 50%;
    margin: 0px 2px 0 4px !important;
    border: 3px solid #FFFFFF!important;
    background-color: unset!important;
  }

  @media (max-width: 991px) {
    ol#carousel2___BV_indicators_ {
      margin-bottom: 7px;}
    #carousel1 .carousel-indicators>li, 
    #carousel2 .carousel-indicators>li{ 
      width: 10px!important;
      height: 10px!important;
      margin: -18px -5px 0 12px !important;
      border: 2px solid #FFFFFF!important; }
  }

  @media (max-width: 575px){
    #carousel2 #objectSlider {
    height: 370px;}
  }

  @media (max-width: 414px){
    #carousel2 #objectSlider {
      height: 270px;}
    #carousel1 .carousel-indicators>li, 
    #carousel2 .carousel-indicators>li {
      width: 7px!important;
      height: 7px!important;
      margin: -11px -5px 0 12px !important;
    }
  }
</style>
