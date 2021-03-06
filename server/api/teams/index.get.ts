export default defineEventHandler((event) => {
  const query = useQuery(event)
  const teams = []

  for (let i = 1; i <= 5; i++) {
    teams.push({
      kind: 'team',
      id: i,
      type: i < 3 ? 'player' : 'organizer',
      name: `チーム${i}`,
      image_url: 'https://placehold.jp/150x150.png',
      background_image_url: 'https://placehold.jp/1080x360.png',
      comment:
        '紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文。',
      twitter_url: 'https://twitter.com/splatoonJP',
      discord_url: 'https://discord.com/',
      owner_user: {
        id: i,
        name: 'ほげ',
        friend_code: Math.random().toString(32).substring(2),
      },
      member_users: [
        {
          id: i,
          name: 'ほげ',
          friend_code: Math.random().toString(32).substring(2),
        },
        {
          id: i + 1,
          name: 'ほげ',
          friend_code: Math.random().toString(32).substring(2),
        },
        {
          id: i + 2,
          name: 'ほげ',
          friend_code: Math.random().toString(32).substring(2),
        },
        {
          id: i + 3,
          name: 'ほげ',
          friend_code: Math.random().toString(32).substring(2),
        },
      ],
      points: {
        season: Math.floor(Math.random() * 10) * 10,
        annual: Math.floor(Math.random() * 100) * 10,
      },
      is_owner: true,
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
    })
  }

  return { data: teams }
})
