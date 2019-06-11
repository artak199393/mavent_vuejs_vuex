<template>
    <div class="col-12 col-xl-6 offset-xl-3">
        <form action="/" class="my-2 d-flex flex-column">
            <label class="label">
                <i class="far fa-envelope fa-2x " id="email"></i>
                <input type="email" id="#email" v-model="user.email" :placeholder="feedBack.placeholder_mail">
			</label>
			<label>
				<i class="fas fa-phone fa-2x" id="phone"></i>
				<input type="text" id="#phone" v-model="user.phone" :placeholder="feedBack.placeholder_phone">
			</label>
			<label>
				<i class="fas fa-user fa-2x" id="name"></i>
				<input type="text" id="#name" v-model="user.name" :placeholder="feedBack.placeholder_name">
			</label>
			<label>
				<textarea :placeholder="feedBack.placeholder_comment" v-model="user.text"></textarea>
			</label>
			<label>
				<button type="button" @click.prevent="addUser" class="btn btn-lg">{{ feedBack.button_value }}</button>
			</label>
		</form>
	</div>
</template>

<script> 
import { mapGetters } from 'vuex';

export default {
    name: 'MaventCallBackForm',
    data(){
        return{
            user:{
                email:"",
                phone:"",
                name:"",
                text:""
            }
        }
    },
    methods:{
        addUser(){
            console.log(this.user);
            this.user = "";
        }
    },
    computed:{
        ...mapGetters('mainElements',{
            feedBack: 'getFeedBackElements'
        }),
    }
}
</script>

<style>
    form label {
        margin-bottom: 27px; 
    }

    .label> i {
        border: 1px solid #ea212d!important;
    }

    .label > input {
        border: 1px solid #ea212d !important;
    }

    form label i {
        color: #4b586b;
        background-color: #f9f9f9;
        outline: none;
        border: 1px solid #4b586b;
        -webkit-border-bottom-left-radius: 5px;
                border-bottom-left-radius: 5px;
        -webkit-border-top-left-radius: 5px;
                border-top-left-radius: 5px;
        padding: 8px;
        margin: 2px 0 0 18px; 
    }

    form label input {
        width: 290px;
        outline: none;
        border: 1px solid #4b586b;
        -webkit-border-top-right-radius: 5px;
                border-top-right-radius: 5px;
        -webkit-border-bottom-right-radius: 5px;
                border-bottom-right-radius: 5px;
        margin-left: -4px;
        padding: 18px 8px 6px 8px; 
    }

    form label textarea {
        width: 335px;
        border: 1px solid #4b586b;
        -webkit-border-radius: 5px;
                border-radius: 5px;
        outline: none;
        padding: 12px 0px 90px 11px;
        margin-left: 16px; 
    }
    
    form label button {
        width: 333px;
        color: white!important;
        background-color: #77a72a!important;
        font-family: "Blender Pro";
        outline: none;
        margin-left: 18px; 
    }

</style>