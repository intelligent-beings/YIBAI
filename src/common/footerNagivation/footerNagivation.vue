<template>
  <div id="footer">
    <router-link to='/hom' class="hom" >
      <div class="iconfont icon-shouye">
      </div>
      <div>首页</div>
    </router-link>
    <router-link  to='/car' class="car">
      <div class="iconfont icon-car">
      </div>
      <div>选车</div>
    </router-link>
    <router-link to="/mendian" class="mendian">
      <div class="iconfont icon-mendian">
      </div>
      <div>门店</div>
    </router-link>
    <router-link to="/zixun" class="zixun">
      <div class="iconfont icon-zixun">
      </div>
      <div>咨询</div>
    </router-link>
    <router-link to="/wode" class="wode">
      <div class="iconfont icon-wode-xuanzhong">
      </div>
      <div>我的</div>
    </router-link>
  </div>
</template>
<script>
import carVue from '../../page/car/car.vue';
export default {
  data() {
    return {
      mm:false
    };
  },
  methods: {
   
  }
};
</script>
<style lang="less" scope>
@import url('./less/foot.less');

</style>
