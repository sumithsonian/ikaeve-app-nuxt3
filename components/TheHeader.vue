<template>
  <header>
    <h1>ロゴ</h1>
    <ul>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> login </span
          ><span>登録/ログイン</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> account_circle </span
          ><span>マイページ</span></nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

header {
  background: $color-primary;
  color: $color-black;
  padding: $space;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    gap: $space;
    li {
      display: flex;
      justify-content: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-black;
      }
    }
  }
}
</style>
