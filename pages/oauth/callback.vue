<template>
  <div>
    <BlocksParagraph class="-center"
      ><ElementsButton to="/">HOME</ElementsButton></BlocksParagraph
    >
  </div>
</template>

<script setup>
const { $fetch2 } = useNuxtApp()
const route = useRoute()

// エラー
if (route.query.error) {
}

// クエリなし
if (!route.query.code && !route.query.state) {
  navigateTo({ path: '/' })
}

// Token取得
const { data: token } = await $fetch2(`/token`, {
  code: route.query.code,
  state: route.query.state,
})

// トークン保存
const accessToken = useCookie('access_token', {
  path: '/',
  maxAge: token.value.expires_in,
})
accessToken.value = token.value.access_token

// ログイン判定はredirectしてmiddleでするので不要

// リダイレクト
navigateTo({ path: '/' })
</script>
