<template>
<div class="zixun">
  <header></header>
  <div class="cont">
    {{mes}}
  </div>
    <form action="" class="from">
      <textarea name='' @input='search'>

      </textarea>
      <div>
        <img src="../../common/img/咨询/biaoqing.png" alt="">
      </div>
      <input type="submit" class="but" value="发送" 
        @click="send"
      />
    </form>
</div>

</form>
</template>
<script src="./zixun.js"></script>
<style lang="less" scoped>
@import url("./less/zixun.less");
</style>
