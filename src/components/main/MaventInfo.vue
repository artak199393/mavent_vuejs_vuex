<template>
    <section id="info">
        <div class="container text-center">
            <h1 class="info-h1">{{ info.title }}</h1>
            <div class="info-p" v-html = "info.description" ></div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'MaventInfo',
    computed:{
        ...mapGetters('mainElements',{
			info: 'getInfoElements'
		}),
    }
}
</script>

<style>
    #info {
        background: url("./../../assets/info.png") no-repeat center;
        -webkit-background-size: cover;
                background-size: cover;
        padding: 64px 0; 
    }

    .info-h1 {
        color: white;
        font-size: 36px;
        font-family: "Blender Pro";
        font-weight: bold;
        margin: 40px 0 0 18px; 
    }

    .info-p > p {
        color: white;
        font-size: 16px;
        font-family: "Museo Sans Cyrl";
        line-height: 24px;
        letter-spacing: 1px;
        padding: 40px 0 0 36px;
    }
</style>