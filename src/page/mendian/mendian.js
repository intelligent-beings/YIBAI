export default {

    data(){
        return{
            show:false,
            
        }
    },
    methods:{
        showPopup(){
            this.show =true
        },

        //遮罩层拨号
        callOut(Event){

            console.log("callOut",Event);
            
        },
        off(){
            console.log('off');

            
        }

    }

};