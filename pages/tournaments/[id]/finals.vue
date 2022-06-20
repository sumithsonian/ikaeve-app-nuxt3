<template>
  <div>
    <BlocksIndexNav />
    <BlocksHeading>勝者サイド</BlocksHeading>
    <BlocksTournamentBracket :rounds="rounds" />
    <BlocksHeading>敗者サイド</BlocksHeading>
    <BlocksTournamentBracket :rounds="rounds" />
  </div>
</template>

<script setup>
const route = useRoute()
const title = '本戦'
useHead({
  title: title,
})
</script>

<script>
const rounds = [
  //Semi finals
  {
    matchs: [
      {
        id: 1,
        next: 5,
        alpha: {
          id: '1',
          name: 'チームチームチームチームチーム 1',
          win: 2,
          is_winner: true,
        },
        bravo: { id: '4', name: 'チーム 4', win: 2, is_winner: false },
      },
      {
        id: 2,
        next: 5,
        alpha: { id: '1', name: 'チーム 1', win: 2, is_winner: false },
        bravo: { id: '4', name: 'チーム 4', win: 2, is_winner: true },
      },
      {
        id: 3,
        next: 6,
        alpha: { id: '1', name: 'チーム 1', win: 2, is_winner: false },
        bravo: { id: '4', name: 'チーム 4', win: 2, is_winner: true },
      },
      {
        id: 4,
        next: 6,
        alpha: { id: '5', name: 'チーム 5', win: 2, is_winner: false },
        bravo: { id: '8', name: 'チーム 8', win: 2, is_winner: true },
      },
    ],
  },
  {
    matchs: [
      {
        id: 5,
        next: 7,
        alpha: { id: '1', name: 'チーム 1', win: 2, is_winner: false },
        bravo: { id: '4', name: 'チーム 4', win: 2, is_winner: true },
      },
      {
        id: 6,
        next: 7,
        alpha: { id: '5', name: 'チーム 5', win: 2, is_winner: false },
        bravo: { id: '8', name: 'チーム 8', win: 2, is_winner: true },
      },
    ],
  },
  //Final
  {
    matchs: [
      {
        id: 7,
        next: null,
        alpha: { id: '4', name: 'チーム 4', win: 0, is_winner: false },
        bravo: { id: '8', name: 'チーム 8', win: 0, is_winner: false },
      },
    ],
  },
]

export default {
  data() {
    return {
      rounds: rounds,
    }
  },
}
</script>
