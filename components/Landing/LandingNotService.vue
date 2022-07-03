<template>
  <div class="landing-not-service">
    <div class="title">
      <p>其他未服務內容</p>
      <span>基於人員與客戶安全、隱私等考量</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="(i, index) in notServiceList" :key="index">
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    notServiceList () {
      return [
        '移動或抬起超過10公斤的大型家具或重物', '天花板、高處窗戶及可觸及範圍外的表面清潔', '無危險性外窗清潔及窗簾、紗窗清洗',
        '寵物排泄及重度汙染區域清潔', '危險化學物質處理', '地毯深度清潔及清洗（基本除塵除外）', '各式陳年、染色汙點清潔',
        '除蟲害（例如：蜂窩、昆蟲…等）', '垃圾清運工作（不指使潔客將已包裝垃圾移至其他地方丟棄）', '室內惡臭環境',
        '車庫清潔（基本掃除除外）', '園藝或院子清潔'
      ]
    }
  }
}
</script>

<style scoped>
.landing-not-service {
  width: 100%;
  padding: 40px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.title > p {
  margin: 0;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  color: #3e4459;
}
.title > span {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #c9302c;
}
.list > ul {
  width: 940px;
  height: 140px;
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.list > ul > li {
  width: 400px;
  margin: 0 100px 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #3e4459;
}

@media screen and (max-width: 400px) {
  .landing-not-service {
    width: 100%;
    padding: 40px 32px;
    box-sizing: border-box;
  }
  .title > p {
    font-size: 18px;
    line-height: 26px;
  }
  .list {
    padding: 0 0 0 12px;
  }
  .list > ul {
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .list > ul > li {
    width: 100%;
    margin: 0;
  }
}
</style>
