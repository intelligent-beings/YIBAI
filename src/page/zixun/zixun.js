import { log } from "util";
export default {
  data() {
    return {
      message: {},
      mes:[],
      
    };
  },
  created: function() {
    var lett = this;
    //初始化实例的时候给DOM绑定键盘事件
    document.onkeydown = function(event) {
      if (event.keyCode == 13 && event.ctrlKey) {
        lett.send(event);
      }
    };
  },
  methods: {
    //监听input事件
    search: function(event) {
      this.message = event.target.value
      console.log(this.message)
      
    },
    
    send: function(e) {
      
      if (this.message == "") {
        alert("请输入内容");
      } else {
        
        this.mes.push(this.message)
        e.target.value=''
        
      }
    }
  }
};
