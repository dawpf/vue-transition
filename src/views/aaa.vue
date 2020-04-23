<template>
  <div class="two">
    <router-link to="/aaa/bbb">下一层</router-link>
    <router-link to="/">返回</router-link>
    <h1>第二层</h1>
    <transition name="man">
      <router-view></router-view>
    </transition>
  </div>
</template>


<style scoped>
.two {
  background-color: tomato;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
