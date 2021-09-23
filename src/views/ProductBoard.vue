<template>
  <div class="banner">
    <Navbar></Navbar>
  </div>
  <div class="wrap">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import emitter from '../methods/emitter.js'

export default {
  components: {
    Navbar,
    Footer
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss" scoped>
  .banner {
  background: url('../assets/images/productbanner.jpg') center center;
  height: 70vh;
  }
  .wrap{
    background-image: url('../assets/images/作者介紹背景.jpg');
    padding-bottom: 10vh;
  }
</style>
