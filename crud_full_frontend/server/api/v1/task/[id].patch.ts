export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const body = await readBody(event);
  return await $fetch(`http://localhost:4000/task/${id}`, {
    method: "PATCH",
    body: body,
  });
});
