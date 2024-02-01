<template>
  <div id="app">
    <h1>Directives</h1>
    <hr/>
    <p v-highlight="color">Using the custom directive</p>
    <p v-highlight:back="'lightblue'">Using the custom directive with args</p>
    <p v-highlight:back.delay="'lightgreen'">Using the custom directive with modifiers </p>
    <p v-highlight-local:back.delay="'lightgreen'">Using the custom local directive</p>
    <p v-highlight-local:back.delay.toggle="'lightgreen'">Using the custom local directive with multiple modifiers</p>
    <p v-highlight-local-object:back.delay.toggle="{color: 'lightgreen', colorToggle: 'mediumpurple', delay: 5000, interval: 2000}">Using the custom local directive passing a object</p>
  </div>
</template>

<script>
export default {
  directives: {
    'highlight-local': {
      bind(el, binding, vnode) {
        const applyColor = (color) => {
          if (binding.arg === 'back') {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        }
        let delay = 0;
        if (binding.modifiers['delay']) delay = 3000;
        setTimeout(() => {
          let color = binding.value;
          if (binding.modifiers['toggle']){
            setInterval(() => {
              color = color === binding.value ? 'mediumpurple' : binding.value;
              applyColor(color);
            }, 1000);
          }else {
            applyColor(color);
          }
        }, delay);

      },
    },
    'highlight-local-object': {
      bind(el, binding, vnode) {
        const applyColor = (color) => {
          if (binding.arg === 'back') {
            el.style.backgroundColor = color;
          } else {
            el.style.color = color;
          }
        }
        let delay = 0;
        if (binding.modifiers['delay']) delay = binding.value.delay;
        setTimeout(() => {
          let color = binding.value.color;
          if (binding.modifiers['toggle']){
            setInterval(() => {
              color = color === binding.value.color ? binding.value.colorToggle : binding.value.color;
              applyColor(color);
            }, binding.value.interval);
          }else {
            applyColor(color);
          }
        }, delay);

      },
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
