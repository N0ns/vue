import Vue from 'vue'
import App from './App.vue'
import './lib/css/common.css'
import $ from 'jquery'
window.$ = $
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isShowMenu:false,
    edit:false,
    isLogin:false,
    searchText:'',
    type:'',
    goods:{},
    isAdd:false,
    arrow:0,
    total:0,
    allCheck:false,
    isBuy:false,
    isDel:false,
    isEmpty:true
  },
  mutations: {
    
  },
  actions:{
    
  },
  getters:{
    
  }
  //actions ---(comit)--->mutation --->state
})

import index from './containers/index.vue'
import list from './containers/list.vue'
import xsearch from './containers/search.vue'
import xcart from './containers/cart.vue'
import xresign from './containers/resign.vue'
import xlogin from './containers/login.vue'
import xacount from './containers/acount.vue'
import xdetails from './containers/details.vue'
const routes = [
    { path: '/', component: index },
  { path: '/list', component: list },
  { path: '/search', component: xsearch },
  { path: '/cart', component: xcart },
  { path: '/resign', component: xresign },
  { path: '/login', component: xlogin },
  {path: '/acount',component:xacount},
  {path: '/details',component:xdetails}

    // { path: '/banner', component: xbanner }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({

    store,
    router,
  render: h => h(App)
}).$mount('#app')
