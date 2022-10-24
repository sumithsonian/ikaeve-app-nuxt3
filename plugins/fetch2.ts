export default defineNuxtPlugin(() => {
  const accessToken = useCookie('access_token')
  const config = useRuntimeConfig().public

  return {
    provide: {
      fetch2: (path: string, params: object) =>
        useFetch(path, {
          headers: { Authorization: `Bearer ${accessToken.value}` },
          params,
          baseURL:
            config.API_URL === '/api' ? config.API_URL : `${config.API_URL}/v1`,
        }),
    },
  }
})
