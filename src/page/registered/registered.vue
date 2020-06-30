<template>
  <div id="registered">
    <van-form @submit="onSubmit" @failed="onFailed" enctype="multipart/form-data">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phone"
        type="number"
        name="phone"
        label="手机号"
       placeholder='手机号'
        :rules="[{ pattern, message: '请输入正确内容' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script src="./registered.js"></script>
<style lang="less" scoped>
@import url("./registered.less");
</style>
