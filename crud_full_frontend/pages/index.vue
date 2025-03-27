<template>TASKS</template>

<script setup>
onMounted(async () => {
  const id = 1;
  const res = await $fetch(`/api/v1/task/${id}`, {
    method: "GET",
  });
  console.log(res);
});
</script>
