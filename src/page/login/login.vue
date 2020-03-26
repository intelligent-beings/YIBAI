<template>
  <div id="login">
    <!-- loog -->
    <div class="title">
      <img
        src="../../common/img/车亿百AAP注册页/车亿百AAP注册页/注册页LOGO@.png"
      />
    </div>
    <!-- 表单提交 -->
    <form class="text" action="" method="get">
      <div class="shouji">
        <input type="text" name="name"  placeholder="请输用户名/入手机号" />
      </div>
      <div class="mima">
        <input type="password" name ='pws'  placeholder="请输入密码" />
      </div>
      <div class="wodepassword">
        <div>
          <input id="ps" type="checkbox" name="checkbox" />
          <label for="ps">记住密码</label>
        </div>
        <router-link to="/phoneOn">
          <span>用短信验证登陆</span>
        </router-link>
      </div>
      <div class="but">
        <input class="but_login" type="submit" value='登陆' 
          @click="Sign_up_button" >
        <div class="zhuce">
          <router-link to='/registered'>注册</router-link>
          <router-link to="/retrievePassword">忘记密码</router-link>
        </div>
      </div>
    </form>
    

    <!-- 第三方登陆 -->
    <thirdLogin></thirdLogin>
  </div>
</template>
<script src="./login.js"></script>
<style lang="less" scoped>
@import url("./less/login.less");
</style>
