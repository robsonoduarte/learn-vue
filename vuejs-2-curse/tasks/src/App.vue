<template>
  <div id="app">
    <h1>Tasks</h1>
    <TaskProgress :progress="progress"/>
    <NewTask @taskAdded="addTask"/>
    <TaskGrid :tasks="tasks"
              @taskDeleted="deleteTask"
              @taskStateChanged="toggleTaskState"/>
  </div>
</template>

<script>
import TaskGrid from "@/components/TaskGrid.vue";
import NewTask from "@/components/NewTask.vue";
import TaskProgress from "@/components/TaskProgress.vue";

export default {
  components: {TaskGrid, NewTask, TaskProgress},
  data() {
    return {
      tasks: []
    }
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter(t => !t.pending).length;
      return Math.round(done / total * 100) || 0;
    }
  },
  watch:{
    tasks:{
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
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
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleTaskState(idx) {
      this.tasks[idx].pending = !this.tasks[idx].pending
    },
  },
  created() {
    const json = localStorage.getItem('tasks');
    this.tasks = JSON.parse(json) || [];
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
