<template>
    <section id="callback">
		<div class="container text-center">
			<h1 class="callback-h1">{{ feedBack.title }}</h1>
			<p class="callback-p">{{ feedBack.description }}</p>
			<b-row>
        <mavent-call-back-form></mavent-call-back-form>
      </b-row>
		</div>
	</section>
</template>

<script>
import MaventCallBackForm from "./MaventCallBackForm"
import { mapGetters } from 'vuex';

export default {
  name: 'MaventCallBack',
  components:{
    MaventCallBackForm
  },
  computed:{
    ...mapGetters('mainElements',{
			feedBack: 'getFeedBackElements'
		}),
  },
}
</script>

<style>
	#callback {
		background: url("./../../assets/call\ back.png") no-repeat center;
		-webkit-background-size: cover;
						background-size: cover;
		padding: 64px 0 34px 0;
	}

.callback-h1 {
  color: white;
  font-size: 48px;
  font-family: "Blender Pro";
  font-weight: bold;
  text-transform: uppercase;
	margin: -5px 0 0 18px; 
}

.callback-p {
  color: white;
  font-size: 18px;
  font-family: "Museo Sans Cyrl";
  letter-spacing: 0.9px;
  margin: 8px 0 0 17px;
	padding-bottom: 32px; 
}

</style>