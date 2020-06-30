import Vue from 'vue';
import APP from './APP.vue';
import rout from './router/index.js'
import axios from 'axios';
import qs from 'qs'
import store from './store/index.js'
// vant-ui
import {
    DropdownMenu, DropdownItem,
    Checkbox, CheckboxGroup,
    IndexBar, IndexAnchor,
    Cell,
    CellGroup,
    Popup,
    Area,
    Search,
    Button,
    Overlay,
    Field,
    Form,
} from 'vant';
import 'vant/lib/index.css';
Vue.use(DropdownMenu).use(DropdownItem)
    .use(Checkbox).use(CheckboxGroup)
    .use(IndexBar).use(IndexAnchor).use(Cell)
    .use(CellGroup).use( Popup).use(Area).use(Search)
    .use(Button).use(Overlay).use(Field).use(Form)

Vue.prototype.$http = axios;            //axios挂在vue原型上
Vue.prototype.$qs =qs;
new Vue({
    el: '#app',

    data: {},
    components: {
        APP


    },

    render: h => h(APP),
    template: '<APP></APP>',
    router: rout,
    store: store
})



