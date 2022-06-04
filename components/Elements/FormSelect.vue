<template>
  <div class="formSelect">
    <button class="formSelect__actionBtn" @click.stop="doFormSelect">
      {{ selectedItem.name }}<ElementsIcon> unfold_more </ElementsIcon>
    </button>
    <div v-if="isActive" class="formSelect__contents">
      <ul>
        <li v-for="(item, i) of items" :key="i">
          <button @click="selectItem(i)">{{ item.name }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: [String, Number], default: null },
    items: { type: Array, default: [] },
  },
  data() {
    return {
      isActive: false,
      selectedItem:
        this.items.find((item) => (item.value === this.modelValue)) ||
        this.items[0],
    }
  },
  methods: {
    doFormSelect() {
      this.isActive = !this.isActive
    },
    hideFormSelect() {
      this.isActive = false
    },
    selectItem(i) {
      this.selectedItem = this.items[i]
      this.$emit('update:modelValue', this.items[i].value)
    },
  },
  mounted() {
    window.addEventListener('click', this.hideFormSelect)
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideFormSelect)
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.formSelect {
  position: relative;

  &__actionBtn {
    font-size: $font-small;
    display: inline-flex;
    align-items: center;
  }
  &__contents {
    z-index: 1;
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
