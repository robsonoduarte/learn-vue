<template>
  <Panel title="Resume" roxo>
    <div class="resume">
      <span>Total: <strong>{{ total | money }}</strong></span>
      <hr>
      <button>Finish!</button>
    </div>
  </Panel>
</template>

<script>
export default {
  computed: {
    total() {
      return this.products
          .map(p => p.amount * p.price)
          .reduce((total, current) => total + current, 0)
    },
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #EEE;
  width: 33%;
}
</style>
