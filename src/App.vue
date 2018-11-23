<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="JOGO"></mt-header>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    <!-- 内容路由 -->
		<router-view></router-view>
  </div>
</template>

<script>
</script>


<style lang="less">
.app-container {
  //解决顶部浮动不占位
  padding-top: 40px;
  //顶部固定导航高贵JOGO色
  .mint-header {
    background-color: #2b3e45;
  }
  .mui-bar.mui-bar-tab {
    background-color: #2b3e45;

    .mui-tab-item {
      color: #fff;
    }
    .mui-active {
      color: darkorange;
    }
  }
}
</style>
