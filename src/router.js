import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入对应的路由组件
import Home from './components/tabbar/home/index.vue'
import Member from './components/tabbar/member/index.vue'
import Shopcar from './components/tabbar/shopcar/index.vue'
import Search from './components/tabbar/search/index.vue'



// 3. 暴露创建的路由对象
export default new VueRouter({
  routes: [//配置路由规则
    {path: '/' , redirect:'/home'},
    {path:'/home' , component:Home},
    {path:'/member' , component:Member},
    {path:'/shopcar' , component:Shopcar},
    {path:'/search' , component:Search}
  ],
  linkActiveClass:'mui-active'//为当前的路由加上类样式,当前默认的类样式是router-link-active
})
