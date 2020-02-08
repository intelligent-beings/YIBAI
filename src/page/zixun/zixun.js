import { Info } from "vant";

// import { log } from "util";
// import Axios from "axios";
export default {
  data() {
    return {
      message: {}, //输入框内容
      mesList: [], //聊天内容
      xx: '',
      url: "http://openapi.tuling123.com/openapi/api/v2"
    };
  },
  created: function() {},

  methods: {
    send() {
      this.message =  this.$refs.message.value ;
      this.mesList.push(this.message);
      //ref属性不用在data中初始化
      this.$refs.message.value = "";

      //请求机器人回复内容
      this.$http({
        method: "post",
        url: "/api/openapi/api/v2",
        data: {
          reqType: 0,
          perception: {
            inputText: {
              text: "附近的酒店"
            },
            inputImage: {
              url: "imageUrl"
            },
            selfInfo: {
              location: {
                city: "北京",
                province: "北京",
                street: "信息路"
              }
            }
          },
          userInfo: {
            // apiKey: "266f21b9812943de8f05718c246e992a",
            // apiKey:"c7829955363941d981dba31b8b918dd9",
            apiKey:"723f0e2fba4847299161bc65159d8390",
            apiKey:"0c9fc76f21df451da9e32e9499cce00a",
            apiKey:"368179ff26864a3481c7b2bf71a3168a",
            
            userId: "1000"
          }
        },
        
      })
      .then((res)=> {
        
             res.data.results.forEach(element => {
             console.log();
              this.mesList.push(element.values.text)
             
           })

          
      })

      .catch(error => {
        console.log(error);
      });
    }
  }
};
