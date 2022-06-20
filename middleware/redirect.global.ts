export default defineNuxtRouteMiddleware(async (to, from) => {
  const isLoggedIn = useIsLoggedInState()
  if (to.path === '/' && isLoggedIn.value) {
    return navigateTo({ path: '/home' })
  }
  if (to.path === '/home' && !isLoggedIn.value) {
    return navigateTo({ path: '/' })
  }
})
