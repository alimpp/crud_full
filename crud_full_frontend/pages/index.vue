<template>
  <div class="flex justify-center flex-wrap w-100">
    <CardsTask v-for="data in dataSource" :key="data.id" :data="data" />
  </div>
</template>

<script setup>
import { TasksControllerModule } from "@/controllers/tasks";
import { TasksStoreModule } from "@/stores/tasks";

const dataSource = computed(() => {
  return TasksStoreModule.tasks.value;
});

onMounted(async () => {
  await TasksControllerModule.getAllTasks();
});
</script>
