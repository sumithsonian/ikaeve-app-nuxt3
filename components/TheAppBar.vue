<template>
  <nav>
    <ul>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> home </ElementsIcon
          ><ElementsText class="-xsmall">ホーム</ElementsText></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/ranking/"
          ><ElementsIcon> insights </ElementsIcon
          ><ElementsText class="-xsmall">ランキング</ElementsText></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/tournaments/"
          ><ElementsIcon> military_tech </ElementsIcon
          ><ElementsText class="-xsmall">大会</ElementsText></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/teams/"
          ><ElementsIcon> people </ElementsIcon
          ><ElementsText class="-xsmall">チーム/団体</ElementsText></nuxt-link
        >
      </li>
      <li>
        <button>
          <ElementsIcon> menu </ElementsIcon
          ><ElementsText class="-xsmall">メニュー</ElementsText>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

nav ul {
  display: flex;
  background: $color-gray-10;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    a,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: $space-small;
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>
