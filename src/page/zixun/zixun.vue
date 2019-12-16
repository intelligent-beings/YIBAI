<template>
<div class="zixun">
  <header></header>
  <div class="cont"  v-html=''>
    {{mes}}
  </div>
    <form action="" class="from"  @submit.prevent>
      <textarea  autofocus='off'
        placeholder="请输入聊生信息"
        ref="message"
      >

      </textarea>
      <div>
        <img src="../../common/img/咨询/biaoqing.png" alt="">
      </div>
      <input type="submit" class="but" value="发送"
      @click="dk" 
      />
    </form>
</div>

</form>
</template>
<script src="./zixun.js"></script>
<style lang="less" scoped>
@import url("./less/zixun.less");
</style>
