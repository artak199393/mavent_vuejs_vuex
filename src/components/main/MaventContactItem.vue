<template>
   <div id="contactItem">
		<div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 offset-xl-1 contact-name">
			<p class="first-p">{{ contact.phone_fax }}</p>
			<p class="second-p">{{ contact.phone }}</p>
			<p class="third-p">{{ contact.fax }}</p>
		</div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 offset-xl-1 contact-name">
			<p class="first-p">{{ contact.address_title }}</p>
			<p class="second-p">{{ contact.address }}</p>
		</div>
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 offset-xl-1 contact-name">
			<p class="first-p">{{contact.email}}</p>
			<p class="second-p">{{contact.email}}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
 
export default {
    name: 'MaventContact',
    computed:{
        ...mapGetters('mainElements',{
			contact: 'getContactElements'
		}),
    },
}
</script>

<style>
    #contactItem{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }
    
    .contact-name {
        color: #7a8295;
        font-family: "Museo Sans Cyrl";
        margin-top: -19px;
    }

    .contact-name .first-p {
        font-size: 20px;
        padding-bottom: 11px; 
    }

    .contact-name .second-p {
        font-size: 17px; 
    }

    .contact-name .third-p {
        font-size: 17px;
        margin-top: -22px;
    }

    .contact-name:nth-child(2){
        margin-left: 55px;
    }

    .contact-name:last-child{
        margin-left: 55px;
    }
</style>