<template>
  <div class="hero">
    <div class="hero__text">
      <h3 class="hero__text__title">{{ name }}</h3>
      <ElementsAvatar
        v-if="imageUrl"
        class="-xlarge hero__text__avatar"
        :name="name"
        :image-url="imageUrl"
      />
      <ul class="hero__text__actions">
        <li v-if="twitterUrl">
          <nuxt-link :to="twitterUrl" target="_blank">
            <img
              src="@/assets/images/logo_twitter.svg"
              alt="Twitter"
              height="24"
            />
          </nuxt-link>
        </li>
        <li v-if="discordUrl">
          <nuxt-link :to="discordUrl" target="_blank">
            <img
              src="@/assets/images/logo_discord.svg"
              alt="Discord"
              height="24"
            />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div
      class="hero__image"
      :style="`background-image: url('${backgroundImageUrl}')`"
    >
      <ul v-if="tags" class="hero__image__tags">
        <li v-for="(tag, i) of tags" :key="i">
          <ElementsTag class="-xsmall -tip">{{ tag.name }}</ElementsTag>
        </li>
      </ul>
      <ul class="hero__image__actions">
        <li>
          <button @click="$router.go(-1)">
            <ElementsIcon> arrow_back_ios </ElementsIcon>
          </button>
        </li>
        <li>
          <nuxt-link v-if="detailUrl" :to="`${detailUrl}/edit`"
            ><ElementsIcon> settings </ElementsIcon></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    imageUrl: { type: String, default: null },
    backgroundImageUrl: { type: String, default: null },
    twitterUrl: { type: String, default: null },
    discordUrl: { type: String, default: null },
    detailUrl: { type: String, default: null },
    tags: { type: Array, default: null },
  },
}
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
    aspect-ratio: 3 / 1;
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
