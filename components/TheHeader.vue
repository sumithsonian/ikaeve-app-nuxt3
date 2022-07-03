<template>
  <header>
    <h1>
      <nuxt-link :to="isLoggedIn ? '/home' : '/'"
        ><ElementsLogo />
        <span class="logo-text">イカイベ</span>
      </nuxt-link>
    </h1>
    <ul>
      <li v-if="!isLoggedIn">
        <button @click="modalState = true">
          <ElementsIcon> login </ElementsIcon
          ><ElementsText class="-xsmall">登録/ログイン</ElementsText>
        </button>
      </li>
      <li v-if="isLoggedIn && me.is_administrator">
        <nuxt-link :to="`/admin/`"
          ><ElementsIcon> admin_panel_settings </ElementsIcon
          ><ElementsText class="-xsmall">管理者</ElementsText></nuxt-link
        >
      </li>
      <li v-if="isLoggedIn">
        <nuxt-link :to="`/players/${me.id}`"
          ><ElementsIcon> account_circle </ElementsIcon
          ><ElementsText class="-xsmall">マイページ</ElementsText></nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<script setup>
const modalState = useLoginModalState()
const isLoggedIn = useIsLoggedInState()
const me = useMeState()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

header {
  background: $color-primary;
  color: $color-black;
  padding: $space;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    a {
      display: flex;
      align-items: flex-end;
      gap: $space-xsmall;
      color: $color-black;
      &:hover {
        text-decoration: none;
      }
    }
    .logo-text {
      position: relative;
      top: -2px;
      font-family: ikamodoki;
      font-size: 38px;
      line-height: 1;
      letter-spacing: 0.08em;
    }
  }
  ul {
    display: flex;
    gap: $space;
    li {
      display: flex;
      justify-content: center;
      a,
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-black;
      }
    }
  }
}
</style>
