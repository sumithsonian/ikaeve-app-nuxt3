export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/tournament-series')
  const item = items.data.filter(
    (row) => row.team.id === Number(event.context.params.id),
  )
  return { data: item }
})
