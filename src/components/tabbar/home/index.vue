<template>
<div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
export default {
    data(){
        return{
            scerlling:[]
        }
    },
    created(){
        this.getScrolling()
    },
    methods:{
        getScrolling(){
            //获取轮播图数据的方法
            this.$http.get("api/getlunbo").then(result =>{
                // console.log(result.body.status);
                if(result.body.status===0){
                    this.scerlling = result.body.message
                }
            })
        }
    }
}
</script>

<style lang="less">
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
        background-color: skyblue;
    }
    &:nth-child(3) {
        background-color: deeppink;
    }
  }
}
</style>

