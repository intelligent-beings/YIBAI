<template>
  <div id="registered">
      <form action="" method="get">

    <van-field v-model="text" label="文本" />
    <van-field v-model="password" type="password" label="密码" />
    <van-field v-model="tel" type="tel" label="手机号" />
    <van-button type="primary" block>注册</van-button>

    <!-- <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
         
        </div>
      </div>
    </van-overlay>
     -->
    </form>
  </div>
</template>
<script src="./registered.js"></script>
<style lang="less" scoped>
@import url("./registered.less");
</style>
