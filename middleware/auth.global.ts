export default defineNuxtRouteMiddleware(async () => {
  const accessToken = useCookie('access_token')
  const isLoggedIn = useIsLoggedInState()
  const me = useMeState()
  if (accessToken.value) {
    const { data: user } = await useFetch('/api/users/me', {
      headers: { Authorization: `Bearer ${accessToken.value}` },
    })
    if (user.value) {
      isLoggedIn.value = true
      me.value = Object.assign({}, me.value, user.value.data)
    }
  }
})
