<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <button type="button" class="btn btn-login">
    <router-link  to="/login" class="login">登入商品列表</router-link>
  </button>
  <button type="button" class="btn btn-login">
    <router-link  to="/mall/product" class="login">商城系統</router-link>
  </button>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
<style scoped>
  .login{
    text-decoration: none;
    font-weight: 700;
    color: #000;
  }
  .login:hover{
    color: #004280;
  }
  .btn-login{
    background-color: #42b983;
  }
</style>
