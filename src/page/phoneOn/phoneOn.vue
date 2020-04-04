<template>
  <div id="phoneOn">
    <div class="logo">
      <img src="../../common/img/车亿百AAP注册页/车亿百AAP注册页/注册页LOGO@.png">
    </div>
    <!-- 输入注册信息 -->
    <form autocomplete="Cellular" class="inp"  >
      <div class='xx'>
        <div class="shoujihao">
          <span class="iconfont icon-shouji"></span>
          <input type="text" autocomplete="on" placeholder="请输入手机号">
        </div>
        <div class="yanzheng">
          <span class="iconfont icon-yuechi"></span>
          <input type="text" placeholder="请输入验证码">
          <p class="gain">获取验证码</p>
        </div>
        <div class="password">
          <span class="iconfont icon-ai243"></span>
          <input type="text" placeholder="请输入密码">
        </div>
        <div class="bt">
          <button>登陆</button>
        </div>
      </div>
    </form>
    <!-- 第三方注册 -->
    <div class="thirld"></div>
    <thirdLogin></thirdLogin>
  </div>
</template>
<script src = './phoneOn.js'>
</script>
<style lang="less" scope>
@import url("./phoneOn.less");
</style>