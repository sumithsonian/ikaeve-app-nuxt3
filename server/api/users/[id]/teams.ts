export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/teams')
  const item = items.data.filter(
    (row) => row.owner_user.id === Number(event.context.params.id),
  )
  return { data: item }
})
