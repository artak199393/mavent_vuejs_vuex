<template>
  <b-col sm="6" md="4" lg="4" xl="4" offset-md="1" offset-lg="1" offset-xl="1" id="itemSlider">
    <b-carousel class="itemSlider"
      id="carousel3"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"  
    >
    
      <b-carousel-slide v-for="(img,index) in oneProduct.images_full_paths" :key="`productImg_${index}`">
        <img slot="img" id="itemImg" class="d-block img-fluid w-100" width="1024" height="520" :src="img" alt="image slot"/>
      </b-carousel-slide>
    </b-carousel>
  </b-col>
</template>

<script>

export default {
  name: 'ItemSlider',
  props:{
    oneProduct:{type:Object, required:true} 
  },
}
</script>

<style>
  .itemSlider {
    max-width: 86%;
    margin: 1px 0 0 27px;
  }
  
  #carousel3 #itemImg {
    height: 400px;
    max-height: 400px;
  }

  #itemSlider #carousel3 .carousel-indicators .active {
    background-color: red;
  }
  
  #itemSlider #carousel3 .carousel-indicators>li {
    opacity: unset;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0px 3px 0px 4px;
    border: 3px solid red;
    background-color: unset;
    position: relative;
    top: 64px;
  }
  /* .iteminfo .item {
    padding: 28px 53px 30px 53px;
    margin-left: -14px; 
  }

  .iteminfo .pages {
    padding-top: 28px;
    margin-left: -15px; 
  } */

</style>