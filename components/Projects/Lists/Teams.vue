<template>
  <BlocksListTable>
    <template #thead>
      <tr>
        <th v-if="th">{{ th }}</th>
        <th>チーム</th>
        <th>代表プレイヤー</th>
        <th>フレンドコード</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, i) of items" :key="item.id">
        <th v-if="th">1</th>
        <td>
          <nuxt-link :to="`/teams/${item.id}/`"
            ><BlocksPlayer :item="item"
          /></nuxt-link>
        </td>
        <td>{{ item.representatived_user.name }}</td>
        <td>{{ item.representatived_user.friend_code }}</td>
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
      if (this.kind === 'result') {
        return '順位'
      } else if (this.kind === 'list') {
        return null
      } else {
        return 'No.'
      }
    },
  },
}
</script>
