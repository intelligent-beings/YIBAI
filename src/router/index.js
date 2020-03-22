import Vue from 'vue';
import VueRouter from 'vue-router'
import hom from '../page/hom/hom.vue'
import car from '../page/car/car.vue'
import mendian from '../page/mendian/mendian.vue'
import wode from '../page/wode/wode.vue'
import zixun from '../page/zixun/zixun.vue'
import login from '../page/login/login.vue'
import phoneOn from '../page/phoneOn/phoneOn.vue'
import retrievePassword from '../page/login/retrievePassword/retrievePassword.vue'
import map from '../common/map/map.vue';
import registered from '../page/registered/registered.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',redirect:'/hom'},
        {path:'/hom',component:hom},
        {path:'/zixun',component:zixun},
        {path:'/mendian',component:mendian},
        {path:'/map',component:map},
        {path:'/car',component:car},
        {path:'/wode',component:wode},
        {path:'/phoneOn',component:phoneOn},
       
        {path:'/login',component:login,children:[
            // {path:'/mei',component:mei}
        ]},
        {path:'/registered',component:registered},
        {path:'/retrievePassword',component:retrievePassword},
    
    ]
}) 