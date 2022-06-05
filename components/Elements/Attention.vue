<template>
  <div class="attention">
    <ElementsIcon>report</ElementsIcon>
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.attention {
  border: 1px solid $color-gray-07;
  display: flex;
  padding: $space;
  gap: $space-small;
  color: $color-gray-05;
}
</style>
