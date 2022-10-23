<template>
  <ElementsButton :to="url" class="-twitter -large" @click="close"
    ><slot>Twitterで新規会員登録/ログイン</slot></ElementsButton
  >
</template>

<script>
import { defineComponent } from '@vue/composition-api'
// import crypto from 'crypto'

export default defineComponent({
  setup() {},
  computed: {
    url() {
      const config = useRuntimeConfig().public
      // state文字列生成：40文字にする
      // const state = crypto.randomBytes(32).toString('hex').slice(-40)

      // const state = require('crypto').randomBytes(48, function (ex, buf) {
      //   token = buf.toString('base64').replace(/\//g, '_').replace(/\+/g, '-')
      // })

      const state = 'fugafuga'
      const params =
        'state=' +
        state +
        '&response_type=code&redirect_uri=' +
        config.APP_URL +
        '/oauth/callback'

      // cookie保存: 保存期間はセッション
      useCookie('state', {
        path: '/',
      }).value = state

      return config.API_URL ? config.API_URL + `/login/twitter?${params}` : '/oauth/redirect'
    },
  },
})
</script>

<style scoped lang="scss"></style>
