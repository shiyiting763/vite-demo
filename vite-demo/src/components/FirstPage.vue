<template>
    <nav class = "bar">
        <div class="bar-inner">
            <img src="../assets/logo.jpg" class="logo"/>

            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/document/%E6%A6%82%E8%BF%B0/%E7%AE%80%E4%BB%8B">
                文档
            </a>
            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/api/%E6%9C%8D%E5%8A%A1%E7%AB%AFAPI">
                API
            </a>
            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/agreement/%E3%80%8A%E9%97%AE%E5%8D%B7Meta%E5%8D%8F%E8%AE%AE%E3%80%8B">
                协议
            </a>
            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/design/%E3%80%8A%E8%AE%BE%E8%AE%A1%E8%A7%84%E8%8C%83%E3%80%8B">
                设计
            </a>
            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/article/%E3%80%8A%E6%BB%B4%E6%BB%B4%E5%BC%80%E6%BA%90%E9%97%AE%E5%8D%B7%E7%B3%BB%E7%BB%9FXIAOJU-SURVEY%E3%80%8B">
                文章
            </a>
            <a class="bar-button"
                href="https://xiaojusurvey.didi.cn/docs/next/share/%E6%8C%87%E5%8D%97">
                参与项目贡献
            </a>
        </div>
    </nav>
    <div class="welcome">
        <h1 class="title">欢迎来到XIAOJUSERVEY</h1>
        <h5>加入我们，让调研更轻松</h5>
        <div class="next">
            <button class = "next-button" @click="gotoLogin">去登录</button>
            <button class = "next-button" @click="gotoRegister">去注册</button>
        </div>
    </div>
    <div></div>
</template>

<script setup>
</script>


<style scoped>
.bar {
    height: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c8c8c8;
}

.bar-inner {
    display: flex;
    align-items: center;
}

.bar-inner .logo {
    width: 90px;
}

.bar-button {
    color: #666666;
    padding: 4px 10px;
}
.welcome {
    background: url("../assets/R-C.jpg") no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: absolute;
    text-align: center;
}
.title {
    text-align: center;
    color:gray;
}
.welcome h5 {
    text-align: center;
    color: gray;
}
.next {
    text-align: center;
}
.next-button {
    background: #ff5371;
    color: white;
    border-color: white;
}
</style>