import { Info } from "vant";

// import { log } from "util";
// import Axios from "axios";
export default {
  data() {
    return {
      message: {}, //输入框内容
      mesList: [], //聊天内容
      xx: null,
      url: "http://openapi.tuling123.com/openapi/api/v2"
    };
  },
  created: function() {},

  methods: {
    send() {
      this.message = { inputValue: this.$refs.message.value };
      this.mesList.push(this.message);
      //ref属性不用在data中初始化
      this.$refs.message.value = "";

      //请求机器人回复内容
      this.$http({
        method: "post",
        url: "/api/openapi/api/v2",
        data: {
          apiKey: "723f0e2fba4847299161bc65159d8390",
          // Info:this.message
          
            "reqType":0,
            "perception": {
                "inputText": {
                    "text": "附近的酒店"
                },
                "inputImage": {
                    "url": "imageUrl"
                },
                "selfInfo": {
                    "location": {
                        "city": "北京",
                        "province": "北京",
                        "street": "信息路"
                    }
                }
            },
            "userInfo": {
                "apiKey": "",
                "userId": ""
            }
        
        
        }
      })
        .then(function(res) {
          console.log(res.data.results.values.text);
          (function(data){
            console.log(data);
            
          }())

        })

        .catch(error => {
          console.log(error);
        });
        
    }
  }
};
