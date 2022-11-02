<template>
  <div>
    <Children>
      <p>这里是主要内容</p>
      <p>随便啊</p>
      <template  v-slot:header>
        <h2>这里是页面标题</h2>
      </template>
      <template v-slot:footer>
        <h2>这里是页脚</h2>
      </template>
    </Children> 
  </div>
</template>
<script>
import Children from './Children.vue';
export default {
  components: {
    Children
  }
}
</script>