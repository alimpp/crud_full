<template>
  <div
    class="fade-animation w-300-px border-rounded flex flex-column mx-5 mt-5 px-10 py-10 border-custom"
    :class="{ 'bg-success': data.status, 'bg-danger-low': !data.status }"
    :key="data.id"
  >
    <span class="f-s-14 f-w-500">{{ data.title }}</span>
    <span class="f-s-10 f-w-500 color-gray py-10">{{ data.description }}</span>
    <div class="flex w-100 justify-end">
      <div class="w-50 flex">
        <IconsTrash class="cursor-pointer" />
        <IconsText class="cursor-pointer" />
        <IconsCheckCircle v-if="!data.status" class="cursor-pointer" />
      </div>
      <div class="flex w-50 justify-end">
        <BaseChip
          :name="data.status ? 'Task Complete' : 'Task In Progress'"
          :width="data.status ? '100px' : '110px'"
          :bg="data.status ? 'bg-primary' : 'bg-danger'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.border-custom {
  border: 1px solid #d1cdcd53;
}
</style>
