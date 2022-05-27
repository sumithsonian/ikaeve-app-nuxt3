<template>
  <div class="filter">
    <ul>
      <li>
        <span class="material-icons"> filter_alt </span>
      </li>
      <li>
        <ElementsTag tag="button" class="-xsmall is-active"
          >フィルタ</ElementsTag
        >
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
        <ElementsTag tag="button" class="-xsmall">フィルタ</ElementsTag>
        <ElementsFormSelect> 新着順 </ElementsFormSelect>
        <ElementsDropdown> Splatoon 3 </ElementsDropdown>
        <ElementsDropdown> 2022 </ElementsDropdown>
        <ElementsDropdown> 春シーズン </ElementsDropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.filter ul {
  background: $color-gray-10;
  display: flex;
  padding: $space-small;
  gap: $space-small;
  align-items: center;
}
</style>
