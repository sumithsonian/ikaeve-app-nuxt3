<template>
  <nav>
    <ul>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> home </span
          ><span>ホーム</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> insights </span
          ><span>ランキング</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> military_tech </span
          ><span>大会</span></nuxt-link
        >
      </li>
      <li>
        <nuxt-link href="/"
          ><span class="material-icons"> people </span
          ><span>チーム/団体</span></nuxt-link
        >
      </li>
      <li>
        <button>
          <span class="material-icons"> menu </span><span>メニュー</span>
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
      color: $color-white;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
