<template>
  <a href="" class="cart">
      <div class="cart-img bg-secondary text-primary">
          <i class="bi bi-cart3"></i>
          <div class="num bg-danger"><p class="text-light">0</p></div>
      </div>
  </a>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: #f2e2ce;"
  >
    <div class="container-fluid px-5">
      <a class="navbar-brand" href="#"
        ><img src="../assets/images/logo-已修復.gif" alt="" class="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="link active" aria-current="page" href="./index.html"
              >首頁</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              >飲食方法</a
            >
            <ul class="diet-menu dropdown-menu">
              <li>
                <a href="./間歇性斷食.html">間歇性斷食</a>
              </li>
              <li>
                <a href="./低醣飲食.html">低醣飲食</a>
              </li>
              <li>
                <a href="./生酮飲食.html">生酮飲食</a>
              </li>
              <li>
                <a href="./碳循環飲食.html">碳循環飲食</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="link" href="./營養素.html">營養素</a>
          </li>
          <li class="nav-item">
            <a class="link" href="./食譜.html">食譜</a>
          </li>
          <li class="nav-item">
            <a
              class="link"
              href="https://john0531.github.io/vuecli-backstage-practice/dist/#/login"
              >商店菜單</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cartNum: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.cart{
  position: absolute;
  opacity: 0.9;
  z-index: 2;
  right: 0;
  top:0;
  .cart-img{
    width: 7vw;
    height: 13vh;
    font-size: 4.5vw;
    text-align: center;
    border-radius: 20px 0 0 20px;
    box-shadow: -5px 5px 5px #663701;
  }
  .num{
    position: absolute;
    right: 0.8vw;
    top:1vh;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 1.5vw;
    text-align: center;
  }
}
.navbar {
  position: absolute;
  z-index: 2;
  border-radius: 0 20px 20px 0;
  opacity: 0.9;
  box-shadow: 5px 5px 10px #8a7256;
  width: 88vw;
  height: 13vh;
  .logo {
    width: 18vw;
    height: auto;
    object-fit: cover;
  }
  .collapse {
    background-color: #f2e2cede;
    border-radius: 10px;
  }
  .link {
    color: rgb(77, 77, 77);
    margin: 0 2.3vw;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    font-size: 3vh;
    &:hover {
      color: #fff;
    }
  }

  .d-flex {
    margin-left: 2.5vw;
  }

  .diet-menu {
    z-index: 0;
    background-color: #f2e2cede;
    width: 14vw;
    height: 28vh;
    border-radius: 10px;
    padding: 0;
    box-shadow: 0px 0px 10px rgb(70, 69, 69);
    opacity: 1;
    a {
      text-decoration: none;
      display: block;
      color: rgba(59, 59, 59, 0.712);
      font-size: 1.4vw;
      text-shadow: 1px 1px 1px rgb(117, 117, 117);
      border-radius: 10px;
      text-align: center;
      height: 7vh;
      padding-top: 1vh;
    }
    & a:hover {
      background-color: rgba(255, 255, 255, 0.795);
      color: #000;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .link {
    margin-left: 0.2vw;
    font-size: 2vw;
    width: auto;
    white-space: nowrap;
  }
  .d-flex {
    margin-left: 0vw;
    width: 20vw;
    height: 6vh;
    button {
      width: 8vw;
      font-size: 1.2vw;
      text-align: center;
      padding: 0.5vh 0.5vw;
      font-size: 2vh;
    }
  }
  .logo {
    width: 16vw;
  }
  .diet-menu a {
    font-size: 2vw;
  }
}

@media only screen and (max-width: 830px) {
  .link {
    margin-left: 2.5vw;
    font-size: 4vw;
    width: 6vw;
    white-space: nowrap;
  }
  .navbar-nav {
    margin-right: 0.5vw;
  }
  .d-flex {
    width: 70vw;
    margin-left: 1.5vw;
    height: 6vh;
    padding-bottom: 1vh;
    button {
      width: 12vw;
      font-size: 2vh;
      height: 5vh;
      font-size: 1.2vw;
      padding: 0.5vh 0.5vw;
    }
  }
  .logo {
    width: 35vw;
  }
  .diet-menu {
    margin-left: 4vw;
    a {
      font-size: 3.5vw;
    }
  }
}

@media only screen and (max-width: 450px) {
  .d-flex {
    width: 60vw;
    height: 6vh;
    padding-bottom: 1vh;
    button {
      width: 12vw;
      font-size: 0.2vh;
      height: 5vh;
    }
  }
  .logo {
    width: 42vw;
  }
  .link {
    font-size: 6vw;
  }
  .diet-menu a {
    font-size: 5vw;
  }
}
</style>
