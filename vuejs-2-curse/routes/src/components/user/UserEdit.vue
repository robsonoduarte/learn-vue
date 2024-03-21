<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p><strong>Id: </strong>{{ id }}</p>
    <p><strong>Country: </strong>{{ $route.query.country }}</p>
    <p><strong>Language: </strong>{{ $route.query.language }}</p>
    <button primary @click="confirmed = true">Confirm</button>
    <div id="footer">
      <h3>Hash Navigation</h3>
    </div>
  </div>
</template>


<script >
  export default {
    props: ['id'],
    data(){
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next){
      if (this.confirmed) {
        next()
      }else{
        if (confirm('You are sure')) {
          next()
        }else{
          next(false)
        }
      }
    }
  }
</script>


<style>
  #footer{
    margin-top:500px;
  }
</style>