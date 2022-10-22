export default defineEventHandler((event) => {
  const query = useQuery(event)
  const tournaments = []

  const enStatuses = ['recruiting', 'recruitment_closed', 'open', 'close']
  const statuses = ['募集中', '募集締切', '開催中', '終了']

  for (let i = 1; i <= 6; i++) {
    tournaments.push({
      kind: 'tournament',
      id: i,
      name: `第${i}回○○杯`,
      background_image_url: 'https://placehold.jp/1080x360.png',
      started_at: '2022-09-09 09:00',
      ended_at: '2022-09-09 09:00',
      opened_at: '2022-09-09 09:00',
      closed_at: '2022-09-09 09:00',
      description:
        '大会概要がはいります。大会概要がはいります。大会概要がはいります。大会概要がはいります。大会概要がはいります。大会概要がはいります。',
      game_title: 'splatoon_2',
      series_id: null,
      team_id: 1,
      streaming_url: null,
      team_num_min: 16,
      team_num_max: 128,
      member_num: 4,
      status: enStatuses[(i - 1) % 4],
      tags: [{ name: 'イカイベ公認' }, { name: statuses[(i - 1) % 4] }],
      series: {
        id: 1,
      },
      team: {
        kind: 'team',
        id: i,
        name: `チーム${i}`,
        image_url: 'https://placehold.jp/150x150.png',
        background_image_url: 'https://placehold.jp/1080x360.png',
        owner_user: {
          id: 1,
        },
      },
      rules: {
        qualifying: {
          system: 'リーグ戦（ラウンドロビン）',
          first_to: 2,
          pass_order: 2,
          rules: {
            1: 'ヒメヤグラ・おまかせロスト',
            2: 'ナワバリ・おまかせロスト',
            3: 'ホコ・おまかせロスト',
          },
        },
        finals: {
          system: 'シングルエリミネーション',
          first_to: 2,
          rules: {
            1: 'ヒメヤグラ・おまかせロスト',
            2: 'ナワバリ・おまかせロスト',
            3: 'ホコ・おまかせロスト',
          },
        },
        final: {
          first_to: 3,
          rules: {
            1: 'ヒメヤグラ・おまかせロスト',
            2: 'ナワバリ・おまかせロスト',
            3: 'ホコ・おまかせロスト',
          },
        },
      },
      questions: ['イキゴミ', '好きなブキ'],
      tear: ((i - 1) % 4) + 1,
      distribution_point: 192,
      is_owner: i === 1,
      is_entered: i === 1,
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
    })
  }

  return { data: tournaments }
})
