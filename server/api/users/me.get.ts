export default defineEventHandler(async (event) => {
  const query = useQuery(event)

  const tokens = [
    'aaaaa',
    'bbbbb',
    'ccccc',
    'ddddd',
    'eeeee',
    'fffff',
    'ggggg',
    'hhhhh',
    'iiiii',
    'jjjjj',
  ]

  const index = tokens.findIndex((token) => token === query.token)
  const items = await $fetch('/api/users')
  const item = items.data.find((row) => row.id === index + 1)

  return { data: item }
})
