<template>TASKS</template>

<script setup>
onMounted(async () => {
  const res = await $fetch("http://localhost:4000/task/all");
  console.log(res);
});
</script>
