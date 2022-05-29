export default defineEventHandler((event) => {
  const users = []

  for (let i = 1; i <= 5; i++) {
    users.push({
      id: i,
      name: `プレイヤー${i}さん`,
      image_url: '',
      background_url: '',
      comment:
        '自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。自己紹介文がはいります。',
      friend_code: Math.random().toString(32).substring(2),
      points: {
        season: Math.floor(Math.random() * 10) * 10,
        annual: Math.floor(Math.random() * 100) * 10,
      },
      ranks: {
        rank: i,
        position: 'keep',
      },
    })
  }

  return { data: users }
})
