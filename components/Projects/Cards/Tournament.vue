<template>
  <BlocksList class="tournaments -horizontal">
    <li v-for="item of items" :key="item.id">
      <ElementsCard :to="`/tournaments/${item.id}/`">
        <template #image>
          <img :src="item.background_image_url" :alt="item.name" />
          <ul>
            <li v-for="(tag, i) of item.tags" :key="i">
              <ElementsTag class="-xxsmall -tip">{{ tag.name }}</ElementsTag>
            </li>
          </ul>
        </template>
        <template #text>
          <p>{{ item.name }}</p>
          <dl>
            <dt>募集期間</dt>
            <dd>{{ item.started_at }} 〜 {{ item.ended_at }}</dd>
            <dt>開催日時</dt>
            <dd>{{ item.opened_at }} 〜 {{ item.closed_at }}</dd>
            <dt>募集数</dt>
            <dd>
              {{ item.team_num_min }} 〜 {{ item.team_num_max }}（1チーム：{{
                item.member_num
              }}名）
            </dd>
            <dt>主催</dt>
            <dd>{{ item.team.name }}</dd>
          </dl>
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
.tournaments {
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
