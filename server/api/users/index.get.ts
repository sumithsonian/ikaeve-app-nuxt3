export default defineEventHandler((event) => {
  const query = useQuery(event)
  const users = []

  const names = [
    'イカイベ管理者',
    '大会運営管理者',
    '大会運営メンバー',
    'プレイヤーチーム管理者',
    'プレイヤーチームメンバー',
    'A（一般ユーザー）',
    'B（一般ユーザー）',
    'C（一般ユーザー）',
    'D（一般ユーザー）',
    'E（一般ユーザー）',
  ]

  for (let i = 1; i <= 10; i++) {
    users.push({
      kind: 'user',
      id: i,
      name: names[i - 1],
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
      is_administrator: i === 1,
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
    })
  }

  return { data: users }
})
