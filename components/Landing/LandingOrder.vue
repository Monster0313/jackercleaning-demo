<template>
  <div class="landing-order">
    <div class="wrap" :style="{ backgroundImage: `url(${backgroundImage})`}">
      <p class="slogan">
        預約居家清潔，三分鐘馬上搞定！
      </p>
      <div class="slogan-mobile">
        <p>預約居家清潔</p>
        <p>三分鐘馬上搞定！</p>
      </div>
      <OrderTab />
      <OrderForm />
    </div>
  </div>
</template>

<script>
import OrderTab from './Order/OrderTab.vue'
import OrderForm from './Order/OrderForm.vue'
import Background from '~/assets/image/background.jpg'

export default {
  components: {
    OrderTab,
    OrderForm
  },
  computed: {
    backgroundImage: () => Background
  }
}
</script>

<style scoped>
.landing-order {
  margin-top: 55px;
}
.wrap {
  height: 566px;
  padding: 60px 0;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
.slogan {
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  color: #4a4a4a;
}
.slogan-mobile {
  display: none;
}

@media screen and (max-width: 400px) {
  .landing-order {
    margin-top: 45px;
  }
  .slogan {
    display: none;
  }
  .slogan-mobile {
    width: 100%;
    margin: 0 0 56px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-weight: 500;
    font-size: 32px;
    line-height: 46px;
    color: #4a4a4a;
  }
  .slogan-mobile > p {
    margin: 0;
  }
}
</style>
