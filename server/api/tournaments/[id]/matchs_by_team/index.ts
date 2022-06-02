export default defineEventHandler((event) => {
  const blocks = ['A', 'B', 'C']
  const teams = ['Team AORI', 'Team HOTARU', 'Team HIME', 'Team IIDA']

  const res = []

  blocks.forEach((block) => {
    teams.forEach((team) => {
      let opponentTeams = JSON.parse(JSON.stringify(teams)) // 参照渡し回避
      opponentTeams = opponentTeams.filter(
        (opponentTeam) => opponentTeam !== team,
      ) // 自チーム削除

      const matchs = []
      opponentTeams.forEach((opponentTeam) => {
        matchs.push({
          match: 1,
          win: 1,
          lose: 2,
          opponent_team: {
            name: opponentTeam,
            image_url: 'https://placehold.jp/150x150.png',
          },
          status: '試合開始前',
          created_at: '2022-09-09 09:00',
          updated_at: '2022-09-09 09:00',
        })
      })

      res.push({
        team: { name: team, image_url: 'https://placehold.jp/150x150.png' },
        block: block,
        matchs: matchs,
        win: 2,
        lose: 1,
        rank: 1,
      })
    })
  })

  return {
    data: res,
  }
})
