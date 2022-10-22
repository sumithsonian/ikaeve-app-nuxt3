export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/events')
  const item = items.data.filter(
    (row) => row.series.id === Number(event.context.params.id),
  )
  return { data: item }
})
