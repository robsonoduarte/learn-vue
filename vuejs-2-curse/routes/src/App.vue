<template>
  <div id="app">
    <h1>Routes with Vue-Router</h1>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/template/menu'

export default {
  components: {Menu},
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
