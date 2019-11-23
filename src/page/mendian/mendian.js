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
       
    }

};