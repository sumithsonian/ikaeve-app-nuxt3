<template>
  <div>
    <BlocksParagraph class="-center"
      ><ElementsButton to="/">HOME</ElementsButton></BlocksParagraph
    >
  </div>
</template>

<script setup>
const route = useRoute()

// トークン保存
// const token = (await $fetch(`/api/token?code=&state=`)).data
const token = route.query.token
const accessToken = useCookie('access_token')
accessToken.value = token

// ログイン: モックAPI用
const isLoggedIn = useIsLoggedInState()
const me = useMeState()
if (route.query.token) {
  const user = (await $fetch(`/api/users/me?token=${token}`)).data
  me.value = user
  isLoggedIn.value = true
}
</script>
