<template>
  <div class="grid">
    <div class="col">
      <Chart type="line" :data="data" :options="options"></Chart>
    </div>
  </div>

</template>


<script>
import Chart from 'primevue/chart'

export default {
  components: { Chart },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'dataset 1',
            backgroundColor: '#144e86',
            borderColor: '#5454a8',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'dataset 2',
            backgroundColor: '#FA8072',
            borderColor: '#FF0000',
            data: [-10, 4, 60, 15, 30, 55, 80]
          },
          {
            label: 'dataset 3',
            backgroundColor: '#F0FFF0',
            borderColor: '#FFFFFF',
            data: [-0, 10, 33, -15, 30, 60, 70]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Prime Vue Chart.js'
          },
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: '#887c7c',
              lineWidth: 0.1
            }
          },
          y: {
            grid: {
              display: true,
              color: '#887c7c',
              lineWidth: 0.1
            }
          }
        }
      }
    }
  }
}
</script>


<style scoped>
</style>
