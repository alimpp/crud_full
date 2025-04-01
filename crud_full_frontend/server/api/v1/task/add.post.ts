export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await $fetch(`http://localhost:4000/task/add`, {
    method: "POST",
    body: body,
  });
});
