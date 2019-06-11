<template>
  <div>
    <news-page-section></news-page-section>
  </div>
</template>

<script>
import './../../css/news_page.css'
import NewsPageSection from "./../news_page/NewsPageSection"
 
export default {
  name: 'NewsPageBody',
  components:{
    NewsPageSection
  }
}
</script>

<style>

</style>