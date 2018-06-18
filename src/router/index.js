import Vue from 'vue'
import Router from 'vue-router'
import Home from '@page/home/Home'
import Details from '@page/details/Details'
import Carts from '@page/carts/Carts'
import Classify from '@page/classify/Classify'
import Setting from '@page/setting/Setting'
import Set from '@page/setting/Set'
import Address from '@page/setting/Address'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/classify',
            name: 'Classify',
            component: Classify
        },
        {
            path: '/carts',
            name: 'Carts',
            component: Carts
        },
       
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        },
        {
            path: '/details',
            name: 'Details',
            component: Details
        },
        {
            path: '/set',
            name: 'Set',
            component: Set
        },
        {
            path: '/address',
            name: 'Address',
            component: Address
        },

      
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})
