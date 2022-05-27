<template>
  <button class="formSelect">
    <slot /><span class="material-icons"> unfold_more </span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.formSelect {
  font-size: $font-small;
  display: inline-flex;
  align-items: center;
}
</style>
