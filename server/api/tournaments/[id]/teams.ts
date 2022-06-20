export default defineEventHandler(async (event) => {
  const items = await $fetch('/api/teams')
  return { data: items }
})
