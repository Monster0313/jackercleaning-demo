<template>
  <div class="landing-order">
    <div class="wrap">
      <p>預約居家清潔，三分鐘馬上搞定！</p>
      <OrderTab />
    </div>
  </div>
</template>

<script>
import OrderTab from './Order/OrderTab.vue'

export default {
  components: {
    OrderTab
  }
}
</script>

<style scoped>
.landing-order {
  padding-top: 55px;
}
</style>
