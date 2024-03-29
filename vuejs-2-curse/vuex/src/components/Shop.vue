<template>
  <Panel title="Virtual Shop" verde>
    <div class="shop">
      <span>Add</span>
      <input type="number" v-model.number="amount">
      <span>items of <strong>R$</strong></span>
      <input type="number" v-model.number="price">
      <button @click="add">Now!</button>
    </div>
  </Panel>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapActions, mapMutations} from "vuex";
export default {
  data() {
    return {
      sequence: 1,
    }
  },
  computed: {
    amount() {
      return this.$store.state.parameters.amount
    },
    price() {
      return this.$store.state.parameters.price
    },
  },
  methods: {
    add() {
      const product = {
        id: this.sequence,
        name: `Product ${this.sequence}`,
        amount: this.amount,
        price: this.price
      }
      this.sequence++
      //this.$store.commit('addProduct', product)
      //this.$store.dispatch("addProduct", product)
      this.addProduct(product)
    },
    //...mapMutations(["addProduct"])
    ...mapActions('cart', ['addProduct'])
  }
}
</script>

<style>
.shop {
  display: flex;
  justify-content: center;
}

.shop > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
