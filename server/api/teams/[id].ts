export default defineEventHandler((event) => {
  const i = 1

  return {
    data: {
      kind: 'team',
      id: i,
      type: i < 3 ? 'player' : 'organizer',
      name: `チーム${i}`,
      image_url: '',
      background_url: '',
      comment: '',
      twitter_url: '',
      discord_url: '',
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
      representatived_user: {
        id: 1,
        name: 'ほげ',
        friend_code: Math.random().toString(32).substring(2),
      },
    },
  }
})
