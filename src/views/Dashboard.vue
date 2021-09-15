<template>
    <BackstageNavbar></BackstageNavbar>
    <div class="container-fluid mt-3 position-relative">
        <ToastMessages></ToastMessages>
        <router-view/>
    </div>
</template>

<script>
import BackstageNavbar from '../components/BackstageNavbar.vue'
import emitter from '../methods/emitter.js'
import ToastMessages from '../components/ToastMessages.vue'

export default {
  components: {
    BackstageNavbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }, // *使用provide讓內層元件都可以使用外層的emitter(mitt)功能，內層的元件使用inject讀入
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api)
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
