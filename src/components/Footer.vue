<template>
  <div class="main-footer">
        <div class="container">
            <div class="footer-item">
                <h4>關於減脂</h4>
                <nav>
                    <a href="#"><i class="bi bi-bicycle"></i> 食譜分享</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 減脂運動</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 減脂飲食</a>
                </nav>
            </div>
            <div class="footer-item">
                <h4>飲食文章列表</h4>
                <nav>
                    <a href="#"><i class="bi bi-bicycle"></i> 低醣飲食</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 生酮飲食</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 碳循環飲食</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 間歇性斷食</a>
                </nav>
            </div>
            <div class="footer-item">
                <h4>服務項目</h4>
                <nav>
                    <a href="#"><i class="bi bi-bicycle"></i> 飲食諮詢</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 常見問題</a>
                    <a href="#"><i class="bi bi-bicycle"></i> 聯絡我們</a>
                    <a href="https://john0531.github.io/Vuecli-Mall-System/dist/#/login" class="text-success"><i class="bi bi-bicycle"></i> 賣家商品後台</a>
                </nav>
            </div>
            <div class="footer-item footer-subs">
                <h4>訂閱電子報</h4>
                <form action="">
                    <input type="text">
                    <!-- 輸入區 -->
                    <input type="submit" value="訂閱">
                    <!-- 提交按鈕 -->
                </form>
                <!-- 表單 -->
            </div>
        </div>
        <div class="copyright">
            COPYRIGHT &copy; 2021 FAT-REDUCING DIET GUIDE
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-footer {
    padding: 50px 0 0;
    /* 上 左右 下 */
    background-color: #a2af3c;
    .container {
        display: flex;
        width: 100%;
        margin: auto;
    }
}

.footer-item {
    width: 0;
    flex-grow: 1;
    //* 將flex區塊版面佔滿 */
    margin-right: 20px;
    h4 {
        font-size: 24px;
        color: #fff;
        border-bottom: 1px dotted #fff;
        margin-bottom: 0.5em;
        padding-bottom: 0.5em;
    }
    nav {
        display: flex;
        flex-direction: column;
        a {
            color: #fff;
            line-height: 1.4;
            text-decoration: none;
            padding: 5px 0;
            &:hover{
                color: #fa0;
            }
        }
    }
}

.footer-subs {
    display: flex;
    flex-direction: column;
    form {
        display: flex;
        width: 100%;
        margin: auto 0;
    }
}

.footer-subs input[type="text"],
.footer-subs input[type="submit"] {
    border: none;
    padding: 5px 10px;
}

.footer-subs input[type="text"] {
    width: 0;
    flex-grow: 1;
}

.footer-subs input[type="submit"] {
    color: #d6ffbb;
    background-color: #66720e;
}

.copyright {
    width: 100%;
    text-align: center;
    margin: 50px 0 0;
    padding: 10px 0;
    background-color: #66720e;
    color: #d6ffbb;
}
</style>
