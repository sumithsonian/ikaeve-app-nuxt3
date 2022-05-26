<template>
  <div class="tab">
    <ul>
      <li><nuxt-link to="/" class="is-current">ナビ</nuxt-link></li>
      <li><nuxt-link to="/">ナビ</nuxt-link></li>
      <li><nuxt-link to="/">ナビ</nuxt-link></li>
      <li><nuxt-link to="/">ナビ</nuxt-link></li>
      <li><nuxt-link to="/">ナビ</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.tab ul {
  background: $color-gray-10;
  display: flex;
  justify-content: space-between;
  li {
    flex: 1;
    text-align: center;
    a {
      display: block;
      padding: $space;
      border: 2px solid transparent;
      border-right: none;
      border-left: none;
      &.is-current {
        border-bottom-color: $color-primary;
      }
    }
  }
}
</style>
