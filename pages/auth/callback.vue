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
const accessToken = useCookie('access_token', {
  path: '/',
  maxAge: 60 * 60 * 24 * 365,
})
accessToken.value = token

// ログイン判定
const isLoggedIn = useIsLoggedInState()
const me = useMeState()
const { data: user } = await useFetch('/api/users/me', {
  headers: { Authorization: `Bearer ${route.query.token}` },
})
isLoggedIn.value = true
me.value = Object.assign({}, me.value, user.value.data)
</script>
