export default defineEventHandler((event) => {
  const blocks = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'AA',
    'AA',
    'AB',
    'AC',
    'AD',
    'AE',
    'AF',
    'AG',
    'AH',
    'AI',
    'AJ',
    'AK',
    'AL',
    'AM',
    'AN',
    'AO',
    'AP',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AV',
    'AW',
    'AX',
    'AY',
    'AZ',
  ]

  /**
   * 予選
   * 128チームで予選、4チームリーグ戦、予選通過2チーム
   * 128 / 4
   *
   * 決勝
   * 64チームで決勝
   */

  const team_num = 128 // 総チーム数
  const max_team_num = 4 // 1ブロックの総チーム
  const block_num = team_num / max_team_num // ブロック数: 32
  const teams = ['Team AORI', 'Team HOTARU', 'Team HIME', 'Team IIDA']

  const matchs = []

  // ブロック
  let i = 1
  for (let block = 1; block <= block_num; block++) {
    const alphaTeams = JSON.parse(JSON.stringify(teams)) // 参照渡し回避
    let bravoTeams = JSON.parse(JSON.stringify(teams)) // 参照渡し回避
    let j = 1

    alphaTeams.forEach((alphaTeam) => {
      bravoTeams = bravoTeams.filter((team) => team !== alphaTeam) // alphaTeamを削除
      bravoTeams.forEach((bravoTeam) => {
        matchs.push({
          kind: 'match',
          id: i,
          stage: '予選',
          block: blocks[block - 1],
          round: null,
          match: j,
          alpha_team_result: 0,
          bravo_team_result: 0,
          created_at: '2022-09-09 09:00',
          updated_at: '2022-09-09 09:00',
          status: '試合開始前',
          alpha_team: {
            name: alphaTeam,
          },
          bravo_team: {
            name: bravoTeam,
          },
        })
        i++
        j++
      })
    })
  }

  return { data: matchs }
})
