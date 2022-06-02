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
          <span v-if="i > 0" class="tb__round__contents__match__fromLine"></span>
          <div class="tb__round__contents__match__contents">
            <table ref="matchs" :id="match.id" :next="match.next">
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
          </div>
          <span v-if="i !== rounds.length - 1" class="tb__round__contents__match__toLine"></span>
          <span v-if="i !== rounds.length - 1" class="tb__round__contents__match__toLineV"></span>
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
    }
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
        flex: 1;
        display: flex;
        align-items: center;
        margin: $space-large 0;
        position: relative;

        &__fromLine,
        &__toLine,
        &__toLineV {
          display: block;
          background: $color-gray-07;
          position: absolute;
        }
        &__fromLine {
          height: 1px;
          width: 24px;
          top: calc(50% - 11px);
          left: -24px;
        }
        &__toLine {
          height: 1px;
          width: 24px;
          top: calc(50% - 11px);
          left: 100%;
        }
        &__toLineV {
          height: 100%;
          width: 1px;
          left: calc(100% + 23px);
        }
        &:nth-child(2n + 1) &__toLineV {
          top: calc(50% - 10px);
        }
        &:nth-child(2n) &__toLineV {
          bottom: calc(50% + 10px);
        }

        &__contents {
          width: 100%;
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
}
</style>
