<template>
  <v-flex class="pb-3 pr-3" x12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>Price: {{ stock.price }}</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Amount" type="number" v-model.number="amount"/>
        <v-btn class="green darken-3 withe--text" @click="buy" :disabled="amount <= 0 || !Number.isInteger(amount)">
          Buy
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      amount: 0
    }
  },
  methods: {
    buy() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        amount: this.amount,
      }
      this.$store.dispatch('buyStock', order)
      this.amount = 0
    }
  }
}
</script>

<style>
</style>