<template>
  <div class="filter">
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
.filter ul {
  background: $color-gray-10;
  display: flex;
  padding: $space-small;
  gap: $space-small;
  align-items: center;
  justify-content: space-between;
  ::v-deep(li) {
    display: flex;
    gap: $space-small;

    > ul {
      display: flex;
      gap: $space-small;
    }
  }
}
</style>
