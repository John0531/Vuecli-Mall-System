<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index:1050">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    ></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'], // *使用mitt傳遞資料
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })// *使用emitter.on監聽Products.vue傳出的資料push-message，當監聽到資料傳出時，會觸發箭頭函式的事件來接收資料，而參數message代表外部Products.vue傳來的資訊
  }
}
</script>
