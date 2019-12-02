<template>
  <div id="zixun">
    <header class="tou">
      <img src="../../common/img/咨询/icon_left - 副本.png">
      <span>在线咨询</span>
      <img src="../../common/img/咨询/ling.png">
    </header>
    <div class="cont">
      {{message}}
    </div>
    <div class="dialogude">
      <div>
        <input placeholder="请输入要咨询的信息" autofocus='autofocus' @input="search($event)">
        <img src="../../common/img/咨询/biaoqing.png">
      </div>
      <div class="fa">发送</div>
    </div>
  </div>
</template>
<script>
import { log } from 'util'
export default {
  data(){
    return{
      message:'',
      mes:''
    }
  },
  methods:{
    search:function(event){
      console.log(event.currentTarget.value);
        

    }
  }
};
</script>
<style lang="less" scoped>
@import url("./less/zixun.less");
</style>

