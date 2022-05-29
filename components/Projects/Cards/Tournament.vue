<template>
  <BlocksList class="tournaments -horizontal">
    <li v-for="item of items" :key="item.id">
      <ElementsCard>
        <template #image>
          <img :src="item.background_image_url" :alt="item.name" />
          <ul>
            <li><span>イカイベ公式</span></li>
            <li><span>募集中</span></li>
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
}
</style>
