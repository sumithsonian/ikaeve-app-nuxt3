<template>
  <div class="tb">
    <div v-for="(round, i) of rounds" :key="i" class="tb__round">
      <div class="tb__round__title">{{ i + 1 }}回戦</div>
      <div class="tb__round__contents">
        <div
          v-for="(match, j) of round.matchs"
          class="tb__round__contents__match"
          :key="j"
        >
          <table :ref="`from_${match.id}_to_${match.next}`" :id="match.id">
            <tr :class="{ 'is-winner': match.alpha.is_winner }">
              <th>
                {{ match.alpha.name }}
              </th>
              <td>{{ match.alpha.win }}</td>
            </tr>
            <tr :class="{ 'is-winner': match.bravo.is_winner }">
              <th>
                {{ match.bravo.name }}
              </th>
              <td>{{ match.bravo.win }}</td>
            </tr>
          </table>
          <ul>
            <li>
              <ElementsButton
                class="-link"
                @click="tournamentResultReportModalState = true"
                ><ElementsText class="-xsmall"
                  >報告</ElementsText
                ></ElementsButton
              >
            </li>
            <li>
              <ElementsButton
                class="-link"
                @click="tournamentRuleModalState = true"
                ><ElementsText class="-xsmall"
                  >ルール</ElementsText
                ></ElementsButton
              >
            </li>
          </ul>
          <ClientOnly>
            <svg
              v-if="brackets.length > 0 && brackets[match.id - 1].height"
              widht="48"
              :height="brackets[match.id - 1].height"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#F00"
                stroke-width="1"
                :d="
                  j % 2 === 0
                    ? `M0,0 H24 V${brackets[match.id - 1].height} H48`
                    : `M0,${brackets[match.id - 1].height} H24 V0 H48`
                "
              />
            </svg>
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const tournamentRuleModalState = useTournamentRuleModalState()
const tournamentResultReportModalState = useTournamentResultReportModalState()
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
      brackets: [],
    }
  },
  async mounted() {
    await this.$nextTick(() => {})

    const brackets = []
    Object.keys(this.$refs).forEach((key) => {
      const fromTo = key.split('_')
      const fromRef = this.$refs[key][0]
      const fromRect = fromRef.getBoundingClientRect()
      const toRefKey =
        fromTo[3] > 0
          ? Object.keys(this.$refs).find(
              (key) => this.$refs[key][0].getAttribute('id') === fromTo[3],
            )
          : null
      const toRef = toRefKey ? this.$refs[toRefKey][0] : null
      const toRect = toRef ? toRef.getBoundingClientRect() : null
      brackets.push({
        from: { id: fromTo[1], height: fromRect.height, top: fromRect.top },
        to: toRect
          ? { id: fromTo[3], height: toRect.height, top: toRect.top }
          : null,
        height: toRect
          ? Math.abs(
              fromRect.top +
                fromRect.height / 2 -
                (toRect.top + toRect.height / 2),
            )
          : null,
      })
    })
    this.brackets = brackets
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/_variables';

.tb {
  display: flex;
  margin: $space-large;
  gap: $space-xlarge * 2;
  &__round {
    width: 128px;
    display: flex;
    flex-direction: column;
    &__title {
      padding: 0 $space-small;
      background: $color-gray-08;
      font-size: $font-xsmall;
      text-align: center;
    }
    &__contents {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      &__match {
        margin: $space-large 0;
        position: relative;
        svg {
          position: absolute;
          left: 100%;
        }
        &:nth-child(2n + 1) svg {
          top: calc(50% - 11px);
        }
        &:nth-child(2n) svg {
          bottom: calc(50% + 11px);
        }
        table {
          background: $color-gray-10;
          width: 100%;
          border-collapse: separate;

          th,
          td {
            text-align: left;
            border: 1px solid $color-gray-07;
            padding: $space-small;
            font-size: $font-xsmall;
          }
          th {
            background: $color-gray-08;
            border-right: none;
          }
          td {
            background: $color-gray-09;
            border-left: none;
          }
          .is-winner {
            th,
            td {
              border-color: $color-up;
            }
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
