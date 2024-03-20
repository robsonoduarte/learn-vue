<template>
  <div class="user-detail">
    <h3>User Detail</h3>
    <hr>
    <p><strong>Id: </strong>{{ id }}</p>
    <!--<router-link tag="button" primary :to="`/user/${id}/edit`">Edit</router-link>-->
    <router-link tag="button" primary :to="{name: 'userEdit', params: {id}, query: {country: 'Brazil', language: 'pt_br'}, hash: '#footer'}">Edit</router-link>
  </div>
</template>


<script>
export default {
  props: ['id'],
  /*    data(){
        return {
          id: this.$route.params.id
        }
      },
      watch:{
        $route(to, from) {
          this.id = to.params.id
        },
      },*/
}
</script>

<style>
</style>