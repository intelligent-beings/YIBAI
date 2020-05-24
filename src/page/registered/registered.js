export default {
    data() {
        return {
            url:'http://127.0.0.1:3000/registered',
            // show: false,
            username: '',
            password: '',
            phone:'手机号 ',
            pattern: /\d{6}/       //手机号验证
        }
    },
    methods: {
        //表单提交
        onSubmit(values) {
            console.log('submit', values);
            this.$http.get(this.url,{params:{values}}).then((req,res)=>{
              console.log(res);
              
            }).catch((err)=>{
              console.log(err);
              
            })
          },

          //手机号正则验证
          validator(val) {
            return /1\d{10}/.test(val);
          },
          onFailed(errorInfo) {
            console.log('failed', errorInfo);
          },


    }

}










