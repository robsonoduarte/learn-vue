<template>
  <div class="component">
    <h2>User Information</h2>
    <p>Name: {{ reverseName() }}</p>
    <p>Age: {{ age }}</p>
    <button @click="rebootName">Reboot Name (Event)</button>
    <button @click="rebootNameCallback">Reboot Name (Callback)</button>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age:{
      type: Number,
    },
    rebootNameCallback: Function
  },
  methods: {
    reverseName() {
      return this.name.toUpperCase()
    },
    rebootName() {
      this.$emit('nameChanged', 'Bravox')
    },
  },
  created() {
    eventBus.onChangeAge(age => {this.age = age})
  }

}
</script>

<style scoped>
.component {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
