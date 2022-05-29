<template>
  <BlocksListTable>
    <template #thead>
      <tr>
        <th v-if="th">{{ th }}</th>
        <th>プレイヤー</th>
        <th>ポイント</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, i) of items" :key="item.id">
        <th v-if="th">
          <ElementsRank :position="item.ranks.position">{{
            i + 1
          }}</ElementsRank>
        </th>
        <td>
          <nuxt-link :to="`/players/${item.id}/`"
            ><ElementsPlayer
              :name="item.name"
              :image-url="item.image_url"
              :twitter-url="item.twitter_url"
          /></nuxt-link>
        </td>
        <td>{{ item.points.season }}</td>
      </tr>
    </template>
  </BlocksListTable>
</template>

<script>
export default {
  props: {
    kind: { type: String, default: null },
    items: { type: Array, default: null },
  },
  computed: {
    th() {
      if (this.kind === 'ranking') {
        return 'ランク'
      } else if (this.kind === 'list') {
        return null
      } else {
        return 'No.'
      }
    },
  },
}
</script>
