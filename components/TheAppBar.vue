<template>
  <nav>
    <ul>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> home </ElementsIcon
          ><ElementsTxt class="-xsmall">ホーム</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> insights </ElementsIcon
          ><ElementsTxt class="-xsmall">ランキング</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> military_tech </ElementsIcon
          ><ElementsTxt class="-xsmall">大会</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><ElementsIcon> people </ElementsIcon
          ><ElementsTxt class="-xsmall">チーム/団体</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <button>
          <ElementsIcon> menu </ElementsIcon
          ><ElementsTxt class="-xsmall">メニュー</ElementsTxt>
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
    padding: $space;
    display: flex;
    justify-content: center;
    a,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
