export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/users')
  const item = items.data.filter(
    (row) => row.id === Number(event.context.params.id),
  )
  return { data: item }
})
