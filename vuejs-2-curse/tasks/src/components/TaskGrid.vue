<template>
  <div class="tasks-grid">
    <template v-if="tasks.length">
      <task :task="task" v-for="task in tasks" :key="task.name"></task>
    </template>
    <p v-else class="no-task">Your life is up to date</p>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  components: {Task},
  props: {
    tasks: {type: Array, required: true}
  }
}
</script>

<style>
.tasks-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tasks-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}
</style>