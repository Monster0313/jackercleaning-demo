<template>
  <div class="category-time">
    <div class="time-clock">
      <img :src="categoryTime">
      <span>
        {{
          time.unit ?
            `${time.min}~${time.max}/${time.unit}` :
            `${time.min}~${time.max}`
        }}
      </span>
    </div>
    <div class="time-line">
      <div class="time-line-container">
        <div class="time-line-text">
          <span>{{ time.minText }}</span>
          <span>{{ time.maxText }}</span>
        </div>
        <div class="time-line-number">
          <span>{{ `${time.min} hr` }}</span>
          <span>{{ `${time.max} hr` }}</span>
        </div>
      </div>
      <div
        v-if="time.plus"
        class="time-plus"
      >
        <div class="plus-basic">
          <div>
            <img :src="plus">
            <span class="plus-text">
              {{ time.plus.title }}
            </span>
          </div>
          <span class="plus-text">
            {{ time.plus.time }}
          </span>
        </div>
        <p v-if="time.plus.description" class="plus-description">
          {{ time.plus.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryTime from '~/assets/image/category-time.png'
import Plus from '~/assets/image/plus.png'

export default {
  props: {
    time: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    categoryTime: () => CategoryTime,
    plus: () => Plus
  }
}
</script>

<style scoped>
.category-time {
  margin: 25px 0 0 0;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.time-clock {
  margin-right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.time-clock > span {
  margin: 8px 0 0 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #3e4459;
}
.time-line {
  width: 235px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #3e4459;
}
.time-line > .time-line-container {
  width: 100%;
}
.time-line-text {
  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #eee;
}
.time-line-text, .time-line-number {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.time-plus {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.plus-basic {
  width: 220px;
  margin: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.plus-basic > div > img {
  width: 8px;
  margin: 0 2px 0 0;
}
.plus-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #3e4459;
}
.plus-description {
  margin: 3px 0 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #9b9b9b;
}
</style>
