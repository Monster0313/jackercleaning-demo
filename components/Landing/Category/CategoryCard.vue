<template>
  <div class="category-card">
    <div class="card-header">
      <img :src="categoryData.image">
      <div class="header-title">
        <p>{{ categoryData.title }}</p>
        <img
          :src="cardArrowDown"
          class="mobile-arrow"
          :class="isOpen ? 'arrow-up' : 'arrow-down'"
          @click="isOpen = !isOpen"
        >
      </div>
    </div>
    <div
      class="card-body"
      :class="isOpen ? 'card-body--open' : 'card-body--close'"
    >
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
import CardArrowDown from '~/assets/image/card-arrow-down.png'

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
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    cardArrowDown: () => CardArrowDown
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
.mobile-arrow {
  display: none;
}
.card-header > img {
  width: 343px;
  height: 122px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
.header-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header-title > p {
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

@media screen and (max-width: 400px) {
  .category-card {
    flex: 0;
  }
  .mobile-arrow {
    width: 15px;
    display: block;
    margin: 0 16px 0 0;
  }
  .arrow-up {
    animation: arrowUp .3s linear forwards;
  }
  .arrow-down {
    animation: arrowDown .3s linear forwards;
  }
  .card-body {
    overflow: hidden;
    transition: height .5s ease-in-out, opacity .5s ease-in-out;;
  }
  .card-body--open {
    height: 100%;
    opacity: 1;
  }
  .card-body--close {
    height: 0;
    padding: 0 16px;
    opacity: 0;
  }
  @keyframes arrowUp {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes arrowDown {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes expand {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  @keyframes collapse {
    0% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
}
</style>
