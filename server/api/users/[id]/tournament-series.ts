export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/tournaments')
  const item = items.data.filter(
    (row) => row.team.owner_user.id === Number(event.context.params.id),
  )
  return { data: item }
})
