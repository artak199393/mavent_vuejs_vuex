<template>
  <section id="object">
    <b-container class="bv-example-row text-center">
      <img src="./../../assets/icon1.png" class="logo-2">
      <h1 class="h1">{{ mainObj.title }}</h1>
      <p class="object-text">{{ mainObj.description }}</p>
      <b-row>
        <mavent-object-item :mainObject="mainObj"></mavent-object-item>
      </b-row>
      <mavent-object-slider :object="object"></mavent-object-slider>
      <b-row>
        <mavent-object-name :object="object"></mavent-object-name>
      </b-row>
    </b-container>
	</section>
</template>

<script>
import MaventObjectItem from "./MaventObjectItem"
import MaventObjectSlider from "./MaventObjectSlider"
import MaventObjectName from "./MaventObjectName"
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MaventObject',
  components:{
    MaventObjectItem,
    MaventObjectSlider,
    MaventObjectName
  },
  created(){
    this.loadObjectName();
    emitter.$on('change_lng',()=>{
      this.loadObjectName();
    });
  },
  methods:{
    ...mapActions('mainObject',["loadObjectName"])
  },
  computed:{
    ...mapGetters('mainElements',{
      mainObj: 'getObjectsElements'
    }),
     ...mapGetters('mainObject',{
      object: 'getObjectName'
    })
  },
}
</script>

<style>
  #object {
    padding: 90px 0 55px 0; 
  }

  #object .container .logo-2 {
    margin: -21px 0 0 16px;
    padding-bottom: 61px; 
  }

  .object-text {
    color: #4b586b;
    font-family: "Blender Pro";
    font-size: 24px;
    letter-spacing: 0.2px;
    line-height: 30px;
    margin: -51px 0 0 20px;
    padding: 0 128px 24px 128px;
  }

</style>