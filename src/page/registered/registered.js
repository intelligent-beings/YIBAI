export default {
    data() {
        return {
            url: 'http://127.0.0.1:9000/registered',
            show: false,
            text: '',   //用户名
            password: '',   //密码
            tel: '',        //手机号
            // digit: '',      //   
            number: '',
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            this.$http.get(this.url, { params: { username: this.text, password: this.password } })
                .then((res)=>{      //此处函数里参数只能是一个res没有req否则报错
                     
                    console.log(res.data);
                    

                })
                .catch((error)=>{
                    console.log(error,'无注册数据');
                    
                })

        }

    }
    





}


