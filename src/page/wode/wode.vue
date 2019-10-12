<template>
  <div id="wode">
    <!-- 头部 -->
    <header class="title">
      <div class="title_none">
        <div class="none_left">
          <router-link to="/login" class="iconfont icon-wode-xuanzhong"></router-link>
          <router-link to='/login' class="login">
            <div>点击登陆</div>
            <span>二手车价买新车</span>
          </router-link>
        </div>
        <div class="none_right"><span>切换模式</span></div>
      </div>
      <div class="title_tow">
        <ul>
          <li>
              <div class="iconfont icon-youhuiquan"></div>
              <div>资质审查</div>
          </li>
          <li>
              <div class="iconfont icon-naoling"></div>
              <div>我的预约</div>
          </li>
          <li>
              <div class="iconfont icon-youhuiquan1"></div>
              <div>优惠券</div>
          </li>
          <li>
              <div class="iconfont icon-fenxiangyouli"></div>
              <div>邀请有礼</div>
          </li>
        </ul>
      </div>
    </header>
    <!-- 最近咨询 -->
    <div class='zixun'> 
        <div class="zixun_top">
            <span>最近咨询</span>
            <span>更多咨询</span>
        </div>
        <div class="zixun_bott">
            <img src="../../common/img/car (1).png">
            <div>
                <span>本田丰右</span>
                <span>2018款dkjfa舒服型</span>
                <span>咨询门店:深圳大浪</span>
                <span>已为你按排顾问</span>
            </div>
        </div>
    </div>
    <!-- 列表 -->
    <div class='shezhi'>
        <ul>
            <li>
              <span class="iconfont icon-youhuiquan1"></span>
              <span>我的订单</span>
            </li>
            <li>
              <span class="iconfont icon-wodeshoucangyong"></span>
              <span>我的收藏</span>
            </li>
            <li>
              <span class="iconfont icon-pre_icon_changjianwenti"></span>
              <span>常见问题</span>
            </li>
            <li>
              <span class="iconfont icon-qiaquan"></span>
              <span>卡券包</span>
            </li>
            <li>
              <span class="iconfont icon-morentouxinag-nv"></span>
              <span>微客服</span>
            </li>
            <li>
              <span class="iconfont icon-shezhi1"></span>
              <span>设置</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import url("./less/wode.less");
</style>
