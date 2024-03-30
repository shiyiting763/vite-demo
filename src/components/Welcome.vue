<template>
<div class="welcome">
  <el-container >
    <el-main>
      <div class="msg-box">
        <el-col class="msg">
          <el-row class="title">
            <h2>Mate蜜糖交友网站</h2>
          </el-row>
          <el-row class="msg-row">
            <span>
              校园轻社交网站，快来寻找你的Mate吧！
            </span>
          </el-row>
          <el-row class="button-row">
            <el-button style="background: #ff5371;color: white;border-color: white" @click="gotoLogin">去登录</el-button>
            <el-button @click="gotoRegister">去注册</el-button>
          </el-row>
        </el-col>
      </div>
    </el-main>
  </el-container>
</div>
</template>

<script>
export default {
  name: "Welcome",
  methods:{
    gotoRegister(){
      this.$router.push("/register")
    },
    gotoLogin(){
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>
.welcome{
  background: url("../assets/R-C.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
.welcome .msg-box{
  text-align: center;
  margin-top: 150px;
  margin-left: 160px;
  height: 300px;
  width: 40%;
}
.welcome .msg{
  background-color: rgba(255, 255, 255, 0.88);
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .12), 0 5px 10px rgba(0, 0, 0, .04);
  border-radius: 100px;
}

.welcome .msg-row{
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
}

.welcome .title{
  font-size: xx-large;
}

.welcome .button-row{
  margin-top: 40px;
  margin-bottom: 20px;
}

.welcome .button-row button{
  width: 200px;
  height: 50px;
  margin: 10px 20px;
}
</style>