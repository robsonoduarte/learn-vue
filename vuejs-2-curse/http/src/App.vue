<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert show dismissible v-for="message in messages" :key="message.text" :variant="message.type">
      {{ message.text }}
    </b-alert>
    <b-card>
      <b-form-group label="Name:">
        <b-form-input type="text" size="lg" v-model="user.name" placeholder="Inform the name"/>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input type="email" size="lg" v-model="user.email" placeholder="Inform the email"/>
      </b-form-group>
      <hr>
      <b-button @click="save" size="lg" variant="primary">Save</b-button>
      <b-button @click="list" size="lg" variant="success" class="ml-2">List</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(user, id) in users" :key="id">
        <strong>ID:</strong> {{ id }} <br>
        <strong>Name:</strong> {{ user.name }} <br>
        <strong>Email:</strong> {{ user.email }} <br>
        <b-button variant="warning" size="lg" @click="edit(id)">Edit</b-button>
        <b-button variant="danger" size="lg" @click="remove(id)" class="ml-2">Remove</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  created() {
    this.list()
  },
  data() {
    return {
      user: {
        name: '',
        email: ''
      },
      users: [],
      userId: '',
      messages: [],
    }
  },
  methods: {
    save() {
      if (this.userId !== '') {
        this.$http.patch(`users/${this.userId}.json`, this.user)
            .then(() => {
              this.clean()
              this.messages.push({
                text: 'Edit with success',
                type: 'success'
              })
            })
      } else {
        this.$http.post('users.json', this.user)
            .then(() => {
              this.clean()
              this.messages.push({
                text: 'Save with success',
                type: 'success'
              })
            })
      }
      this.list()
    },
    list() {
      this.$http.get('users.json').then(resp => this.users = resp.data)
    },
    remove(id) {
      this.$http.delete(`/users/${id}.json`).then(() => {
        this.clean()
        this.messages.push({
          text: 'Remove with success',
          type: 'success'
        })
        this.list()
      }).catch(() => {
        this.clean()
        this.messages.push({
          text: 'Error in remove',
          type: 'danger'
        })
      })
    },
    edit(id) {
      this.userId = id;
      this.user = {...this.users[id]}
    },
    clean() {
      this.user.name = ''
      this.user.email = ''
      this.userId = ''
      this.messages = []
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
