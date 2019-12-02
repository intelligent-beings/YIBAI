import { log } from "util";
export default {
  data() {
    return {
      message: "",
      mes: "",
      xx: "<br/>"
    };
  },
  methods: {
    search: function(event) {
      this.message += event.currentTarget.value
      console.log(this.message);
      
    },
    send: function() {
   
      
    }
  }
};
