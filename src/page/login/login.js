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
        // event.preventDefault();
        console.log(22);
        
         this.$http.get('127.0.0.1:9900/login',
         {
            name:"",
            pasw:"",
        
        }).then(function (res) {
            console.log(res );
          })
          .catch(function (error) {
            console.log(error,"登陆error");
          });
        this.show = false
  
        
      }
    },
    components: {
      thirdLogin
    }
  };