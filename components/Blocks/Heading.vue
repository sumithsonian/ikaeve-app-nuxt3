<template>
  <h3><slot /></h3>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
h3 {
  font-size: $font;
  text-align: center;
  padding: $space;
  margin: $space-large $space $space;
  color: $color-gray-05;
}
</style>
