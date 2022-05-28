<template>
  <div class="card">
    <div class="card__image">
      <img src="https://placehold.jp/1080x360.png" alt="大会名" />
      <ul>
        <li><span>イカイベ公式</span></li>
        <li><span>募集中</span></li>
      </ul>
    </div>
    <div class="card__text">
      <p>大会名</p>
      <dl>
        <dt>募集期間</dt>
        <dd>YYYY/MM/DD〜YYYY/MM/DD</dd>
        <dt>開催日時</dt>
        <dd>YYYY/MM/DD</dd>
        <dt>募集数</dt>
        <dd>128チーム</dd>
        <dt>主催</dt>
        <dd>イカイベ運営チーム</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.card {
  background: $color-gray-08;
  border-radius: $space;
  overflow: hidden;
  max-width: 240px;
  &__image {
    position: relative;
    img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16 / 9;
    }
    ul {
      position: absolute;
      top: $space-small;
      right: $space-small;
      display: flex;
      gap: $space-small;
    }
  }
  &__text {
    padding: $space;
    p {
      font-size: $font-large;
    }
    dl {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: $space-xsmall 0;
      dt,
      dd {
        font-size: $font-xsmall;
      }
      dt {
        color: $color-gray-05;
        width: 5em;
      }
      dd {
        width: calc(100% - 5em);
      }
    }
  }
}
</style>
