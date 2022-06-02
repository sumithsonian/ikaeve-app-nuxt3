<template>
  <header>
    <h1><nuxt-link to="/">ロゴマーク</nuxt-link></h1>
    <ul>
      <li>
        <button @click="modalState = true">
          <ElementsIcon> login </ElementsIcon
          ><ElementsText class="-xsmall">登録/ログイン</ElementsText>
        </button>
      </li>
      <li>
        <nuxt-link to="/players/1"
          ><ElementsIcon> account_circle </ElementsIcon
          ><ElementsText class="-xsmall">マイページ</ElementsText></nuxt-link
        >
      </li>
    </ul>
  </header>
</template>

<script setup>
const modalState = useLoginModalState()
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
      color: $color-black;
      font-family: ikamodoki;
      font-size: $font-xxlarge;
      line-height: 1;
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
