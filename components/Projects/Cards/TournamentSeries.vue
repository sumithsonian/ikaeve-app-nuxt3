<template>
  <BlocksList class="tournamentSeries -horizontal">
    <li v-for="item of items" :key="item.id">
      <ElementsCard :to="`/tournament-series/${item.id}/`">
        <template #image>
          <img :src="item.background_image_url" :alt="item.name" />
        </template>
      </ElementsCard>
    </li>
  </BlocksList>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: null },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';
.tournamentSeries {
  margin: $space;
  > li {
    width: calc(50% - #{$space} / 2);
  }
  &.-scroll {
    > li {
      width: 60%;
      flex-shrink: 0;
    }
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
