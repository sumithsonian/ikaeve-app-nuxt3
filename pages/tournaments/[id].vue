<template>
  <div>
    <template v-if="!route.path.includes('edit')">
      <BlocksHero
        :name="tournament.name"
        :background-image-url="tournament.background_image_url"
        :tags="tournament.tags"
        :detail-url="`/tournaments/${tournament.id}`"
        :is-owner="tournament.is_owner"
      />
      <ProjectsTabsTournament :id="tournament.id" />
    </template>
    <NuxtPage :tournament="tournament" />
    <template v-if="!route.path.includes('edit')">
      <BlocksInformation>
        <template v-if="tournament.status === 'recruiting'">
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton class="-primary"
                >大会へのエントリーリンクをコピーする</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                @click="entryTournamentModalState = true"
                class="-primary"
                >大会にエントリーする</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                @click="cancelTournamentModalState = true"
                class="-primary"
                >大会のエントリーを取り消す</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksParagraph class="-center"
            ><ElementsText class="-small"
              >現在のエントリ数：12 / 128</ElementsText
            ></BlocksParagraph
          >
        </template>
        <template v-else-if="tournament.status === 'recruitment_closed'">
          <BlocksParagraph class="-center"
            >募集チームが揃いました</BlocksParagraph
          >
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                :to="`/tournaments/${tournament.id}/qualifying`"
                class="-primary"
                >組み合わせの決定に進む</ElementsButton
              >
            </li>
          </BlocksList>
          <BlocksParagraph class="-center"
            >募集チームが定員に達しませんでした</BlocksParagraph
          >
          <BlocksList class="-horizontal -center">
            <li>
              <ElementsButton
                class="-primary"
                :to="`/tournaments/${tournament.id}/edit`"
                >期限を延ばす</ElementsButton
              >
            </li>
            <li>
              <ElementsButton
                class="-primary"
                :to="`/tournaments/${tournament.id}/edit`"
                >大会を中止する</ElementsButton
              >
            </li>
          </BlocksList>
        </template>
      </BlocksInformation>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()
const entryTournamentModalState = useEntryTournamentModalState()
const cancelTournamentModalState = useCancelTournamentModalState()
const tournament = (await $fetch(`/api/tournaments/${route.params.id}`)).data
const title = tournament.name
useHead({
  title: title,
})
</script>
