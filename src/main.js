//入口文件
// console.log('OK')
import Vue from 'vue'

//按需导入 Mint-ui 组件
//顶部固定栏
import { Header } from 'mint-ui'
Vue.component(Header.name,Header)

//导入App 根组件
import app from './app.vue'

var vm = new Vue({
  el:'#app',
  render: c => c(app)
})