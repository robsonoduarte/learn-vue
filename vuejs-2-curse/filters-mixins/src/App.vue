<template>
  <div id="app">
    <h1>Filters & Mixins</h1>
    <hr>
    <p>{{ doc | format }}</p>
    <p>{{ doc | format | reverse }}</p>
    <input type="text" :value="doc | format">
    <hr>
    <Fruits/>
    <hr>
    <div>
      <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
      </ul>
      <input type="text" v-model="fruit" @keydown.enter="add">
    </div>
  </div>
</template>

<script>
import fruitsMixin from "@/fruitsMixin";
import Fruits from "@/fruits.vue";
export default {
  components: {Fruits},
  mixins:[fruitsMixin],
  filters:{
    format(value) {
      const arr = value.split('');
      arr.splice(3, 0, '.');
      arr.splice(7, 0, '.');
      arr.splice(11, 0, '-');
      return arr.join('');
    },
  },
  data() {
    return{
      doc: '60070080090'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
