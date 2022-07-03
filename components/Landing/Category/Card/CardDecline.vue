<template>
  <div class="category-decline">
    <div class="decline-list" :class="decline.item.length < 3 ? 'small' : 'large'">
      <div
        v-for="(i, index) in decline.item"
        :key="index"
        class="list"
      >
        <img :src="cross">
        <p>{{ i }}</p>
      </div>
    </div>
    <p class="description">
      {{ decline.description }}
    </p>
  </div>
</template>

<script>
import Cross from '~/assets/image/cross.png'

export default {
  props: {
    decline: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    cross: () => Cross
  }
}
</script>

<style scoped>
.category-decline > .decline-list {
  width: 100%;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.category-decline > .decline-list > .list {
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.category-decline > .decline-list > .list > p {
  width: 120px;
  height: 16px;
  margin: 0 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4a4a4a;
}
.small {
  height: 28px;
}
.large {
  height: 52px;
}
.description {
  width: 280px;
  margin: -8px 0 0 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #9b9b9b;
}
</style>
