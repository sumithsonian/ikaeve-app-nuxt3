export default defineNuxtPlugin(() => {
  const accessToken = useCookie('access_token')

  return {
    provide: {
      fetch2: (path: string, params: object) =>
        useFetch(path, {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { params },
        }),
    },
  }
})
