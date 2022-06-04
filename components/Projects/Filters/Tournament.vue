<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ElementsTag tag="button" class="-xsmall is-active">全て</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">募集中</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">開催中</ElementsTag>
      <ElementsTag tag="button" class="-xsmall">終了</ElementsTag>
    </li>
    <li>
      <ElementsFormSelect v-model="localValue.sort" :items="sorts" />
    </li>
  </BlocksFilter>
</template>

<script>
export default {
  props: {
    modelValue: { type: Object, default: null },
  },
  data() {
    return {
      sorts: [
        { value: null, name: '新着順' },
        { value: 'popular', name: '人気順' },
        { value: 'udemae', name: 'ウデマエ順' },
      ],
    }
  },
  computed: {
    localValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>
