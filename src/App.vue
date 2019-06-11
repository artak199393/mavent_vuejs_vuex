<template>
  <div id="app">
    <mavent-nav></mavent-nav>
    <router-view></router-view>
    <mavent-footer></mavent-footer>
  </div>
</template>

<script>
import MaventNav from './components/main/MaventNav'
import MaventFooter from './components/main/MaventFooter'

export default {
  name: 'app',
  components: {
    MaventNav,
    MaventFooter
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box; }
            
  #app{
    overflow-x: hidden;
  }

</style>
