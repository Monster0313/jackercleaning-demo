<template>
  <div class="ranking-clip">
    <RankingCard
      v-for="(i, index) in rankingData"
      :key="index"
      :profile="i.profile"
      :city="i.city"
      :name="i.name"
      :rate="i.rate"
      :price="i.price"
    />
  </div>
</template>

<script>
import RankingCard from './RankingCard.vue'

export default {
  components: {
    RankingCard
  },
  props: {
    rankingData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.ranking-clip {
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media screen and (max-width: 400px) {
  .ranking-clip {
    /* width: 50%; */
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
