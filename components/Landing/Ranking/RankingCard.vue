<template>
  <div class="ranking-card">
    <img :src="profile">
    <span class="city">{{ city }}</span>
    <span class="name">{{ name }}</span>
    <div class="rate">
      <span>{{ rate }}</span>
      <div class="rate-star" :style="{ backgroundImage: 'url(' + starGrey + ')' }">
        <img :src="starRate" :style="{ clipPath: `inset(0 ${clipWidth} 0 0)`}">
      </div>
    </div>
    <span class="price">{{ `$${price}/hr` }}</span>
  </div>
</template>

<script>
import StarGrey from '~/assets/image/star-grey.svg'
import StarRate from '~/assets/image/star-rate.svg'

export default {
  props: {
    profile: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    rate: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      default: 0
    }
  },
  computed: {
    starGrey: () => StarGrey,
    starRate: () => StarRate,
    clipWidth () {
      return `${100 - ((this.rate / 5) * 100)}%`
    }
  }
}
</script>

<style scoped>
.ranking-card {
  width: 140px;
  height: 190px;
  padding: 16px;
  background: #fff;
  box-shadow: 0px 2px 6px #bbb7ba;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.ranking-card > img {
  width: 55px;
  border-radius: 50%;
  object-fit: cover;
}
.city {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #3e4459;
}
.name {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #36bbd9;
}
.rate {
  width: 100%;
  margin: 5px 0 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.rate > span {
  margin: 0 3px 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #9b9b9b;
}
.rate-star {
  width: 88px;
  height: 14px;
  position: relative;
  background-repeat: no-repeat;
  flex-shrink: 0;
}
.rate-star > img {
  /* width: 88px; */
  height: 14px;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
}
.price {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #3e4459;
}
@media screen and (max-width: 400px) {
  .ranking-card {
    /* margin: 0 8px 0 0; */
  }
}
</style>
