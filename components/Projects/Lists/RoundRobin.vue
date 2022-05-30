<template>
  <div>
    <BlocksRoundRobinTable>
      <template #thead>
        <tr v-for="(rows, i) of thead" :key="i">
          <component :is="col.tag" v-for="(col, b) of rows.cols" :key="i">{{
            col.value
          }}</component>
        </tr>
      </template>
      <template #tbody>
        <tr v-for="(rows, i) of tbody" :key="i">
          <component :is="col.tag" v-for="(col, b) of rows.cols" :key="i">
            <ElementsPlayer
              :name="col.attr.name"
              :image-url="col.attr.image_url"
              v-if="col.tag === 'th'"
            />
            <template v-else> {{ col.value }} </template>
          </component>
        </tr>
      </template>
    </BlocksRoundRobinTable>
  </div>
</template>

<script>
export default {
  props: {
    teams: { type: Array, default: null },
  },
  computed: {
    thead() {
      const rows = []
      const cols = []
      cols.push({ tag: 'th', value: '' })

      this.teams.forEach((team) => {
        cols.push({ tag: 'th', value: team.team.name })
      })

      cols.push({ tag: 'th', value: '勝敗' })
      cols.push({ tag: 'th', value: '順位' })

      rows.push({
        cols,
      })

      return rows
    },
    tbody() {
      const rows = []

      this.teams.forEach((team) => {
        const cols = []
        cols.push({
          tag: 'th',
          value: team.team.name,
          attr: { name: team.team.name, image_url: team.team.image_url },
        })

        this.teams.forEach((team2) => {
          // 自チーム
          if (team.team.name === team2.team.name) {
            cols.push({ tag: 'td', value: '' })
          }
          // 他チーム
          else {
            const match = team.matchs.find(
              (match) => match.opponent_team.name === team2.team.name,
            )
            if (match.win > 0 || match.lose > 0) {
              cols.push({ tag: 'td', value: `${match.win} - ${match.lose}` })
            } else {
              cols.push({ tag: 'td', value: '報告' })
            }
          }
        })

        cols.push({ tag: 'td', value: `${team.win}勝${team.lose}敗` })
        cols.push({ tag: 'td', value: `${team.rank}位` })

        rows.push({
          cols,
        })
      })

      return rows
    },
  },
}
</script>
