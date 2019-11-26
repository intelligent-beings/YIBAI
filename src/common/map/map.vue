<template>
<div id="container" ref="allmap" >

 </div>
</template>
<script>
export default {
    data(){
        return{
           
            
        }
    },
    //挂载实例后调用地图
    mounted:function(){
          this.drawmap()
      },
    methods:{
        drawmap: function () {
		// 百度地图API功能
		console.log(this.$refs.allmap)
        // let amap = this.$refs.allmap
        const x = null;
        const y = null;
		var map = new BMap.Map("container");
		var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 11); //传入位置和地图级别
		function theLocation() {
			var city = document.getElementById("#container").value;
			if (city != "") {
				map.centerAndZoom(city, 11); // 用城市名设置地图中心点
			}
        }
    },
    

    }
    
}
</script>
<style>
#container{
    width:100%;
    height:100%;
}

</style>