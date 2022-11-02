<template>
  <div>
    <!-- 设置默认值：{{ user.LastName }} 获取 -->
    <!-- 如果 Parent.vue 中给这个插槽值的话，则不显示 -->
    <!-- 设置一个 usertext 然后把 user 绑到设置的 usertext 上 -->
    <slot :usertext="user">{{ user.lastName}}</slot>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  setup() {
    const user = reactive({
      firstName: 'Lee',
      lastName: 'Pillow'
    })
    return {
      user
    }
  }
}
</script>