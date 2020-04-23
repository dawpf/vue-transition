<template>
  <div class="three">
    <router-link to="/aaa/bbb/ccc">下一层</router-link>
    <router-link to="/aaa">返回</router-link>
    <h1>第三层</h1>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.three {
  background-color: #ffe69f;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>