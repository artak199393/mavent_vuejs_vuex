<template>
    <section id="news">
		<b-container class="bv-example-row text-center">
			<h1 class="news-h1">{{ news.title }}</h1>
			<b-row>
				<mavent-news-item></mavent-news-item>
			</b-row>
		</b-container>
	</section>
</template>

<script>
import MaventNewsItem from "./MaventNewsItem"
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'MaventNews',
    created(){
        this.loadNewsImg()
        emitter.$on("change_lng",(lng)=>{
            this.loadNewsImg(lng)
        });
    },
    components:{
        MaventNewsItem
    },
    computed:{
        ...mapGetters('mainElements',{
                news: 'getNewsElements'
        }),
    },
    methods:{
        ...mapActions('maventNews',['loadNewsImg']),
    }
}
</script>

<style>
    #news {
        padding-bottom: 20px; 
    }

    .news-h1 {
        color: #4b586b;
        font-size: 52px;
        font-family: "Blender Pro";
        margin-left: 22px;
        padding-bottom: 76px; 
    }

</style>