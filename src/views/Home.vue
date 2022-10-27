<template>
  <div>
    <header class="home-header wrap" :class="{'active': headerScroll}">
      
      <router-link tag="i" to="./category"><van-icon name="wap-nav" /></router-link>
      <div class="header-search">
        <span class="app-name">Kmall 商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list?form=home">你当走的路甚远！</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manger-o"></van-icon>
      </router-link>
    </header>
    <NavBar />
  </div>
</template>
<script>
import {reactive} from 'vue'
import NavBar from '../components/NavBar.vue';
export default {
  name: 'home',
  components: {
    // swiper,
    NavBar
  },
  setup() {
    const state = reactive({
      headScroll: false // 滚动透明判断
    })
  }
}
</script>
<style lang="less" scoped>
  @import '../common/style/mixin';
  .home-header {
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%, 50px);
    .fj();
    line-height: 50px;
    padding: 0 15px;
    .boxSizing();
    font-size: 15px;
    color: #fff;
    z-index: 999;
    .nbmenu2 {
      color: @primary;
    }
    &.active {
      background: @primary;
      .nbmenu2 {
        color: #fff;
      }
      .login {
        color: #fff;
      }
    }
    .header-search {
      display: flex;
      .wh(74%, 20px);
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: rgba(255, 255, 255, .7);
      border-radius: 20px;
      border: 1px solid red;
      .app-name {
          padding: 0 10px;
          color: @primary;
          font-size: 20px;
          font-weight: bold;
          border-right: 1px solid #666;
      }
      .icon-search {
          padding: 0 10px;
          font-size: 17px;
      }
      .search-title {
          font-size: 12px;
          color: #666;
          line-height: 21px;
      }
    }
  }
</style>