<template>
  <ul class="list">
    <slot />
  </ul>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.list {
  display: flex;
  margin: $space;
  gap: $space;
  flex-wrap: wrap;
  flex-direction: column;

  &.-disc {
    gap: 0;
    ::v-deep(li) {
      list-style: disc;
      margin-left: 1.5em;
    }
  }
  &.-decimal {
    gap: 0;
    ::v-deep(li) {
      list-style: decimal;
      margin-left: 1.5em;
    }
  }

  &.-horizontal {
    flex-wrap: wrap;
    flex-direction: row;
  }
  &.-center {
    justify-content: center;
    align-items: center;
  }
  &.-right {
    justify-content: end;
  }
}
</style>
