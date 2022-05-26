<template>
  <button class="dropdown">
    <slot /><span class="material-icons"> keyboard_arrow_down </span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.dropdown {
  font-size: $font-small;
  display: inline-flex;
  align-items: center;
}
</style>
