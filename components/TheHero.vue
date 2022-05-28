<template>
  <header>
    <h2>誰<span>が</span>トップ<span>か</span>決めなイカ!?</h2>
    <BlocksParagraph>
      <span>イカイベで</span><span>Splatoonの大会を開催したり、</span><br />
      <span>参加して一緒にトップを目指そう！</span>
    </BlocksParagraph>
    <BlocksList class="-horizontal -center">
      <li>
        <ElementsButton class="-primary -large" to="/tournaments/create"
          ><ElementsIcon> add </ElementsIcon><br /><span
            >大会を開催する</span
          ></ElementsButton
        >
      </li>
      <li>
        <ElementsButton class="-primary -large" to="/ranking/"
          ><ElementsIcon> insights </ElementsIcon><br /><span
            >ランキングをみる</span
          ></ElementsButton
        >
      </li>
    </BlocksList>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

header {
  background: $color-black;
  color: $color-black;
  padding: $space;
  text-align: center;
  h2,
  p {
    color: $color-white;
  }
  h2 {
    font-size: $font-xxlarge;
    span {
      font-size: $font-xlarge;
    }
  }
}
</style>
