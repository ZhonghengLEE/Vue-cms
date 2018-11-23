# 项目基础文件已初始化


##有灵魂的程序员都是用拳头捶ENTER键的


###从哪开始捶呢???


####从首页开始捶好了

[主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

##制作首页的App组件
1.Header区域,使用的 Mint-ui 中的Header组件
2.完成底部Tabbar区域,使用的是 MUI 中的Tabbar.html
+ 购物车的图标为拓展文字图标F
+ 先把拓展图标的css样式文件拷贝到项目中
+ 拷贝字体库中的拓展ttf文件到项目中
+ 为购物车小图标添加如下样式'mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个 router-view 来展示和切换路由匹配到的组件

##改造tabbar 为router-link

##设置当前路由高亮

##点击tabbar 中的路由链接,展示对应的路由组件

##首页导入轮播图 使用mint-ui 的组件

##加载首页轮播图数据
1.使用vue-resource获取数据