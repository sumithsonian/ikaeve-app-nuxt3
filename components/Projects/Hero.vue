<template>
  <div class="hero">
    <div class="hero__text">
      <h3 class="hero__text__title">大会名</h3>
      <ElementsAvatar class="-xlarge hero__text__avatar" />
      <ul class="hero__text__actions">
        <li>
          <button><span class="material-icons"> link </span></button>
        </li>
        <li>
          <button><span class="material-icons"> link </span></button>
        </li>
      </ul>
    </div>
    <div
      class="hero__image"
      style="background-image: url('https://placehold.jp/150x150.png')"
    >
      <ul class="hero__image__tags">
        <li><span>イカイベ公式</span></li>
        <li><span>募集中</span></li>
      </ul>
      <ul class="hero__image__actions">
        <li>
          <nuxt-link href="/"
            ><span class="material-icons"> arrow_back_ios </span></nuxt-link
          >
        </li>
        <li>
          <nuxt-link href="/"
            ><span class="material-icons"> settings </span></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.hero {
  display: flex;
  flex-direction: column-reverse;
  &__text {
    display: flex;
    flex-direction: column-reverse;
    background: $color-gray-10;
    position: relative;
    &__avatar {
      margin: calc($img-xlarge * -1 / 2) 0 0 $space;
      z-index: 1;
    }
    &__title {
      margin: $space;
      font-size: $font-large;
    }
    &__actions {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 0;
      right: 0;
      padding: $space-small;
      gap: $space-small;
    }
  }
  &__image {
    background-size: cover;
    aspect-ratio: 24 / 9;
    position: relative;
    &__tags {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
      gap: $space-small;
      padding: $space-small;
    }
    &__actions {
      width: 100%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 0;
      padding: $space-small;
      box-sizing: border-box;
    }
  }
}
</style>
