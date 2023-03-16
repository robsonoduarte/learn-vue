<template>
  <div class="component">
    <h2>User Information</h2>
    <p>Name: {{ reverseName() }}</p>
    <button @click="rebootName">Reboot Name (Event)</button>
    <button @click="rebootNameCallback">Reboot Name (Callback)</button>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rebootNameCallback: Function
  },
  methods: {
    reverseName() {
      return this.name.toUpperCase()
    },
    rebootName() {
      this.name = 'Bravox'
      this.$emit('nameChanged', this.name)
    }
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
