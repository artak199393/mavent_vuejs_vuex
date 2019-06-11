<template>
  <div>
    <news-all-section></news-all-section>
  </div>
</template>

<script>
import './../../css/news_all.css'
import NewsAllSection from "./../news_all/NewsAllSection"
 
export default {
    name: 'NewsAllBody',
    components:{
        NewsAllSection
    }
}
</script>

<style>

</style>