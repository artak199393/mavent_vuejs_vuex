<template>
    <section id="contact">
		<b-container class="bv-example-row text-center">
			<h1 class="h1">{{ contact.title }}</h1>
			<b-row>
                <mavent-contact-item></mavent-contact-item>
            </b-row>
		</b-container>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.216225729443!2d-89
        .2391164!3d48.45238070000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5921616d61c26b%3A0x15e
        5407d2071c8dd!2s109+Hogarth+St%2C+Thunder+Bay%2C+ON+P7A+7G8!5e0!3m2!1sen!2sca!4v1424371524427" 
        width="100%" height="450" frameborder="0" style="border: 0px;"></iframe>
		<b-container class="bv-example-row">
			<img class="img-fluid merged" src="./../../assets/merged.png">
		</b-container>
	</section>
</template>

<script>
import MaventContactItem from "./MaventContactItem"
import { mapGetters } from 'vuex';
 
export default {
    name: 'MaventContact',
    components:{
        MaventContactItem
    },
    computed:{
        ...mapGetters('mainElements',{
			contact: 'getContactElements'
		}),
    },
}
</script>

<style>
    #contact {
        padding: 90px 0 46px 0; 
    }

    .merged {
        padding-top: 70px;
        margin-left: 34px;
    }
</style>