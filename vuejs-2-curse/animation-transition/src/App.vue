<template>
  <div id="app" class="container-fluid">
    <h1>Animations & Transitions</h1>
    <hr>
    <b-button variant="primary" class="mb-4" @click="show = !show">Show Message</b-button>
    <transition name="fade">
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>
    <transition name="slide">
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>

    <transition name="fade-slide">
      <b-alert variant="info" show v-if="show">{{ message }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'A message of information for the user',
      show: false,
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
  font-size: 1.5rem;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

.slide-enter-active {
  animation: slide-in 2s ease;
}

.slide-leave-active {
  animation: slide-out 2s ease;
}

.fade-slide-enter-active{
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.fade-slide-leave-active{
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.fade-slide-enter, .fade-slide-leave-to{
  opacity: 0;
}


@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

</style>