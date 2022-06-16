<template>
  <div>
    <BlocksParagraph class="-center"
      ><ElementsButton to="/">リダイレクト</ElementsButton></BlocksParagraph
    >
  </div>
</template>

<script setup>
// トークン保存
const token = (await $fetch(`/api/token?code=&state=`)).data
const accessToken = useCookie('access_token')
accessToken.value = token

// ログイン: モックAPI用
const route = useRoute()
const isLoggedIn = useIsLoggedInState()
const me = useMeState()
if (route.query.id > 0 && route.query.id <= 6) {
  const user = (await $fetch(`/api/users/${route.query.id}`)).data
  me.value = user
  isLoggedIn.value = true
}
</script>
