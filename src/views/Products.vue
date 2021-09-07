<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">增加一個產品</button>
  </div>
  <table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ $filters.currency(item.origin_price) }}<!-- 加入全域屬性方法，不需要再匯入檔案 -->
      </td>
      <td class="text-right">
        {{ $filters.currency(item.price) }}<!-- 加入全域屬性方法，不需要再匯入檔案 -->
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-danger" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-secondary btn-sm" @click="openModal(false,item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <!-- :product="tempProduct"=> props前內後外(將資料往內層傳) -->
  <!-- @update-product="updateProduct"=> emit前內後外(將資料往外層傳) -->
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Pagination.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'], // *使用mitt傳遞資料
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      // ?新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // ?編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res)
          productComponent.hideModal()
          if (res.data.success) {
            this.getProducts()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })// *使用emitter.emit傳出資料到ToastMessages.vue，'push-message'為自定義事件名稱，{}為要傳送的資料參數
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          }
        })
    },
    // ?開啟刪除Modal
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url)
        .then((res) => {
          console.log(res.data)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getProducts()
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
