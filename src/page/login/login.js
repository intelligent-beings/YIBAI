import thirdLogin from "../../common/thirdLogin/thirdLogin.vue";

export default {

  data() {
    return {
      show: false,
      url:'http://127.0.0.1:9000/login',
      username:"1ds",
      pasw:"2sad"
    };

  },
  methods: {
    onSubmit() {


    },
    Sign_up_button() {
      let url_get = this.url
      event.preventDefault();
      this.$http.get(url_get,{params:{name:this.username,pas:this.pasw}})
      .then(function (res) {
        console.log(res.data,1);
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