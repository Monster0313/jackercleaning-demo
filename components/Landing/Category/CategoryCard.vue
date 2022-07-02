<template>
  <div class="category-card">
    <div class="card-header">
      <img :src="categoryData.image">
      <p>{{ categoryData.title }}</p>
    </div>
    <div class="card-body">
      <div v-if="categoryData.basic" class="card-basic">
        <CardBasic :basic="categoryData.basic" />
      </div>

      <div v-if="categoryData.decline" class="card-decline">
        <CardDecline :decline="categoryData.decline" />
      </div>

      <div v-if="categoryData.time" class="card-time">
        <CardTime :time="categoryData.time" />
      </div>

      <div v-if="categoryData.plus" class="card-plus">
        <div
          v-for="(i, index) in categoryData.plus"
          :key="index"
          class="plus"
        >
          <CardPlus :plus="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardBasic from './Card/CardBasic.vue'
import CardDecline from './Card/CardDecline.vue'
import CardTime from './Card/CardTime.vue'
import CardPlus from './Card/CardPlus.vue'

export default {
  components: {
    CardBasic,
    CardDecline,
    CardTime,
    CardPlus
  },
  props: {
    categoryData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.category-card {
  width: 343px;
  margin: 0 0 20px 0;
  flex: 1 0 auto;
  background: #fff;
  box-shadow: 1px 2px 7px 7px #eee;
  border-radius: 8px;
}
.card-header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.card-header > img {
  width: 343px;
  height: 122px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.card-header > p {
  margin: 0;
  padding: 16px 20px;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #4a4a4a;
}
.card-body {
  padding: 0 16px 15px 16px;
}
</style>
