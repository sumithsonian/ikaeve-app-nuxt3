<template>
  <nav>
    <ul>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> home </span
          ><ElementsTxt class="-xsmall">ホーム</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> insights </span
          ><ElementsTxt class="-xsmall">ランキング</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> military_tech </span
          ><ElementsTxt class="-xsmall">大会</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> people </span
          ><ElementsTxt class="-xsmall">チーム/団体</ElementsTxt></nuxt-link
        >
      </li>
      <li>
        <button>
          <span class="material-icons"> menu </span
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
