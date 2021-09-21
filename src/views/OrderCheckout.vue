<template>
<Loading :active="isLoading"></Loading>
  <div class="container pt-5">
    <h2 class="text-success">
      <i class="bi bi-check-circle"></i> 已成功建立訂單
    </h2>
    <div class="order mt-4">
      <h3>訂單資訊</h3>
      <div class="px-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col" class="text-end">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in order.products" :key="key">
                <td>{{item.product.title}}</td>
                <td>{{item.qty}} 份</td>
                <td class="text-end">$NT {{item.final_total}} 元</td>
              </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"><h4>總計</h4></td>
                    <td class="text-end"><h4>$NT {{order.total}} 元</h4></td>
                </tr>
                <tr>
                    <td colspan="3" class="text-end"><p>訂單成立時間 : {{orderTime}}</p></td>
                </tr>
            </tfoot>
          </table>
      </div>
      <h3 class="mt-3">客戶資料</h3>
      <div class="client">
          <table class="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">Email</th>
                <td class="text-end">{{user.email}}</td>
              </tr>
              <tr>
                <th scope="row">客戶姓名</th>
                <td class="text-end">{{user.name}}</td>
              </tr>
              <tr>
                <th scope="row">客戶電話</th>
                <td class="text-end">{{user.tel}}</td>
              </tr>
              <tr>
                <th scope="row">客戶地址</th>
                <td class="text-end">{{user.address}}</td>
              </tr>
              <tr>
                <th scope="row">付款狀態</th>
                <td class="text-end text-danger" v-if="order.is_paid===false">未付款</td>
                <td class="text-end text-success" v-if="order.is_paid===true">付款完成</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="d-flex btns py-3 px-5 bg-secondary">
          <button type="button" class="btn text-primary" @click="toProduct"><i class="bi bi-reply-fill"></i>回商店</button>
          <button type="button" class="btn btn-outline-primary" @click="payOrder"  v-if="order.is_paid===false">確認付款</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {},
      user: {},
      orderId: '',
      orderTime: new Date().toLocaleString(),
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.axios.get(url)
        .then((res) => {
          console.log(res)
          this.order = res.data.order
          this.user = res.data.order.user
          console.log('訂單', this.order)
          console.log('user', this.user)
          this.isLoading = false
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.axios.post(url)
        .then((res) => {
          console.log(res)
          this.getOrder()
        })
    },
    toProduct () {
      this.$router.push('/mall/product')
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    console.log(this.orderId)
    this.getOrder()
  }
}
</script>

<style lang="scss" scoped>
*{
    font-weight: 700;
}
h2,
h3 {
  text-align: center;
}
h3 {
  background-color: #b96600;
  color: #f2e2ce;
  display: block;
  width: 100%;
  padding: 2vh 0;
}
.order {
  width: 50vw;
  background: #fff;
  margin: auto;
  .btns{
      width: 100%;
      justify-content: space-between;
  }
  button{
      font-size: 1.5vw;
      border: none;
  }
  .client{
      padding: 0 10vw;
  }
}
</style>
