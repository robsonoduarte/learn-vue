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
import {mapGetters} from "vuex"
export default {
/*  computed: {
    total() {
      return this.$store.getters.amount
    }
  }*/
  computed: mapGetters('cart',{
    total: 'amount'
  })
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
