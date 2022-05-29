export default defineEventHandler((event) => {
  const i = 1

  return {
    data: {
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
      user_id: 1,
      team_id: 1,
      streaming_url: null,
      team_num_min: 16,
      team_num_max: 128,
      member_num: 4,
      status: '募集中',
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
      tags: [{ name: 'イカイベ公認' }, { name: '募集中' }],
    },
  }
})
