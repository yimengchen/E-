<template>
  <div class="footernav border-1px">
    <span class="guide_item" :class="{on:$route.path==='/msite'}" @click="goto('/msite')">
    <span class="item_icon">
      <i class="iconfont icon-shouye"></i>
    </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/classify'}" @click="goto('/classify')">
    <span class="item_icon">
      <i class="iconfont icon-sousuo1"></i>
    </span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/shopCart'}" @click="goto('/shopCart')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche"></i>
    </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/profily'}" @click="goto('/profily')">
    <span class="item_icon">
      <i class="iconfont icon-chongwu"></i>
    </span>
      <span>我的E宠</span>
    </span>
  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        //跳转到指定的路由
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app .footernav {
    position: relative;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
  }
  #app .footernav::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  #app .footernav .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
  }
  #app .footernav .guide_item.on {
    color: greenyellow;
  }
  #app .footernav .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  #app .footernav .guide_item span .iconfont {
    font-size: 22px;
  }
</style>
