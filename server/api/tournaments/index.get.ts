export default defineEventHandler((event) => {
  const query = useQuery(event)
  const users = []

  const names = [
    'エリア杯',
    'ヤグラ杯',
    'S.World ChampionShip',
    'ベストイカップル杯',
  ]
  const images = [
    'https://d3r48p4ajaoh51.cloudfront.net/production/uploads/event/image/10727/8323f55f-5670-41a0-82fd-7ae39f1ce618.jpg',
    'https://d3r48p4ajaoh51.cloudfront.net/production/uploads/event/image/10727/8323f55f-5670-41a0-82fd-7ae39f1ce618.jpg',
    'https://d3r48p4ajaoh51.cloudfront.net/production/uploads/event/image/11299/47c732bc-625b-4f5f-b498-e07300f4f784.jpg',
    'https://d3r48p4ajaoh51.cloudfront.net/production/uploads/event/image/11036/527f2e78-749e-41d3-b037-717a7e9eec64.jpg',
  ]

  for (let i = 1; i <= 4; i++) {
    users.push({
      kind: 'tournament_series',
      id: i,
      name: names[i - 1],
      background_image_url: images[i - 1],
      description:
        '紹介文がはいります。紹介文がはいります。紹介文がはいります。紹介文がはいります。紹介文がはいります。紹介文がはいります。紹介文がはいります。',
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
      tier: 1,
      is_owner: i === 1,
      created_at: '2022-07-21 09:00',
      updated_at: '2022-07-21 09:00',
    })
  }

  return { data: users }
})
