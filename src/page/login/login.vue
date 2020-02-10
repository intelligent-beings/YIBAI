<template>
  <div id="login">
    <!-- loog -->
    <div class="title">
      <img
        src="../../common/img/车亿百AAP注册页/车亿百AAP注册页/注册页LOGO@.png"
      />
    </div>
    <!-- 表单提交 -->
    <form class="text" method="post" action="login/mei">
      <div class="shouji">
        <input type="text" placeholder="请输用户名/入手机号" />
      </div>
      <div class="mima">
        <input type="password" placeholder="请输入密码" />
      </div>
      <div class="wodepassword">
        <div>
          <input type="checkbox" />
          <span>记住密码</span>
        </div>
        <router-link to="/phoneOn">
          <span>用短信验证登陆</span>
        </router-link>
      </div>
      <div class="but">
        <button>登陆</button>
        <div class="zhuce">
          <div>d</div>
          
          <van-overlay :show="show" @click="show = false">
            <div class="wrapper" @click.stop>
              <div class="block" />
            </div>
          </van-overlay>
          <router-link to="/retrievePassword">忘记密码</router-link>
        </div>
      </div>
    </form>
    <!-- 第三方登陆 -->
    <thirdLogin></thirdLogin>
  </div>
</template>
<script>
import thirdLogin from "../../common/thirdLogin/thirdLogin.vue";
export default {
  data() {
    return {
       show: false
    };
  },
  methods: {},
  components: {
    thirdLogin
  }
};
</script>
<style lang="less" scoped>
@import url("./less/login.less");

</style>
