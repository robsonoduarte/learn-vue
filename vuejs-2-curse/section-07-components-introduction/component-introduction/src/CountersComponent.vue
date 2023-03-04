<template>
  <div>
    <h1>Counters</h1>
    <app-counter v-for="k in 5" :key="k"/>
  </div>
</template>

<script>
import Counter from './CounterComponent.vue'

export default {
  components: {
    'app-counter': Counter
  }
}
</script>

<style>

</style>