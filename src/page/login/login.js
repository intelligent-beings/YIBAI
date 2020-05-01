import thirdLogin from "../../common/thirdLogin/thirdLogin.vue";

export default {

  data() {
    return {
      show: false,
      url:'http://127.0.0.1:3000/login',
      username:'',
      pasw:""
    };

  },
  methods: {
    onSubmit() {


    },
    Sign_up_button() {
      event.preventDefault();
      this.username=this.$refs.name.value
      let url_get = this.url
      this.$http.post(url_get,{params:{username:this.username,pasw:this.pasw}})
      .then(function (res) {
        console.log(res.data,'前台');
      })
        .catch(function (error) {
          console.log(error, "登陆error");
        });
      this.show = false


    }
  },
  components: {
    thirdLogin
  }
};