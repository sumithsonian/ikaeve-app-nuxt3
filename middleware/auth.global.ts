export default defineNuxtRouteMiddleware(async () => {
  const { $fetch2 } = useNuxtApp()
  const accessToken = useCookie('access_token')
  const isLoggedIn = useIsLoggedInState()
  const me = useMeState()
  if (accessToken.value) {
    const { data: user } = await $fetch2('/users/me', {})
    if (user.value) {
      isLoggedIn.value = true
      me.value = Object.assign({}, me.value, user.value.data)
    }
  }
})
