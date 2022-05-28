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
      <tr>
        <th v-if="th"><ElementsIcon> arrow_upward </ElementsIcon>1</th>
        <td><nuxt-link to="/players/1"><BlocksPlayer /></nuxt-link></td>
        <td>2000</td>
      </tr>
      <tr>
        <th v-if="th"><ElementsIcon> arrow_downward </ElementsIcon>2</th>
        <td><nuxt-link to="/players/1"><BlocksPlayer /></nuxt-link></td>
        <td>2000</td>
      </tr>
      <tr>
        <th v-if="th"><ElementsIcon> arrow_forward </ElementsIcon>3</th>
        <td><nuxt-link to="/players/1"><BlocksPlayer /></nuxt-link></td>
        <td>2000</td>
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
