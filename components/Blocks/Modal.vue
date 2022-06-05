<template>
  <div class="modal">
    <BlocksOverlay @click="close" />
    <div class="modal__wrapper">
      <div class="modal__wrapper__actionBtns">
        <button @click="close"><ElementsIcon>close</ElementsIcon></button>
      </div>
      <div class="modal__wrapper__contents">
        <BlocksHeading><slot name="heading" /></BlocksHeading>
        <slot name="contents" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close-from-child')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.modal {
  &__wrapper {
    position: fixed;
    max-width: 640px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__actionBtns {
      text-align: right;
    }
    &__contents {
      background: $color-gray-09;
      padding: $space;
      border-radius: $radius;
      box-shadow: 0 0 $space rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
