<template>
  <BlocksFilter>
    <li>
      <ElementsFormSelect :items="gameTitles" v-model="localValue.game_title" />
    </li>
    <li>
      <ElementsFormSelect :items="years" v-model="localValue.year" />
    </li>
    <li>
      <ElementsFormSelect :items="seasons" v-model="localValue.season" />
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
      gameTitles: [
        { value: 'splatoon_3', name: 'Splatoon 3' },
        { value: 'splatoon_2', name: 'Splatoon 2' },
      ],
      years: [{ value: 2022, name: 2022 }],
      seasons: [
        { value: 'early_spring', name: '初春シーズン' },
        { value: 'spring', name: '春シーズン' },
        { value: 'summer', name: '夏シーズン' },
        { value: 'autumn', name: '秋シーズン' },
        { value: 'annual', name: '年間' },
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
