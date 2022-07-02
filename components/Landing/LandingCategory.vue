<template>
  <div class="landing-category">
    <div class="title">
      <img :src="bottle">
      <p> 鐘點清潔會掃哪裡？時數怎麼算？</p>
    </div>
    <p class="description">
      可以根據自己的需求查看會清潔的細項，並預估總共需要的時數，當天清潔人員會再討論狀況做些調整！
    </p>
    <button class="tutorial-button">
      時數計算教學
    </button>
    <CategoryGroup />
  </div>
</template>

<script>
import CategoryGroup from './Category/CategoryGroup.vue'
import Bottle from '~/assets/image/bottle.png'

export default {
  components: {
    CategoryGroup
  },
  computed: {
    bottle: () => Bottle
  }
}
</script>

<style scoped>
.landing-category {
  padding: 40px 0;
  background-color: #f3f4f5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.landing-category > .title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.landing-category > .title > p {
  margin: 0 0 7px 8px;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  text-align: center;
  color: #3e4459;
}
.landing-category > .description {
  margin: 0 0 16px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #3e4459;
}
.tutorial-button {
  width: 140px;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #36bbd9;
  background: #fff;
  border: 1px solid #36bbd9;
  border-radius: 4px;
  cursor: pointer;
}
</style>
