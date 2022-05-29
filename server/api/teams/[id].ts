export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/teams')
  const item = items.data.find((row) => row.id === Number(event.context.params.id))
  return { data: item }
})
