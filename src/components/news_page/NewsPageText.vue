<template>
    <div class="text" v-if="newsText.multilanguage">
		<h3>{{ newsText.multilanguage.title }}</h3>
		<div v-html="newsText.multilanguage.content"></div>
	</div>
</template>

<script>
 
export default {
    name: 'NewsPageText',
    props:{
        newsText:{
            type:Object, 
            required:true
        }
    }
}
</script>

<style>
    #newsPage .text {
        margin: 24px 0 -21px 18px; 
        padding: 135px 0px 50px 18px;
    }

    #newsPage .text h3 {
        font-size: 24px;
        font-weight: bold;
        color: #303D4F;
        font-family: "Museo Sans Cyrl";
        letter-spacing: 0.8px;
        margin: -51px 0px 0 -5px;
        padding-bottom: 18px; 
    }

    #newsPage .text p {
        font-size: 14px;
        line-height: 18px;
        color: #656f85;
        font-family: "Museo Sans Cyrl";
        margin-top: 21px;
        letter-spacing: 0.8px;
        padding-right: 18px; 
    }
</style>