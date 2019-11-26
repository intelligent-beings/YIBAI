import Vue from 'vue';
import VueRouter from 'vue-router'
import hom from '../page/hom/hom.vue'
import car from '../page/car/car.vue'
import mendian from '../page/mendian/mendian.vue'
import wode from '../page/wode/wode.vue'
import zixun from '../page/zixun/zixun.vue'
import login from '../page/login/login.vue'
import register from '../page/register/register.vue'
import retrievePassword from '../page/login/retrievePassword/retrievePassword.vue'
import Map from '../common/map/map.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',redirect:'/hom'},
        {path:'/hom',component:hom},
        {path:'/zixun',component:zixun},
        {path:'/mendian',component:mendian},
        {path:'/map',component:Map},
        {path:'/car',component:car},
        {path:'/wode',component:wode},
        {path:'/register',component:register},
       
        {
            path:'/login',
            component:login,
            name:'login',
            children:[
                {path:'retrievePassword',component: retrievePassword}
            ]
        },
    ]
}) 