<template>
  <div id="maventSlider">
    <b-carousel class="maventSlider"
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"  
    >
    
      <b-carousel-slide v-for="(slide,index) in slides" :key="`slides_${index}`">
        <img slot="img" class="d-block img-fluid w-100 sliderImg" width="1024" height="520" :src="slide.img_full_path" alt="image slot"/>
        <img src="./../../assets/MAVent1.png" class="mavent d-block img-fluid">
        <h1 class="mavent-h1">{{ slider.title }}</h1>
        <p class="mavent-p">{{ slider.description }}</p>
      </b-carousel-slide>
      
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MaventSlider',
  created(){
    this.loadSlides();
    emitter.$on("change_lng",(lng)=>{
      this.loadSlides(lng)
    });
  },
  computed:{
    ...mapGetters('sliderModul',{
			slides: 'getSlides'
    }),
    ...mapGetters('mainElements',{
			slider: 'getMainSlider'
    }),
  },
  methods:{
    ...mapActions('sliderModul',['loadSlides']),
  }
}
</script>

<style>
  #carousel1 .carousel-indicators .active {
    background-color: red!important;
  }

  #carousel1 .carousel-indicators>li{
    opacity: unset!important;
    width: 15px!important;
    height: 15px!important;
    border-radius: 50%;
    margin: -44px -5px 0 12px !important;
    border: 3px solid #FFFFFF!important;
    background-color: unset!important;
  }

  .mavent {
  margin: 0 auto;
  padding-left: 14px;}

  .sliderImg{
    height: 890px!important;
  }

  .mavent-h1 {
    color: white;
    font-size: 48px;
    font-family: "Blender Pro";
    text-transform: uppercase;
    line-height: 1.2;
    margin: 54px 0 0 20px;
  }

  .mavent-p {
    color: white;
    font-size: 28px;
    font-family: "Blender Pro";
    line-height: 35px;
    letter-spacing: 0.8px;
    padding: 50px 212px 212px 214px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1199px) {
    .mavent{
      padding-left: 0;
    }
    .mavent-p{
      padding: 50px 30px 212px 30px;
    }
  }

  @media (max-width: 991px) {
    .mavent{
      width: 70%;
    }
    .mavent-p {
      padding: 50px 0px 212px 0px;
      font-size: 26px;
    }
  }

  @media (max-width: 767px){
    .mavent-h1{
      font-size: 40px;
    }
    .mavent-p {
      font-size: 20px;
    }
  }

  @media (max-width: 575px){
    .sliderImg {
      height: 760px !important;
    }
    .mavent-h1{
      font-size: 33px;
    }
    .mavent-p {
      font-size: 17px;
      padding-bottom: 140px;
    }
  }

  @media (max-width: 414px){
    .mavent{
      width: 100%;
    }
    .mavent-h1{
      font-size: 24px;
    }
  }

  @media (max-width: 360px){
    .sliderImg {
      height: 600px !important;
    }
    .mavent-h1{
      font-size: 21px;
    }
    .mavent-p {
      font-size: 12px;
      padding-bottom: 80px;
    }
  }
    
</style>

