export default {
  data() {
    return {
      url:'http://127.0.0.1:3000',
      // show: false,
      username: '',
      password: '',
      phone: '手机号 ',
      pattern: /\d{6}/,       //手机号验证
      
    }
  },
  methods: {
    //表单提交
    onSubmit(values) {
      // this.$http.get(this.url+"/registered",{params:{values}}).then((res)=>{
        
        
      this.$http({ 
        url:this.url+"/registered",
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;utf-8',
        },  
        data:{
          username:values.username,
          password:values.password,
          phone:values.phone
        }
          
      })
      .then((res) => {
       
          alert(res.data)
      })
      .catch((err) => {
        alert(err);
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










