<template>
  <v-flex class="pb-3 pr-3" x12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>
            Price: {{ stock.price | currency}} | Amount: {{ stock.amount }}
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Amount" type="number" v-model.number="amount" :error="checkAmount || !Number.isInteger(amount)"/>
        <v-btn class="blue darken-3 withe--text" @click="sell" :disabled="checkAmount || amount <= 0 || !Number.isInteger(amount)">
          {{ checkAmount ? 'No Amount' : 'Sell'}}
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
  computed:{
    checkAmount(){
      return this.amount > this.stock.amount
    }
  },
  methods: {
    sell() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        amount: this.amount,
      }
      this.$store.dispatch('sellStock', order)
      this.amount = 0
    }
  }
}
</script>

<style>
</style>