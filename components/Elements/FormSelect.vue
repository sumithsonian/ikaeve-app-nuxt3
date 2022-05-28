<template>
  <button class="formSelect">
    <slot /><ElementsIcon> unfold_more </ElementsIcon>
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
