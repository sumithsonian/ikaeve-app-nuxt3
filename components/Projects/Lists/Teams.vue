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
      <tr>
        <th v-if="th">1</th>
        <td><nuxt-link to="/teams/1"><BlocksPlayer /></nuxt-link></td>
        <td>プレイヤー名</td>
        <td>フレンドコード</td>
      </tr>
      <tr>
        <th v-if="th">1</th>
        <td><nuxt-link to="/teams/1"><BlocksPlayer /></nuxt-link></td>
        <td>プレイヤー名</td>
        <td>フレンドコード</td>
      </tr>
      <tr>
        <th v-if="th">1</th>
        <td><nuxt-link to="/teams/1"><BlocksPlayer /></nuxt-link></td>
        <td>プレイヤー名</td>
        <td>フレンドコード</td>
      </tr>
    </template>
  </BlocksListTable>
</template>

<script>
export default {
  props: {
    kind: { type: String, default: null },
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
