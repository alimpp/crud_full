export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  return await $fetch(`http://localhost:4000/task/${id}`, {
    method: "DELETE",
  });
});
