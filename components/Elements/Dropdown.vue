<template>
  <div class="dropdown">
    <button class="dropdown__actionBtns" @click.stop="doDropdown">
      {{ selectedItem }}<ElementsIcon> keyboard_arrow_down </ElementsIcon>
    </button>
    <div v-if="isActive" class="dropdown__contents">
      <ul>
        <li v-for="(item, i) of items" :key="i">
          <button @click="selectItem(i)">{{ item }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: [] },
  },
  data() {
    return {
      isActive: false,
      selectedItem: this.items[0],
    }
  },
  methods: {
    doDropdown() {
      this.isActive = !this.isActive
    },
    hideDropdown() {
      this.isActive = false
    },
    selectItem(i) {
      this.selectedItem = this.items[i]
    },
  },
  mounted() {
    window.addEventListener('click', this.hideDropdown)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideDropdown)
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.dropdown {
  position: relative;
  &__actionBtns {
    font-size: $font-small;
    display: inline-flex;
    align-items: center;
    padding: 0 $space;
  }
  &__contents {
    position: absolute;
    background: $color-gray-10;
    border-radius: $radius-small;
    box-shadow: 0 0 $space-large rgba(0, 0, 0, 0.4);
    li {
      border-bottom: 1px solid $color-gray-07;
      &:last-child {
        border: none;
      }
      button {
        white-space: nowrap;
        padding: $space;
      }
    }
  }
}
</style>
