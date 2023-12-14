<template>
  <div class="component">
    <h2>Edit User Information</h2>
    <p>Age: {{ age }}</p>
    <button @click="changeAge">Change Age</button>
  </div>
</template>

<script>

import eventBus from "@/eventBus";

export default {
  props: {
    age: {
      type: Number,
    }
  },
  methods:{
    changeAge(){
      this.age++
      eventBus.changeAge(this.age);
    }
  }

}
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
