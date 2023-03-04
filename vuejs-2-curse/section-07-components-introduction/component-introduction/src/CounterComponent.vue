<template>
  <div class="counter">
    <span>{{ counter }}</span>
    <button @click="add">Add</button>
    <button @click="sub">Sub</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++
    },
    sub() {
      this.counter--
    }
  }
}
</script>

<style>
.counter span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 30px;
}

.counter button {
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: coral;
  color: white;
  margin-left: 10px;
  outline: none;
}
</style>