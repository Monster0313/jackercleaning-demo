<template>
  <div class="landing-ranking">
    <div class="ranking-info">
      <div class="title">
        <p>全台唯一</p>
        <span>挑人員，評價直接看！</span>
      </div>
      <div class="description">
        <div v-for="(i, index) in rankInfo" :key="index">
          <img :src="i.image">
          <span>{{ i.text }}</span>
        </div>
      </div>
    </div>
    <div class="mobile-title">
      <p>全台唯一</p>
      <p>挑人員，評價直接看！</p>
    </div>
    <RankingGroup />
    <div class="mobile-description">
      <div v-for="(i, index) in rankInfo" :key="index">
        <img :src="i.image">
        <span>{{ i.text }}</span>
      </div>
    </div>
    <button class="order-button">
      開始預約 >
    </button>
  </div>
</template>

<script>
import RankingGroup from './Ranking/RankingGroup.vue'
import Ranking1 from '~/assets/image/ranking-1.png'
import Ranking2 from '~/assets/image/ranking-2.png'
import Ranking3 from '~/assets/image/ranking-3.png'

export default {
  components: {
    RankingGroup
  },
  computed: {
    rankInfo () {
      return [
        {
          image: Ranking1,
          text: '人員具良民證、 清潔證照'
        },
        {
          image: Ranking2,
          text: '今天訂明天掃， 即時預約超方便'
        },
        {
          image: Ranking3,
          text: '價錢、履歷、評價 透明公開'
        }
      ]
    }
  }
}
</script>

<style scoped>
.landing-ranking {
  padding: 50px 0;
  background: #f5f4f4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.ranking-info {
  width: 510px;
  margin: 0 40px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title {
  width: 100%;
  padding: 0 0 20px 0;
  border-bottom: 2px solid #3e4459;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title > p {
  margin: 0;
  padding: 0 0 20px 0;
  font-weight: 400;
  font-size: 72px;
  line-height: 104px;
  color: #3e4459;
}
.title > span {
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #3e4459;
}
.description {
  width: 100%;
  margin: 28px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.description > div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.description > div > span {
  width: 112px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3e4459;
}
.mobile-title, .mobile-description {
  display: none;
}
.order-button {
  display: none;
}

@media screen and (max-width: 400px) {
  .landing-ranking {
    padding: 24px 0;
    background: #f5f4f4;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .ranking-info {
    display: none;
  }
  .mobile-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .mobile-title {
    margin: 0 0 16px 0;
  }
  .mobile-title > p {
    margin: 0;
    font-weight: 900;
    font-size: 18px;
    line-height: 26px;
    color: #3e4459;
  }
  .mobile-description {
    margin: 24px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
 .mobile-description > div {
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
 }
  .mobile-description > div > img {
    width: 30px;
  }
  .mobile-description > div > span {
    margin: 0 0 0 7px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #3e4459;
  }
  .order-button {
    width: 300px;
    height: 36px;
    margin: 16px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    background: #36bbd9;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
}
</style>
