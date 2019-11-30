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
        //   this.drawmap()
        this.map();
      },
    // methods:{
    //     drawmap: function () {
	// 	// 百度地图API功能
	// 	console.log(this.$refs.allmap)
    //     // let amap = this.$refs.allmap
    //     const x = 116.404;
    //     const y = 39.915;
	// 	var map = new BMap.Map("container");
    //     var point = new BMap.Point(x,y);
    //     map.centerAndZoom(point, 11); //传入位置和地图级别
    //     map.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_LARGE }));
 
    // },
     
methods: {
    map() {
      const map = new BMap.Map('container')
      // const pointArray = []
      map.centerAndZoom(new BMap.Point(113.23, 23.16), 7)
      map.enableScrollWheelZoom()
      const oneDev = [
        { 'id': 1, 'area': '深圳市' },
        { 'id': 2, 'area': '中山市' },
        { 'id': 3, 'area': '惠阳区' },
        { 'id': 4, 'area': '东莞市' }
      ]
      const colorArr = ['#ff541c', '#1cecff', '#3cff1c', '#ff1c47', '#000']
      const that = this
      boundary()
      function boundary() {
        for (const j in oneDev) {
          (function(index) {
            var bdary = new BMap.Boundary()
            bdary.get(oneDev[index].area, function(rs) {
              // 获取行政区域
              // map.clearOverlays()       // 清除地图覆盖物
              const count = rs.boundaries.length // 行政区域的点有多少个
              for (let i = 0; i < count; i++) {
                const color = colorArr[Math.floor(Math.random() * 3 + 0)]
                const ply = new BMap.Polygon(rs.boundaries[i], {
                  fillColor: color,
                  strokeWeight: 2,
                  strokeColor: '#000'
                }) // 建立多边形覆盖物
                map.addOverlay(ply) // 添加覆盖物
                // map.setViewport(pointArray)   // 调整视野
                ply.addEventListener('click', function() {
                  console.log(oneDev[index].area)
                })
              }
            })
          })(j)
        }
      }
    }
  }
}

   
</script>
<style>
#container{
    width:100%;
    height:100%;
    padding-bottom: 58px;
}


</style>