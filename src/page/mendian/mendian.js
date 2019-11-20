export default {

    data(){
        return{
            show:false,
            message:1234
            
        }
    },
    methods:{
        showPopup(){
            this.show =true
        },

        //遮罩层拨号
        callOut(Event){

            console.log("callOut",Event,this.message);

            
        },
        //遮罩层触发事件可以清除罩层换页面
        // off(){
        //     console.log('off');
        //      console.log(this.message);
            
            
        // }

    }

};