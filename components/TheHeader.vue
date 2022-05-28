<template>
  <header>
    <h1>ロゴ</h1>
    <ul>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> login </ElementsIcon
          ><ElementsTxt class="-xsmall">登録/ログイン</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> account_circle </ElementsIcon
          ><ElementsTxt class="-xsmall">マイページ</ElementsTxt></nuxt-link
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
