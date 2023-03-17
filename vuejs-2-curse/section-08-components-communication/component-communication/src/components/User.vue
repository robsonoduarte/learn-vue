<template>
  <div class="container">
    <h1>User Component</h1>
    <p><strong>Name: {{ name }}</strong></p>
    <p><strong>Age: {{ age }}</strong></p>
    <button @click="changeName">Change Name</button>
    <hr>
    <div class="components">
      <app-user-info :name="name" :age="age" @nameChanged="name= $event" :reboot-name-callback="rebootName" />
      <app-user-edit :age="age"/>
    </div>
  </div>
</template>

<script>
import AppUserInfo from './UserInfo.vue'
import AppUserEdit from './UserEdit.vue'
import eventBus from "@/eventBus";
export default {
  components: {AppUserInfo, AppUserEdit},
  data() {
    return {
      name: 'Bravox',
      age: 46,
    }
  },
  methods: {
    changeName() {
      this.name = this.name === 'Bravox' ? "Ana Mara" : 'Bravox'
    },
    rebootName() {
      this.name = 'Bravox'
    }
  },
  created() {
    eventBus.$on('ageChanged', age => { this.age = age})
  }
}
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.components {
  display: flex;
}

.components > * {
  margin: 10px;
}
</style>
