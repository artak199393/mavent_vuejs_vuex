<template>
    <div id="objectItem">
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 item1">
			<h1>{{mainObject.subtitle_1}}</h1>
			<hr>
			<p>{{mainObject.sub_content_1}}</p>
		</div>
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 item1">
			<h1>{{mainObject.subtitle_2}}</h1>
			<hr>
			<p>{{mainObject.sub_content_2}}</p>
		</div>
        <div class="col-sm-4 col-md-4 col-lg-4 col-xl-4 item1">
			<h1>{{mainObject.subtitle_3}}</h1>
			<hr>
			<p>{{mainObject.sub_content_3}}</p>
		</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MaventObject',
    props:{
        mainObject:{
            type: Object,
            required: true
        }
    },
    // computed:{
    //     ...mapGetters('mainObject',{
    //         mainObj: 'getObject'
    //     })
    // },
}
</script>

<style>
    #objectItem{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: -3px 0 0 32px;
    }

    .item1:nth-child(2){
        padding-left: 17px;
    }

    .item1:last-child{
        padding-left: 18px;
    }

    .item1 {
        color: #4b586b;
        font-family: "Blender Pro";
        text-align: left;
        padding: 34px 0;
    }

    .item1 h1 {
        font-size: 30px;
        color: #303d4e; 
    }

    .item1 hr {
        margin-top: 11px;
        width: 90%; 
    }

    .item1 p {
        font-size: 13px;
        font-family: "Museo Sans Cyrl";
        padding: 1px 23px 0 6px;
        line-height: 18px; 
    }
</style>