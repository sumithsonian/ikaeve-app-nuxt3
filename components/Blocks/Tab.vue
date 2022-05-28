<template>
  <div class="tab">
    <ul>
      <slot />
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
  ::v-deep(li) {
    flex: 1;
    text-align: center;
    a {
      display: block;
      padding: $space;
      border: 2px solid transparent;
      border-right: none;
      border-left: none;
      &.router-link-active {
        border-bottom-color: $color-primary;
      }
    }
  }
}
</style>
