<template>
  <div id="app">
    <h1>Directives</h1>
    <hr/>
    <p v-highlight="color">Using the custom directive</p>
    <p v-highlight:back="'lightblue'">Using the custom directive</p>
    <p v-highlight:back.delay="'lightgreen'">Using the custom directive</p>
    <p v-highlight-local:back.delay="'lightgreen'">Using the custom local directive</p>
  </div>
</template>

<script>
export default {
  directives:{
     'highlight-local':{
       bind(el, binding, vnode){
         let delay = 0;
         if (binding.modifiers['delay']) delay = 3000;
         setTimeout(() => {
           if (binding.arg === 'back') {
             el.style.backgroundColor = binding.value;
           } else {
             el.style.color = binding.value;
           }
         }, delay);

       }
     }
  },
  data() {
    return {
      color: 'green'
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
</style>
