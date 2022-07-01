<template>
  <div class="order-form">
    <FormSelect :type="'location'" :first="county" :second="town" />
    <FormSelect :type="'time'" :first="staff" :second="time" />
    <div class="pet-check">
      <div class="text">
        <img :src="pet">
        <span>家中有寵物？</span>
      </div>
      <div
        class="check"
        @click="setPet"
      >
        <span :class="havePet ? '' : 'check__active'">無</span>
        <span :class="havePet ? 'check__active' : ''">有</span>
      </div>
    </div>
    <button class="order-button">
      開始預約，查看清潔價格
    </button>
    <p class="find-staff">
      找約過的人員？<span>輸入您的手機號碼</span>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import FormSelect from './OrderFormSelect.vue'
import Pet from '~/assets/image/pet.png'

export default {
  components: {
    FormSelect
  },
  computed: {
    ...mapState('Order', ['county', 'town', 'staff', 'time', 'havePet']),
    pet: () => Pet
  },
  methods: {
    ...mapMutations('Order', ['SET_ORDER']),
    setPet () {
      const petStatus = this.havePet
      this.SET_ORDER({ key: 'havePet', value: !petStatus })
    }
  }
}
</script>

<style scoped>
.order-form {
  width: 460px;
  height: 316px;
  flex-shrink: 0;
  padding: 30px 35px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 1px 5px #eee;
}
.pet-check {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0 0 16px;
  margin: 0 0 24px 0;
}
.pet-check > .text {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.pet-check > .text > span {
  margin: 0 0 0 7px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #3e4459;
}
.check {
  width: 60px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
}
.check > span {
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #eee;
  cursor: pointer;
}
.check > .check__active {
  border-radius: 50%;
  background: #36bbd9;
  color: #fff;
}
.order-button {
  width: 100%;
  height: 40px;
  background: #36bbd9;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.find-staff {
  margin: 8px 0 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #3e4459;
}
.find-staff > span {
  color: #36bbd9;
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  .order-form {
    width: 358px;
    height: 273px;
    flex-shrink: 0;
    padding: 24px 30px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 1px 5px #eee;
  }
  .pet-check {
    margin: 0 0 12px 0;
  }
  .order-button {
    font-size: 14px;
  }
}
</style>
