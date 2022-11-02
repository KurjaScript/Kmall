<template>
  <div>
    <header class="home-header wrap" :class="{'active': headScroll}">
      <router-link tag="i" to="./category"><van-icon name="wap-nav" /></router-link>
      <div class="header-search">
        <span class="app-name">Kmall 商城</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./product-list?form=home">你当走的路甚远！</router-link>
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="user-circle-o" size="25px" />
      </router-link>
    </header>
    <NavBar />
    <swiper :list ="swiperList"></swiper>
    <CategoryList></CategoryList>
    <Commodity v-if="newGoodses && !loading">
      <template v-slot:header>新品上线</template>
      <template v-slot:skeleton>
        <GoodBox :loading="loading" :goods="newGoodses"></GoodBox>
      </template>
    </Commodity>
    <Commodity v-if="hotGoodses && !loading">
      <template v-slot:header>热门商品</template>
      <template v-slot:skeleton>
        <GoodBox :loading="loading" :goods="hotGoodses"></GoodBox>
      </template>
    </Commodity>
    <Commodity v-if="recommendGoodses && !loading">
      <template v-slot:header>最新推荐</template>
      <template v-slot:skeleton>
        <GoodBox :loading="loading" :goods="recommendGoodses" :showBottom="true"></GoodBox>
      </template>
    </Commodity>
  </div>
</template>
<script>
import {reactive, onMounted, toRefs, nextTick} from 'vue'
import { Store } from 'vuex'
import { Toast } from 'vant'
import { getHome } from '/src/service/home.js'
import { getLocal} from '../common/js/utils'
import NavBar from '../components/NavBar.vue'
import Swiper from '../components/Swiper.vue'
import CategoryList from '../components/CategoryList.vue'
import Commodity from '../common/Commodity.vue'
import GoodBox from '../common/GoodBox.vue'
export default {
  name: 'home',
  components: {
    NavBar,
    Swiper,
    CategoryList,
    Commodity,
    GoodBox
  },
  setup() {
    const state = reactive({
      isLogin: true,
      swiperList: [],
      headScroll: false, // 滚动透明判断
      newGoodses: [], // 新品上线
      hotGoodses: [], // 热卖商品
      recommendGoodses: [], // 最新推荐
      loading: true
    })
    onMounted(async () => {
      const token = getLocal('token')
      if (token) {
        state.isLogin = true
        // 获取购物车数据
        Store.dispatch('updateCart')
      }
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      const { data } = await getHome()
      state.swiperList = data.carousels
      state.newGoodses = data.newGoodses
      state.hotGoodses = data.hotGoodses
      state.recommendGoodses = data.recommendGoodses
      state.loading = false
    })

    nextTick(() => {
      window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 100 ? state.headScroll = true : state.headScroll = false
      })
    })
    return {
      ...toRefs(state)
    }
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
    .login {
      color: @primary;
      line-height: 52px;
      .van-icon-user-circle-o {
        font-size: 20px;
        vertical-align: -3px;
      }
    }
  }
</style>