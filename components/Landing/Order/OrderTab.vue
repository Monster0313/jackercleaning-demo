<template>
  <div class="order-tab">
    <div
      v-for="(i, index) in tabList"
      :key="index"
      @click="handleTab(i.order)"
    >
      <p :class="orderTab === i.order ? 'tab--selected' : 'tab'">
        {{ i.title }}
        <span v-if="i.isNew" class="new-tag">
          NEW
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('Ui', ['orderTab']),
    tabList () {
      return [
        {
          order: 'fast',
          title: '快速預約',
          isNew: false
        },
        {
          order: 'duo',
          title: '雙人快清',
          isNew: true
        },
        {
          order: 'assign',
          title: '指定人員',
          isNew: false
        },
        {
          order: 'discount',
          title: '定期享優惠',
          isNew: false
        }
      ]
    }
  },
  methods: {
    ...mapMutations('Ui', ['SET_UI']),
    handleTab (option) {
      this.SET_UI({ key: 'orderTab', value: option })
    }
  }
}
</script>

<style scoped>
.order-tab {
  width: 460px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.tab, .tab--selected {
  position: relative;
  width: 113px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
}
.tab {
  color: #9b9b9b;
  background-color: #f5f4f4;
}
.tab--selected {
  color: #36bbd9;
  background-color: #fff;
}
.new-tag {
  position: absolute;
  top: -8px;
  right: 6px;
  width: 32px;
  height: 12px;
  padding-bottom: 2px;
  background: #c9302c;
  font-weight: 100;
  font-size: 10px;
  color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
</style>
