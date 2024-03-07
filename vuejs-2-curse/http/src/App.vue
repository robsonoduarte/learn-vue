<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Name:">
        <b-form-input type="text" size="lg" v-model="user.name" placeholder="Inform the name"/>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="email" size="lg" v-model="user.email" placeholder="Inform the email"/>
      </b-form-group>
      <hr>
      <b-button @click="post" size="lg" variant="primary">Post</b-button>
      <b-button @click="get" size="lg" variant="success" class="ml-2">Get</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(user, id) in users" :key="id">
         <strong>ID:</strong> {{ id }} <br>
         <strong>Name:</strong> {{ user.name }} <br>
         <strong>Email:</strong> {{ user.email }} <br>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: ''
      },
      users: []
    }
  },
  methods:{
    post(){
      this.$http.post('users.json', this.user).then(resp => {
        this.user.name = ''
        this.user.email = ''
      })
    },
      get(){
        this.$http.get('users.json').then(resp => {
          this.users = resp.data
        })
    }
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
