<template>
  <div class="calculator">
    <Display :value="value"/>
    <Button label="AC" triple @buttonClick="clearMemory"/>
    <Button label="/" operation @buttonClick="setOperation"/>
    <Button label="7" @buttonClick="addDigit"/>
    <Button label="8" @buttonClick="addDigit"/>
    <Button label="9" @buttonClick="addDigit"/>
    <Button label="*" operation @buttonClick="setOperation"/>
    <Button label="4" @buttonClick="addDigit"/>
    <Button label="5" @buttonClick="addDigit"/>
    <Button label="6" @buttonClick="addDigit"/>
    <Button label="-" operation @buttonClick="setOperation"/>
    <Button label="1" @buttonClick="addDigit"/>
    <Button label="2" @buttonClick="addDigit"/>
    <Button label="3" @buttonClick="addDigit"/>
    <Button label="+" operation @buttonClick="setOperation"/>
    <Button label="0" double @buttonClick="addDigit"/>
    <Button label="." @buttonClick="addDigit"/>
    <Button label="=" operation @buttonClick="setOperation"/>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Display from "@/components/Display.vue";

export default {
  data: function () {
    return {
      value: "0",
      clean: false,
      operation: null,
      values: [0, 0],
      current: 0
    }
  },
  components: {Button, Display},
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clean = true
      }else{
        const equals = operation === '='
        const cOperation = this.operation
        try{
          this.values[0] = eval( `${this.values[0]} ${cOperation} ${this.values[1]}`)
        }catch (e) {
          this.$emit('onError', e)
        }
        this.values[1] = 0
        this.value = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clean = !equals
      }
    },
    addDigit(n) {
      if (n === '.' && this.value.includes('.')) {
        return
      }
      const clean = this.value === '0' || this.clean
      const current = clean ? "" : this.value
      const value = current + n
      this.value = value
      this.clean = false
      this.values[this.current] = value
    },
  }
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}


</style>