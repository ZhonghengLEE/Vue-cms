//入口文件
  // console.log('OK')
import Vue from 'vue'
//1.1导入路由的包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//按需导入 Mint-ui 组件
  //顶部固定栏
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.config.productionTip = false
//1.3插入抽离出去的路由模块
import router from './router.js'

//按需导入 mui组件
    //tabbar 组件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入App 根组件
import app from './App.vue'

new Vue({
  el:'#app',
  render: c => c(app),
  router //1.4挂载插入的路由对象到vm实例上
})