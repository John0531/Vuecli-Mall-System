<template>
  <div class="banner">
    <Navbar></Navbar>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
  .banner {
  background: url('../assets/images/productbanner.jpg') center center;
  height: 70vh;
  }
</style>
