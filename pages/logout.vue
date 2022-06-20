<template>
  <div>
    <BlocksLocalHeader>{{ title }}</BlocksLocalHeader>
  </div>
</template>

<script setup>
const title = 'ログアウト'
useHead({
  title: title,
})

const isLoggedIn = useIsLoggedInState()
const me = useMeState()
const accessToken = useCookie('access_token')

isLoggedIn.value = false
me.value = { id: null }
accessToken.value = null
</script>
