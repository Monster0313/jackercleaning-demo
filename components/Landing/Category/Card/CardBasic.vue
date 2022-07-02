<template>
  <div
    class="category-basic"
    :class="basic.length < 7 ? 'small' : basic.length < 9 ? 'mid' : 'large'"
  >
    <div
      v-for="(i, index) in basic"
      :key="index"
      class="list"
    >
      <img :src="circle">
      <p>{{ i }}</p>
    </div>
  </div>
</template>

<script>
import Circle from '~/assets/image/circle.png'

export default {
  props: {
    basic: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    circle: () => Circle
  }
}
</script>

<style scoped>
.category-basic {
  width: 100%;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.category-basic > .list {
  margin: 0 0 8px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.category-basic > .list > p {
  width: 120px;
  height: 16px;
  margin: 0 0 0 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4a4a4a;
}
.small {
  height: 80px;
}
.mid {
  height: 100px;
}
.large {
  height: 128px;
}
</style>
