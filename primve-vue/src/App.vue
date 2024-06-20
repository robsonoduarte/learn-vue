<script >
import DatePicker from 'primevue/datepicker';
export default {
  components: {DatePicker},
  data(){
    return{
      date: ''
    }
  }
}

</script>

<template>
  <DatePicker v-model="date" />
</template>

<style scoped>
</style>
