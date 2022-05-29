<template>
  <div>
    <BlocksIndexNav />
    <section v-for="block of ['A', 'B', 'C', 'D', 'E']" :key="block">
      <BlocksHeading>{{ block }}ブロック</BlocksHeading>
      <BlocksMatcheTable>
        <template #thead>
          <tr>
            <th></th>
            <th>Aチーム</th>
            <th>Bチーム</th>
            <th>Cチーム</th>
            <th>Dチーム</th>
            <th>勝敗</th>
            <th>順位</th>
          </tr>
        </template>
        <template #tbody>
          <tr>
            <th><BlocksPlayer /></th>
            <td></td>
            <td>2-1</td>
            <td>2-1</td>
            <td>2-1</td>
            <td>2勝1敗</td>
            <td>1位</td>
          </tr></template
        >
      </BlocksMatcheTable>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const title = '予選｜大会'
useHead({
  title: title,
})
</script>
