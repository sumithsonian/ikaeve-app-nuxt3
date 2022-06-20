<template>
  <BlocksFilter>
    <li>
      <ElementsIcon> filter_alt </ElementsIcon>
      <ul>
        <li v-for="(filterGroup, i) of filterGroups" :key="i">
          <ElementsTag
            v-for="(filter, i) of filterGroup"
            :key="i"
            @click="
              filter.key === null
                ? resetFilter()
                : selectFilter(filter.key, filter.value)
            "
            tag="button"
            class="-xsmall"
            :class="{ 'is-active': isActive(filter.key, filter.value) }"
            >{{ filter.name }}</ElementsTag
          >
        </li>
      </ul>
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
        { value: 'udemae', name: 'ウデマエ順' },
        { value: 'point', name: 'ポイント順' },
      ],
      filterGroups: [
        [{ key: null, value: null, name: '全て' }],
        [{ key: 'is_recruited', value: true, name: 'メンバー募集中' }],
        [
          { key: 'team_kind', value: 'player_team', name: 'プレイヤーチーム' },
          { key: 'team_kind', value: 'organizer', name: '主催団体' },
        ],
        [
          { key: 'atmospheres', value: 'serious', name: 'ガチ' },
          { key: 'atmospheres', value: 'enjoy', name: 'エンジョイ' },
        ],
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
  methods: {
    selectFilter(key, value) {
      if (this.localValue[key] === value) {
        this.localValue[key] = null
      } else {
        this.localValue[key] = value
      }
    },
    resetFilter() {
      Object.keys(this.localValue).forEach((key) => {
        if (key === 'sort' || key === 'page') {
          return
        }
        this.localValue[key] = null
      })
    },
    isActive(key, value) {
      if (key === null) {
        return (
          this.localValue.is_recruited === null &&
          this.localValue.team_kind === null &&
          this.localValue.atmospheres === null
        )
      } else {
        return this.localValue[key] === value
      }
    },
  },
}
</script>
