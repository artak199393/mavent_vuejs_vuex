<template>
    <div class="float-right icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-google-plus-g"></i>
        <i class="fab fa-pinterest-p"></i>
    </div>
</template>

<script>

export default {
    name: 'ItemInformationIcons',
}
</script>

<style>
    .iteminfo-info .icons {
        margin: 8px 82px 0 0; 
    }
    .iteminfo-info .icons i {
        color: #fff;
        background-color: #add1e5;
        -webkit-border-radius: 50%;
                border-radius: 50%;
        width: 25px;
        padding: 4px;
        opacity: 0.8;
        margin-right: 6px; 
    }
    .iteminfo-info .icons i:nth-child(4) {
        background-color: #adadad; 
    }
    .iteminfo-info .icons i:last-child {
        background-color: #e9a7ab;
        margin-right: -5px;
        margin-top: 2px; 
    }
    .iteminfo-info .icons i:hover {
        background-color: #1a98c6; 
    }
    .iteminfo-info .icons i:nth-child(4):hover {
        background-color: #403f3f; 
    }
    .iteminfo-info .icons i:last-child:hover {
        background-color: #ff4651; 
    }
</style>