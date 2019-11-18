// import { 3.png} from './../../common/img'

export default {
  data() {
    return {
       
      show: false, //头部地址栏控件
      daikon: [
        { text: "贷款购车", src: require("./../../common/img/8 (1).png") },
        { text: "线下门店", src: require("./../../common/img/8 (2).png") },
        { text: "优质车源", src: require("./../../common/img/8 (3).png") },
        { text: "积分商城", src: require("./../../common/img/8 (4).png") },
      ],
      to: [
        { jia: "10万以下", fangshi: "0元首付" },
        { jia: "10-15万", fangshi: "月供2千" },
        { jia: "15-20万", fangshi: "15-20万" },
        { jia: "20万以上", fangshi: "三厢轿车" }
      ],
      three: [
        { img: require("../../common/img/car_login (9).png"), text: "长城" },
        { img: require("../../common/img/car_login (1).png"), text: "布加迪" },
        { img: require("../../common/img/car_login (3).png"), text: "基尼" },
        { img: require("../../common/img/car_login (5).png"), text: "辉腾" },
        { img: require("../../common/img/car_login (7).png"), text: "qq" },
        { img: require("../../common/img/car_login (9).png"), text: "捷豹" },
        { img: require("../../common/img/car_login (11).png"), text: "本田" },
        { img: require("../../common/img/car_login (13).png"), text: "丰田" },
        { img: require("../../common/img/car_login (15).png"), text: "大众" },
        { img: require("../../common/img/car_login (17).png"), text: "奔奔" }
      ],
      swipeimg: [
        "../../common/lunbo (1).png",
        "../../common/lbtu (4).png",
        "../../common/lbtu (3).png"
      ],
      //城市地址列表
      areaList: {},

      mm: "",
      indexs: 0,
      downtown: "北京",
      district: " "
    };
  },
  //钩子函数
  created: function() {
    this.fast_Rquest();
    this.requestAddss(); //初始化城市地址数据
  },
  methods: {
    
    //获得焦点时
    focus(){
      console.log("onFocus");
      
    },
    // 搜索
    onSearch(){
        alert("search")
    },
    search(e){
      if(clickValidate("form")){
        return true;
      };
      e.preventDefault();
      
    },
    fast_Rquest() {
      //  var url ='https://www.easy-mock.com/mock/5cb55b5a343b9d4c705ac229/caryibai/homimg';
      var url = "127.0.0.1:9900"
      this.$http
        .get(url)
        
        .then(res => {
          this.daikon = res.data;
          console.log("------------");
          console.log(this.daikon);
        })
        .catch(function(error) {
          console.log("内容图片错误", error);
        });
    },
    //城市选择按钮
    showPopup() {
      this.show = !this.show;
    },
    //请求地址数据
    requestAddss() {
      this.$http
        .get(
          "https://www.easy-mock.com/mock/5cb55b5a343b9d4c705ac229/caryibai/CityName"
        )
        .then(response => {
          this.areaList = response.data;
        })
        .catch(function(error) {
          console.log("城市地址错误", error);
        });
    },
    //地址确定按钮返回地址数组对像
    confirm(array) {
      this.downtown = array[1].name;
      this.district = array[2].name;
      console.log(array[2].name);
      this.show = false;
    },
    //取消按钮
    cancel() {
      this.show = false;
    }
  }
};
