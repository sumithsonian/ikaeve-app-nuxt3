export default defineEventHandler(async (event) => {
  let BearerToken = event.req.headers.Authorization

  if (!BearerToken) {
    return {}
  }

  BearerToken = (BearerToken as string).replace('Bearer ', '')

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

  const index = tokens.findIndex((token) => token === BearerToken)
  const item = await $fetch(`/api/users/${index + 1}`)

  return { data: item.data }
})
