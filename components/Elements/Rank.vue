<template>
  <div class="icon">
    <ElementsIcon :class="class"> {{ icon }} </ElementsIcon>
    <span><slot /></span>
  </div>
</template>

<script>
export default {
  props: {
    position: { type: String, default: 'keep' },
  },
  computed: {
    icon() {
      if (this.position === 'up') {
        return 'arrow_upward'
      } else if (this.position === 'down') {
        return 'arrow_downward'
      } else {
        return 'arrow_forward'
      }
    },
    class() {
      return `-${this.position}`
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.icon {
  display: inline-flex;
  align-items: center;
  gap: $space-xsmall;
  .-up {
    color: $color-up;
  }
  .-down {
    color: $color-down;
  }
}
</style>
