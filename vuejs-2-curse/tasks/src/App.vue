<template>
  <div id="app">
    <h1>Tasks</h1>
    <NewTask @taskAdded="addTask"/>
    <TaskGrid :tasks="tasks"/>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";

export default {
  components: {NewTask, TaskGrid},
  data() {
    return {
      tasks: [
        {name: 'Wash dishes ', pending: false},
        {name: 'Buy coat', pending: true},
      ]
    }
  },
  methods: {
    addTask(task) {
      const hasName = this.tasks.filter(t => t.name === task.name).length === 0
      hasName && this.tasks.push({
        name: task.name,
        pending: task.pending || true
      })

    },
  }
}
</script>


<style>
body {
  font-family: 'Lato', sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #FFF;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
