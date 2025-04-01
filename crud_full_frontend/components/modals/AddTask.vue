<template>
  <BaseModal
    title="Create New Task"
    text="Create Task Guide"
    :isOpen="isOpen"
    @close="emit('close')"
  >
    <template #icon>
      <IconsSuccess color="#7d7be5" />
    </template>
    <template #content>
      <div class="flex w-100 flex-column">
        <BaseInput
          :errorMessage="error.title"
          placeholder="inter task title"
          label="Title"
          width="350px"
          v-model="form.title"
        />
        <BaseInput
          :errorMessage="error.description"
          placeholder="inter task description"
          label="lastname"
          width="350px"
          v-model="form.description"
        />
      </div>
    </template>
    <template #footer>
      <BaseButton
        name="Add Task"
        bg="bg-primary"
        color="color-primary-white"
        width="80px"
        height="35px"
        :loading="loading"
        @click="addTask"
      />
    </template>
  </BaseModal>
</template>

<script setup>
import { TasksControllerModule } from "@/controllers/tasks";

const emit = defineEmits(["close"]);
const loading = ref(false);

const error = computed(() => {
  return TasksControllerModule.createTaskError.value;
});

const form = ref({
  title: "",
  description: "",
});

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const addTask = async () => {
  loading.value = !loading.value;
  const valid = await TasksControllerModule.validateAddTask(form.value);
  loading.value = !loading.value;
  if (valid) {
    for (let key in form.value) {
      form.value[key] = "";
    }
    emit("close");
  }
};
</script>
