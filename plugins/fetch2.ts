export default defineNuxtPlugin(() => {
  const accessToken = useCookie('access_token')
  const config = useRuntimeConfig().public

  return {
    provide: {
      fetch2: (path: string, params: object) =>
        useFetch(path, {
          headers: { Authorization: `Bearer ${accessToken}` },
          params,
          baseURL: config.API_URL,
        }),
    },
  }
})
