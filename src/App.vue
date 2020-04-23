<template>
  <div id="app">
    <div class="one">
      <div>
        <router-link to="/aaa">下一层</router-link>
      </div>
      <h1>第一层</h1>
    </div>
    <transition name="kuai">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  text-align: center;
}

.one {
  height: 100%;
  background-color: yellow;
}

.kuai-enter-active,
.kuai-leave-active {
  transition: all 0.3s;
}
.kuai-enter,
.kuai-leave-to {
  transform: translateX(100%);
}

.man-enter-active,
.man-leave-active {
  transition: all 1s;
}
.man-enter,
.man-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
