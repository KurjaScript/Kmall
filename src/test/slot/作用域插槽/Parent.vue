<template>
  <div>
    <Children>
      <template v-slot:default="slotProps">
        {{slotProps.usertext.firstName}}
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