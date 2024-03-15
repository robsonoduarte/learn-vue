<template>
  <div class="user-edit">
    <h3>User Edit</h3>
    <p><strong>Id: </strong>{{ id }}</p>
    <p><strong>Country: </strong>{{ $route.query.country }}</p>
    <p><strong>Language: </strong>{{ $route.query.language }}</p>
  </div>
</template>


<script >
  export default {
    props: ['id'],
  }
</script>


<style>
</style>