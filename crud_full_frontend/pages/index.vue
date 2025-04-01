<template>
  <div class="flex justify-center flex-wrap w-100">
    <div
      class="flex flex-column justify-center align-center w-100 h-90-dvh"
      v-if="dataSource.length === 0"
    >
      <span class="f-s-16 f-w-600 color-primary"> TASK LIST IS EMPTY </span>
      <span class="f-s-12 f-w-500 color-gray"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit</span
      >
    </div>
    <CardsTask
      v-else
      v-for="data in dataSource"
      :key="data.id"
      :data="data"
      @updateTask="updateTask"
      @deleteTask="deleteTask"
      @infoTask="infoTask"
    />
  </div>
  <DrawersTaskInfo
    :data="task"
    :isOpen="drawerState"
    @close="drawerState = false"
  />
</template>

<script setup>
import { TasksControllerModule } from "@/controllers/tasks";
import { TasksStoreModule } from "@/stores/tasks";

const drawerState = ref(false);

const dataSource = computed(() => {
  return TasksStoreModule.tasks.value;
});

const task = computed(() => {
  return TasksStoreModule.task.value;
});

const updateTask = async (data) => {
  await TasksControllerModule.updateTask(data.id, {
    title: data.title,
    description: data.description,
    status: true,
  });
};

const deleteTask = async (data) => {
  await TasksControllerModule.deleteTask(data.id);
};

const infoTask = async (id) => {
  await TasksControllerModule.getTaskById(id);
  drawerState.value = true;
};

onMounted(async () => {
  await TasksControllerModule.getAllTasks();
});
</script>
