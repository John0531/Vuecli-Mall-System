<template>
<Loading :active="isLoading"></Loading>
  <div class="container pt-5">
    <div class="row">
      <div class="col-7">
        <div class="form p-3">
          <h2>訂單資料</h2>
          <hr />
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="請輸入Email"
              v-model="form.user.email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label"
              >姓名</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput2"
              placeholder="請輸入姓名"
              v-model="form.user.name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label"
              >電話</label
            >
            <input
              type="tel"
              class="form-control"
              id="exampleFormControlInput3"
              placeholder="請輸入電話"
              v-model="form.user.tel"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label"
              >地址</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput4"
              placeholder="請輸入地址"
              v-model="form.user.address"
            />
          </div>
          <label class="form-label">付款方式</label>
          <div class="mb-3">
            <select class="form-select" aria-label="Default select example" v-model="form.payment_method">
              <option selected disabled>請選擇付款方式</option>
              <option>貨到付款</option>
              <option>信用卡</option>
              <option>Line Pay</option>
              <option>Apple Pay</option>
              <option>ATM</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >留言</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="form.message"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="order p-3">
          <h2>訂單明細</h2>
          <hr />
          <div class="d-flex mb-3 order-item" v-for="(item, key) in cartInfo.carts" :key="key">
              <img :src="item.product.imageUrl" alt="">
              <span class="ps-3">
                  <p>{{item.product.title}}<br>$NT {{item.final_total}} 元</p>
              </span>
              <span class="empty"></span>
              <span><h4>{{item.qty}} 份</h4></span>
          </div>
          <hr>
          <div class="total">
              <span><h4>總計</h4></span>
              <span><h4>$NT {{cartInfo.final_total}} 元</h4></span>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-secondary text-primary btn-lg" @click.prevent="createOrder">送出訂單</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      cartInfo: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: '',
        payment_method: ''
      },
      orderId: ''
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url).then(res => {
        console.log(res.data.data)
        this.cartInfo = res.data.data
        this.isLoading = false
      })
    },
    toCheckout () {
      this.$router.push(`/mall/checkout/${this.orderId}`)
    },
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.axios.post(url, { data: order })
        .then((res) => {
          console.log(res)
          this.orderId = res.data.orderId
          this.isLoading = false
          this.toCheckout()
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
*{
    font-weight: 700;
}
.form{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #000;
}
.order{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 5px #000;
    img{
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
    }
}
.order-item{
    height: 6vw;
    width: 100%;
    align-items: center;
    .empty{
        flex-grow: 1;
    }
}
.total{
    display: flex;
    justify-content: space-between;
}
button{
    display: block;
    margin: 5vh auto 0;
}
</style>
