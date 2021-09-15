<template>
  <div class="banner">
    <Navbar></Navbar>
  </div>
  <div class="wrap">
    <div class="container">
      <div class="group pt-5">
        <button type="button" class="btn btn-outline-secondary" :class="{active:type==='全部'}" @click="allFilter">全部</button>
        <button type="button" class="btn btn-outline-secondary" :class="{active:type==='蛋白質'}" @click="meatFilter">
          豐富蛋白質菜單
        </button>
        <button type="button" class="btn btn-outline-secondary" :class="{active:type==='低醣'}" @click="sugarFilter">
          健康低醣菜單
        </button>
        <button type="button" class="btn btn-outline-secondary" :class="{active:type==='沙拉'}" @click="saladFilter">
          零負擔沙拉菜單
        </button>
      </div>
      <div class="search pt-4">
        <div class="row inputs">
          <div class="input-group">
            <button
              class="btn btn-secondary"
              type="button"
              id="button-addon2"
              @click="searchText"
            >
              <i class="bi bi-search text-primary"></i>
            </button>
            <input
              type="text"
              class="form-control"
              placeholder="請輸入關鍵字"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="text"
              @keyup.enter="searchText"
            />
          </div>
          <select class="form-select" aria-label="Default select example" v-model="judgePrice">
              <option selected>選擇價位高低</option>
              <option>由高到低</option>
              <option>由低到高</option>
          </select>
        </div>
      </div>
      <div class="row pt-3 content gy-4">
        <div class="card px-0" v-for="(item, key) in filterMenu" :key="key">
          <a href="#">
            <div class="item">
              <img
                :src="item.imageUrl"
                class="card-img-top"
                alt=""
              />
              <div class="img-txt"><h2>查看更多</h2></div>
            </div>
          </a>
          <div class="card-body row cart-text">
              <div class="col-11 pe-0">
                <h4 class="card-title">{{item.title}}</h4>
                <del class="text-muted">原價 : $NT {{item.origin_price}} 元</del>
                <h4 class="text-success">特惠價 :<br> $NT {{item.price}} 元</h4>
              </div>
              <div class="col-1 p-0">
                <a href="#" class="btn btn-primary add-cart"
                  ><i class="bi bi-cart-plus-fill"></i
                ></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  data () {
    return {
      menu: [],
      filterMenu: [],
      type: '全部',
      judgePrice: '選擇價位高低',
      text: ''
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    allFilter () {
      this.type = '全部'
      this.filterMenu = this.menu
      this.judgePrice = '選擇價位高低'
    },
    meatFilter () {
      this.judgePrice = '選擇價位高低'
      this.type = '蛋白質'
      const filter = this.menu.filter((item) => {
        return item.category === this.type
      })
      this.filterMenu = filter
    },
    sugarFilter () {
      this.judgePrice = '選擇價位高低'
      this.type = '低醣'
      const filter = this.menu.filter((item) => {
        return item.category === this.type
      })
      this.filterMenu = filter
    },
    saladFilter () {
      this.judgePrice = '選擇價位高低'
      this.type = '沙拉'
      const filter = this.menu.filter((item) => {
        return item.category === this.type
      })
      this.filterMenu = filter
    },
    searchText () {
      if (this.text === '') {
        this.allFilter()
      }
      this.filterMenu = this.filterMenu.filter((item) => {
        return item.title.match(this.text)
      })
    }
  },
  watch: {
    judgePrice (n) {
      if (n === '由高到低') {
        this.filterMenu = this.filterMenu.sort((a, b) => {
          return b.price - a.price
        })
      } else if (n === '由低到高') {
        this.filterMenu = this.filterMenu.sort((a, b) => {
          return a.price - b.price
        })
      }
    }
  },
  created () {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
    this.axios.get(url)
      .then((res) => {
        console.log(res)
        this.menu = res.data.products
        console.log(this.menu)
        this.allFilter()
      })
  }
}
</script>

<style lang="scss" scoped>
$primary: #f2e2ce;
$secondary: #b96600;
.banner {
  background: url('../assets/images/productbanner.jpg') center center;
  height: 70vh;
}
.wrap {
  background-image: url('../assets/images/作者介紹背景.jpg');
  .container {
    padding-bottom: 10vh;
  }
  .group {
    margin: auto;
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
    button {
      width: auto;
      height: 6vh;
      border: 3px solid;
      border-radius: 20px;
      padding: 0 2vw 0;
      font-size: 1.4vw;
      font-weight: 700;
      &:hover {
        color: $primary;
      }
    }
    .active{
      border: none;
      color: $primary;
    }
  }
  .search{
    .inputs{
      justify-content: space-between;
    }
    .input-group{
      width: 25vw;
    }
    .form-select{
      width: 20vw;
    }
  }
  .content {
    justify-content: space-evenly;
    .card {
      width: auto;
      border-radius: 20px;
      border: none;
      box-shadow: 2px 2px 5px #573000;
    }
    .item{
      position: relative;
    }
    img {
      width: 20vw;
      height: 40vh;
      object-fit: cover;
      border-radius: 20px 20px 0 0;
    }
    .img-txt{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.603);
      top:0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $primary;
      border-radius: 20px 20px 0 0;
      opacity: 0;
      transform: scale(0);
      transition: 0.5s;
    }
    a:hover .img-txt{
      opacity: 1;
      transform: scale(1);
    }
    .cart-text {
      align-items: center;
      width: 18vw;
    }
    .add-cart {
      font-size: 2vw;
      color: $secondary;
      &:hover {
        background-color: $secondary;
        color: $primary;
      }
    }
  }
}
</style>
