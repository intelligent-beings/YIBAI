<template>
 <!DOCTYPE html>  
<html>
<head>  
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>Hello, World</title>  
</head>
<body>  
<div id="container"></div> 
<script type="text/javascript"> 

// 初始化地图，设置中心点坐标和地图级别  
</script>  
</body>  

</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=wBaLGtDmSKTRPl6f1G04WL14nQT3zxSD">

    var map = new BMap.Map("container")
// 创建地图实例  
var point = new BMap.Point(116.404, 39.915)
// 创建点坐标  
map.centerAndZo
om(point, 15)


</script>
<style lang="less" scoped>
html{height:100%}  
body{height:100%;margin:0px;padding:0px}  
#container{height:100%}  
</style>