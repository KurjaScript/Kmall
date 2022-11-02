// 在 slot 插槽里设置默认内容 Submit
<template>
  <div class="content">
    <button>
      <slot>Submit</slot>
    </button>
  </div>
  
</template>
<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  button {
    height: 20px;
  }
}
</style>