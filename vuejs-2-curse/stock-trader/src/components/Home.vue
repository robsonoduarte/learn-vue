<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Trade and Consult your Stocks</h1>
    <v-sheet :elevation="6" color="primary" class="pa-2">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">You can save & load the data</span>
    </v-sheet>
    <v-sheet :elevation="6" color="success" class="pa-2 mt-3 darken-1">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">Click in "End day" to start a new day</span>
    </v-sheet>
    <v-divider class="my-4"/>
    <p class="display-1"><strong>Your Balance: {{ balance }}</strong></p>
  </div>
</template>

<script>
export default {
  computed:{
    balance(){
      return this.$store.getters.balance
    }
  }
}

</script>

<style>
</style>