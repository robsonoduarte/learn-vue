<template>
  <div id="app">
    <h1>Routes with Vue-Router</h1>
    <router-view name="menu"></router-view>
    <transition
        enter-active-class="animated rubberBand"
        leave-active-class="animated rollOut"
        mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
