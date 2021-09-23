<template>
  <Loading :active="isLoading"></Loading>
  <div class="container pt-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-primary p-2">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item"><a href="#"><router-link to="/mall/product">商店菜單</router-link></a></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ item.title }}
        </li>
      </ol>
    </nav>
    <div class="row item">
      <div class="col-6">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="col-6">
        <div class="txt">
          <h1>{{ item.title }}</h1>
          <hr />
          <div class="content">
            <h4>{{ item.content }}</h4>
          </div>
          <h5 class="text-end text-muted text-decoration-line-through">
            原價 : $NT {{ item.origin_price }} 元
          </h5>
          <h4 class="text-end text-success discount">
            優惠價 : $NT {{ item.price }} 元
          </h4>
        </div>
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          v-model.number="productNum"
        >
          <option selected disabled>請選擇數量</option>
          <option value=1>1 份</option>
          <option value=2>2 份</option>
          <option value=3>3 份</option>
          <option value=4>4 份</option>
          <option value=5>5 份</option>
        </select>
        <div class="total">
          <h4>小計 | $NT {{item.price*productNum}} 元</h4>
          <button type="button" class="btn btn-outline-secondary" @click="addCart(item.id)" :class="{ disabled: this.cartLoading === item.id }"><i class="bi bi-cart-plus-fill" :class="{'text-success':cartFinish===item.id}"></i><span class="ms-2" v-if="cartLoading===''">加入購物車</span><span class="ms-2 text-success" v-if="cartFinish===item.id">已加入購物車</span></button>
        </div>
      </div>
    </div>
    <h1 class="title pt-5">嚴選食材</h1>
    <div class="row img-group pt-4">
      <img src="../assets/images/products/食材1.jpg" alt="">
      <img src="../assets/images/products/食材2.jpg" alt="">
      <img src="../assets/images/products/食材3.jpg" alt="">
      <img src="../assets/images/products/食材4.jpg" alt="">
    </div>
    <h1 class="title pt-5">購物須知</h1>
    <div class="row mt-4 notice">
      <div class="txt p-4">
        <p><i class="bi bi-bell"></i> 所有料理都是使用當日新鮮運送食材並當日製作，建議冷藏存放不超過3天。</p>
        <p><i class="bi bi-bell"></i> 請於建立訂單時確實填寫到貨地址，另外，我們所提供的產品配送區域範圍目前僅限台灣本島。</p>
        <p><i class="bi bi-bell"></i> 建立訂單後於24小時內宅配到府，請您耐心等候。</p>
        <p><i class="bi bi-bell"></i> 收到商品時，若發現商品有包裝瑕疵、食材不新鮮、商品品質不佳等問題，請立即聯絡客服<br>客服專線 : (02) 2924-XXXX</p>
        <p><i class="bi bi-bell"></i> 防詐騙提醒：本公司絕不會以電話或簡訊通知訂單/分期出錯、或變更付款方式，更不會要您前往ATM進行任何操作！請謹慎小心，以免權益受損！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: {},
      id: '',
      cartLoading: '',
      cartFinish: '',
      productNum: 1,
      cartNum: 0
    }
  },
  inject: ['emitter'],
  methods: {
    sendCartNum (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(url).then(res => {
        console.log('cart', res.data.data.carts.length)
        this.cartNum = res.data.data.carts.length
        this.emitter.emit('sendNavbar', this.cartNum)
        this.cartFinish = id
      })
    },
    addCart (id) {
      this.cartLoading = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: this.productNum
      }
      this.axios.post(url, { data: cart }).then(res => {
        console.log(res)
        this.sendCartNum(id)
      })
    }
  },
  created () {
    this.isLoading = true
    this.id = this.$route.params.itemId
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
    this.axios.get(url).then(res => {
      console.log(res)
      this.item = res.data.product
      this.isLoading = false
    })
  }
}
</script>

<style lang="scss" scoped>
$primary: #f2e2ce;
$secondary: #b96600;
.breadcrumb {
  font-size: 1.2vw;
  a {
    text-decoration: none;
    color: $secondary;
  }
}
.item {
  img {
    width: 40vw;
    height: 55vh;
    object-fit: cover;
  }
  .txt{
    height: 40vh;
    .content{
      height: 18vh;
    }
  }
  h1,
  .discount {
    font-weight: 700;
  }
}
.total{
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    font-size: 1.5vw;
    border: none;
    &:hover{
      color: $primary;
      background-color: $secondary;
    }
  }
}
.title{
  text-align: center;
  font-weight: 700;
  color: $secondary;
}
.img-group{
  justify-content: space-around;
  img{
    width: 20vw;
    height: 16vw;
    object-fit: cover;
  }
}
.notice{
  margin: auto;
  width: 50vw;
  background-color: $primary;
  opacity: 0.6;
  border-radius: 20px;
  box-shadow: 0px 0px 8px #724104;
}
</style>
