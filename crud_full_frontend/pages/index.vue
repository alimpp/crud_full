<template>
  <div class="flex justify-center flex-wrap w-100">
    <CardsTask
      v-for="data in dataSource"
      :key="data.id"
      :data="data"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script setup>
import { TasksControllerModule } from "@/controllers/tasks";
import { TasksStoreModule } from "@/stores/tasks";

const dataSource = computed(() => {
  return TasksStoreModule.tasks.value;
});

const updateTask = async (data) => {
  await TasksControllerModule.updateTask(data.id, {
    title: data.title,
    description: data.description,
    status: true,
  });
};

const deleteTask = async (data) => {
  // await TasksControllerModule.deleteTask(data);
};

onMounted(async () => {
  await TasksControllerModule.getAllTasks();
});
</script>
