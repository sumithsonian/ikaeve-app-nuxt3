<template>
  <BlocksListTable>
    <template #thead>
      <tr>
        <th>No.</th>
        <th>ステージ</th>
        <th>ブロック</th>
        <th>試合</th>
        <th>対戦チーム</th>
        <th>ステータス</th>
      </tr>
    </template>
    <template #tbody>
      <tr v-for="(item, i) of items" :key="item.id">
        <th>{{ i + 1 }}</th>
        <td>{{ item.stage }}</td>
        <td>{{ item.block }}</td>
        <td>第{{ item.match }}試合</td>
        <td>{{ item.alpha_team.name }} vs {{ item.bravo_team.name }}</td>
        <td>{{ item.status }}</td>
      </tr>
    </template>
  </BlocksListTable>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: null },
  },
}
</script>
