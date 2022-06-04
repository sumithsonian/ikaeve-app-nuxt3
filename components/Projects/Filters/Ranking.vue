<template>
  <BlocksFilter>
    <li><ElementsDropdown :items="gameTitles" /></li>
    <li>
      <ElementsDropdown :items="years" />
    </li>
    <li>
      <ElementsDropdown :items="seasons" />
    </li>
  </BlocksFilter>
</template>

<script>
export default {
  data() {
    return {
      gameTitles: ['Splatoon 3', 'Splatoon 2'],
      years: ['2022'],
      seasons: [
        '初春シーズン',
        '春シーズン',
        '夏シーズン',
        '秋シーズン',
        '年間',
      ],
    }
  },
}
</script>
