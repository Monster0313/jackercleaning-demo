<template>
  <div class="category-plus">
    <div class="plus-header">
      <div class="title">
        <img :src="plusIcon">
        <span>{{ plus.title }}</span>
      </div>
      <span>
        {{ plus.time }}
      </span>
    </div>
    <div class="plus-basic">
      <div v-for="(i, index) in plus.basic" :key="index" class="list">
        <img :src="circle">
        <p>{{ i }}</p>
      </div>
    </div>
    <div class="plus-decline">
      <div class="decline-list">
        <div v-for="(i, index) in plus.decline.item" :key="index" class="list">
          <img :src="cross">
          <p>{{ i }}</p>
        </div>
      </div>
      <p class="description">
        {{ plus.decline.description }}
      </p>
    </div>
  </div>
</template>

<script>
import Circle from '~/assets/image/circle.png'
import Cross from '~/assets/image/cross.png'
import Plus from '~/assets/image/plus.png'

export default {
  props: {
    plus: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    circle: () => Circle,
    cross: () => Cross,
    plusIcon: () => Plus
  }
}
</script>

<style scoped>
.category-plus {
  margin: 0 0 20px 0;
}
.plus-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #4a4a4a;
}
.title > img {
  width: 16px;
}
.plus-basic {
  width: 100%;
  height: 52px;
  margin: 14px 0 0 0;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.plus-basic > .list {
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.plus-basic > .list > p {
  width: 140px;
  height: 16px;
  margin: 0 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4a4a4a;
}

.decline-list {
  width: 100%;
  height: 52px;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.decline-list > .list {
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.decline-list > .list > p {
  width: 140px;
  height: 16px;
  margin: 0 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4a4a4a;
}
.plus-decline > .description {
  width: 280px;
  margin: -8px 0 0 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #9b9b9b;
}
</style>
