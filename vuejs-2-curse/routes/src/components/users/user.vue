<template>
  <div class="user">
    <h2>Users</h2>
    <hr>
    <button sucesso  @click="toInit">Back</button>
  </div>
</template>


<script>
  export default {
    methods:{
      toInit() {
        this.$router.push('/')
      },
    }
  }
</script>

<style>
</style>