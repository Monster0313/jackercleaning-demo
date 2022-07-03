<template>
  <div class="ranking-group carousel-wrapper">
    <client-only>
      <carousel v-bind="window.width > 400 ? webOptions : mobileOptions">
        <slide v-for="(i, index) in rankingClip" :key="index">
          <RankingClip :ranking-data="i" />
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import RankingClip from './RankingClip.vue'
import { rankingData } from './rankingData'

export default {
  components: {
    RankingClip
  },
  data () {
    return {
      webOptions: {
        loop: true,
        perPage: 4,
        paginationEnabled: false
      },
      mobileOptions: {
        loop: true,
        perPage: 2.5,
        paginationEnabled: false
      },
      window: {
        width: 0,
        height: 0
      }
    }
  },
  computed: {
    rankingClip () {
      const clipArray = []
      for (let i = 0; i < rankingData.length; i += 1) {
        if (this.window.width < 400) {
          const rankingDataSlice = rankingData.slice(i, i + 1)
          clipArray.push(rankingDataSlice)
        }
        if (this.window.width > 400) {
          if (i === 0 || i % 2 === 0) {
            const rankingDataSlice = rankingData.slice(i, i + 2)
            clipArray.push(rankingDataSlice)
          }
        }
      }
      return clipArray
    }
  },
  beforeMount () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>

<style scoped>
.ranking-group {
  width: 600px;
  overflow: hidden;
}

@media screen and (max-width: 400px) {
  .ranking-group {
    width: 100%;
    padding: 0 0 0 16px;
    overflow: hidden;
  }
}
</style>
