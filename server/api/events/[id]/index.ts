export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/events')
  const item = items.data.find(
    (row) => row.id === Number(event.context.params.id),
  )
  return { data: item }
})
