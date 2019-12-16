// import { log } from "util";
import Axios from "axios";
export default {
  data() {
    return {
      // message: {},
      mes:[],
      xx:null,
      d:"</br>"
    };
  },
  created: function() {
    
  
  },
  
  methods: {
   
    dk(){
      const br = '<br></br>'
      // this.mes += this.xx
      this.mes += this.$refs.message.value 
      //ref属性不用在data中初始化
      this.$refs.message.value=''
     
    }
  }
}
