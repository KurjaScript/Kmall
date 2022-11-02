<template>
  <div class="container">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <skeleton>
      <slot name="skeleton"></slot>
    </skeleton>
  </div>
</template>
<style lang="less" scoped>
@import '../common/style/mixin';
.container {
  .header {
    background-color: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>