<template>
    <h1>hello</h1>
</template>

<script>

export default {
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.itemId
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
    this.axios.get(url)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
