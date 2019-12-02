<template>
  <div id="zixun">
    <header class="tou">
      <img src="../../common/img/咨询/icon_left - 副本.png" />
      <span>在线咨询</span>
      <img src="../../common/img/咨询/ling.png" />
    </header>
    <div class="cont" >{{ mes}}{{message}}</div>
    <div class="dialogude">
      <div >
          <!-- @input @keyup.enter  document.getbyId().value 都可以拿到inpu 值 -->
          <input
            placeholder="请输入要咨询的信息"
            autofocus="autofocus"
            @keyup.enter= 'search'
          />

          <!-- <img src="../../common/img/咨询/biaoqing.png" /> -->
        <button class="fa" type = 'submit' @click="send">发送</button>
      </div>
    </div>
  </div>
</template>
<script src= './zixun.js'>
  
</script>
<style lang="less" scoped>
@import url("./less/zixun.less");
</style>
