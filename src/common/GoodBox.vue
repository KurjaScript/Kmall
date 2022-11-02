<template>
  <van-skeleton title :row="3" :loading="loading">
    <div class="good-box" :class="{active: showBottom}">
      <div class="good-item" v-for="item in goods" :key="item.goodsId" @click="goToDetail(item)">
        <img :src="$filters.prefix(item.goodsCoverImg)" alt="">
        <div class="good-desc">
          <div class="title">{{item.goodName}}</div>
          <div class="price">¥ {{item.sellingPrice}}</div>
        </div>
      </div>
    </div> 
  </van-skeleton>  
</template>
<script>
import { ref } from 'vue'
export default {
  props: {
      loading: {
          type: Boolean,
          default: false
      },
      goods: {
          type: Array,
          default: []
      },
      showBottom: {
        type: Boolean,
        default: false
      }
  },
  setup(props) {
    const loading = ref(props.loading)
    const goods = ref(props.goods)
    return {
      loading,
      goods
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/style/mixin';
.good-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .good-item {
    box-sizing: border-box;
    width: 50%;
    border-bottom: 1px solid #e9e9e9;
    padding: 10px 10px;
    img {
      display: block;
      width: 120px;
      margin: 0 auto;
    }
    .good-desc {
      text-align: center;
      font-size: 14px;
      padding: 10px 0;
      .title {
        color: #222333
      }
      .price {
        color: @primary;
      }
    }
  }
}
.active {
  padding-bottom: 100px;
}
</style>