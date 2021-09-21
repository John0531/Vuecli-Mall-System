<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <h1 class="pt-5">購物車列表</h1>
    <div class="row cart-list">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">圖片</th>
            <th scope="col">商品名稱</th>
            <th scope="col">數量</th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in cartInfo.carts" :key="key" class="txt">
            <th scope="row">
              <button
                type="button"
                class="btn btn-outline-danger delete"
                @click.prevent="removeItem(item.id)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </th>
            <td><img :src="item.product.imageUrl" alt="" /></td>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="input-group">
                <button class="btn btn-outline-success plus-minus" type="button" @click="minusNum(item)"><i class="bi bi-dash-lg"></i></button>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  v-model.number="item.qty"
                  min="1"
                  @change="updateCart(item)"
                />
                <button class="btn btn-outline-success plus-minus" type="button" @click="plusNum(item)"><i class="bi bi-plus-lg"></i></button>
              </div>
            </td>
            <td>{{ item.product.price }} 元</td>
            <td>$NT {{ item.final_total }} 元</td>
          </tr>
        </tbody>
        <tfoot>
            <tr class="table-footer">
                <td colspan="5" class="text-end">總計</td>
                <td class="text-end">$NT {{cartInfo.final_total}} 元</td>
            </tr>
            <tr>
                <td colspan="6" class="text-end">
                    <button type="button" class="btn btn-secondary text-primary" @click="ToOrder">確認結帳</button>
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartInfo: {},
      isLoading: false
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
    removeItem (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.axios.delete(url).then(res => {
        console.log(res)
        this.getCart()
      })
    },
    minusNum (item) {
      item.qty--
      if (item.qty < 1) {
        item.qty = 1
      }
      this.updateCart(item)
    },
    plusNum (item) {
      item.qty++
      this.updateCart(item)
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.axios.put(url, { data: cart })
        .then((res) => {
          console.log(res)
          this.getCart()
        })
    },
    ToOrder () {
      this.$router.push('/mall/order')
    }
  },
  created () {
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-weight: 700;
}
.cart-list {
  button{
      font-weight: 700;
  }
  thead,tbody{
    font-size: 1.5vw;
    text-align: center;
  }
  .delete {
    border: 2px solid;
    width: 3vw;
    padding: 5px;
    font-size: 1.5vw;
    &:hover {
      border: none;
    }
  }
  .txt {
    img {
      height: 14vh;
      width: 10vw;
      object-fit: cover;
    }
    th,
    td {
      font-size: 1.5vw;
    }
  }
  .input-group {
    width: 9vw;
    margin: auto;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button{
      -webkit-appearance: none;
      margin:0;
    }/* 隱藏數字輸入框的小箭頭 */
    .plus-minus{
      border: none;
    }
  }
  .table-footer{
      font-size: 2vw;
  }
}
</style>
