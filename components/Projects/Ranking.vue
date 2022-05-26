<template>
  <table class="ranking">
    <thead>
      <tr>
        <th>ランク</th>
        <th>プレイヤー</th>
        <th>ポイント</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="ranking__rank">
          <span class="material-icons"> arrow_upward </span>1
        </th>
        <td class="ranking__player"><ProjectsPlayer /></td>
        <td class="ranking__number">2000</td>
      </tr>
      <tr>
        <th class="ranking__rank">
          <span class="material-icons"> arrow_downward </span>2
        </th>
        <td class="ranking__player"><ProjectsPlayer /></td>
        <td class="ranking__number">2000</td>
      </tr>
      <tr>
        <th class="ranking__rank">
          <span class="material-icons"> arrow_forward </span>3
        </th>
        <td class="ranking__player"><ProjectsPlayer /></td>
        <td class="ranking__number">2000</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.ranking {
  width: 100%;
  th,td {
    padding: $space-small;
    vertical-align: middle;
  }
  &__number {
    text-align: right;
  }
}
</style>
