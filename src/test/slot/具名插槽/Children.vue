<template>
  <div>
    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <!-- 如果一个 <slot> 不带 name 属性，那么它的 name 默认为 default -->
      <slot></slot>
    </main>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>