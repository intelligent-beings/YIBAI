import thirdLogin from "../../common/thirdLogin/thirdLogin.vue";

export default {
    
    data() {
      return {
        show:false,
        // url:'user'
      };
    },
    methods: {
        Sign_up_button() {
        event.preventDefault();
        console.log(22);
        
         this.$http.get('127.0.0.1:9900',
         {
            name:"",
            pasw:"",
        
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error,"注册error");
          });
        this.show = false
  
        
      }
    },
    components: {
      thirdLogin
    }
  };