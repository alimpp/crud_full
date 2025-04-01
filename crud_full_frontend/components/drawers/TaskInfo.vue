<template>
  <BaseDrawer
    title="Task Info"
    text="Lorem ipsum dolor sit amet consectetur"
    :isOpen="isOpen"
    @close="emit('close')"
  >
    <template #icon>
      <IconsText />
    </template>
    <template #content>
      <div class="flex w-100 flex-column">
        <span class="f-s-14 f-w-600">Title</span>
        <span class="f-s-12 f-w-500 color-gray pt-5">{{ data.title }}</span>
        <span class="f-s-14 f-w-600 pt-15">Description</span>
        <span class="f-s-12 f-w-500 color-gray pt-5">{{
          data.description
        }}</span>
        <div class="mt-15">
          <BaseChip
            :name="data.status ? 'Task Complete' : 'Task In Progress'"
            :width="data.status ? '100px' : '110px'"
            :bg="data.status ? 'bg-primary' : 'bg-danger'"
          />
        </div>
      </div>
    </template>
  </BaseDrawer>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: {},
  },
});
</script>
