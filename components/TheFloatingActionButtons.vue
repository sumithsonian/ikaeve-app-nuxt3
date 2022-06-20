<template>
  <div class="floatingActionButtons">
    <ul>
      <li>
        <ElementsButton class="-circle -withText"
          ><span class="material-icons"> ios_share </span
          ><ElementsText class="-xxsmall">シェア</ElementsText></ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-circle -primary -withText" to="/teams/create"
          ><span class="material-icons"> add </span
          ><ElementsText class="-xxsmall"
            >チーム<br />作成</ElementsText
          ></ElementsButton
        >
      </li>
      <li>
        <ElementsButton
          class="-circle -primary -withText"
          to="/tournaments/create"
          ><span class="material-icons"> add </span
          ><ElementsText class="-xxsmall"
            >大会作成</ElementsText
          ></ElementsButton
        >
      </li>
      <li>
        <ElementsButton
          class="-circle -primary -withText"
          to="/tournament-series/create"
          ><span class="material-icons"> add </span
          ><ElementsText class="-xxsmall"
            >シリーズ<br />作成</ElementsText
          ></ElementsButton
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
.floatingActionButtons {
  position: fixed;
  right: $space;
  bottom: $space;
  ul {
    display: flex;
    flex-direction: column;
    gap: $space-small;
  }
}
</style>
