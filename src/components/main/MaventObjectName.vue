<template>
    <div id="objectName" v-if= "object.multilanguage">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 name">
			<p>{{mainObj.name}}</p>
			<p >{{object.multilanguage.title}}</p>
		</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 name">
			<p>{{mainObj.address}}</p>
			<p>{{object.multilanguage.adress}}</p>
		</div>
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 name">
			<p>{{mainObj.workload}}</p>
			<p>{{ object.size }},{{ object.multilanguage.about }}</p>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MaventObjectName',
    props:{
        object:{
            type:Object, 
            required:true
        }
    },
    computed:{
    ...mapGetters('mainElements',{
      mainObj: 'getObjectsElements'
    })
  },
}
</script>

<style>
    #objectName{    
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%;
        margin-left: 90px;
    }

    .name {
        margin-top: 35px;
    }
    .name :first-child {
        color: #c1c5ce;
        font-size: 14px;
        font-family: "Museo Sans Cyrl";
    }

    .name :last-child {
        color: #4b586b!important;
        font-size: 18px!important;
        font-family: "Blender Pro"!important; 
    } 
    
    .name:first-child > p{
        text-align: left;
        color: #c1c5ce;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
    }

    .name:first-child > p:last-child{
        margin-top: -8px;
    }

    .name:nth-child(2) > p{
        text-align: left;
        color: #c1c5ce;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
        margin: 1px 0 0 -23px;
    }

    .name:nth-child(2) > p:last-child{
        margin-top: 8px;
    }

    .name:last-child > p{
        text-align: left;
        color: #c1c5ce;
        font-size: 15px;
        font-family: "Museo Sans Cyrl";
        margin-top: 2px;
    }

    .name:last-child > p:last-child{
        margin-top: -10px;
    }
</style>