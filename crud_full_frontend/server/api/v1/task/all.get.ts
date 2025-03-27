export default defineEventHandler(async (event) => {
  return await $fetch(`http://localhost:4000/task/all`, {
    method: "GET",
  });
});
