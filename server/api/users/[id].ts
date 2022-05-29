export default defineEventHandler((event) => {
  const i = 1

  return {
    data: {
      kind: 'user',
      id: i,
      name: `プレイヤー${i}さん`,
      image_url: 'https://placehold.jp/150x150.png',
      background_image_url: 'https://placehold.jp/1080x360.png',
      comment:
        '自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。',
      twitter_url: 'https://twitter.com/splatoonJP',
      friend_code: Math.random().toString(32).substring(2),
      points: {
        season: Math.floor(Math.random() * 10) * 10,
        annual: Math.floor(Math.random() * 100) * 10,
      },
      ranks: {
        rank: i,
        position: 'keep',
      },
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
    },
  }
})
