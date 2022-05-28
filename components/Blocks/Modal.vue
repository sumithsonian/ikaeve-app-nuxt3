<template>
  <div class="modal">
    <div class="modal__actions">
      <button><ElementsIcon>close</ElementsIcon></button>
    </div>
    <div class="modal__contents">
      <BlocksHeading>見出し</BlocksHeading>
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.modal {
  margin: $space;
  &__actions {
    text-align: right;
  }
  &__contents {
    background: $color-gray-09;
    padding: $space;
    border-radius: $radius;
    box-shadow: 0 0 $space rgba(0, 0, 0, 0.4);
  }
}
</style>
