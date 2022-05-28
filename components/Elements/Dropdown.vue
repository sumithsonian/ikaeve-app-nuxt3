<template>
  <button class="dropdown">
    <slot /><ElementsIcon> keyboard_arrow_down </ElementsIcon>
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
