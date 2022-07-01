<template>
  <div ref="formSelect" class="form-select">
    <div class="select-container" :class="isActive ? 'select-container__active' : ''" @click="isActive = !isActive">
      <img class="icon" :src="iconStatus">
      <div class="text">
        <span>{{ first }}</span>
        <span>{{ second }}</span>
      </div>
      <img class="arrow" :src="isActive ? arrowDownDark : arrowDown">
    </div>
    <div v-show="isActive" class="select-list">
      <div class="list">
        <div
          v-for="(i, index) in firstList"
          :key="index"
          class="list-content"
          @click="type === 'location' ?
            handleSelectFirst(i.countyCode, i.countyName) :
            handleSelectFirst(i.staffCode, i.title)"
        >
          {{ type === 'location' ? i.countyName : i.title }}
        </div>
      </div>
      <div class="list">
        <div
          v-for="(i, index) in secondList"
          :key="index"
          class="list-content"
          @click="type === 'location' ?
            handleSelectSecond(i.townCode, i.townName) :
            handleSelectSecond(i.timeCode, i.title)
          "
        >
          {{ type === 'location' ? i.townName : i.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import Location from '~/assets/image/location.png'
import LocationDark from '~/assets/image/location-dark.png'
import Clock from '~/assets/image/clock.png'
import ClockDark from '~/assets/image/clock-dark.png'
import ArrowDown from '~/assets/image/arrow-down.png'
import ArrowDownDark from '~/assets/image/arrow-down-dark.png'

export default {
  props: {
    type: {
      type: String,
      default: 'location' // 服務地點: location | 服務時間: time
    },
    first: {
      type: String,
      default: ''
    },
    second: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState('Order', ['countyList', 'townList', 'staffList', 'timeList', 'selectCounty',
      'selectTown', 'selectStaff', 'selectTime']),
    location: () => Location,
    locationDark: () => LocationDark,
    clock: () => Clock,
    clockDark: () => ClockDark,
    arrowDown: () => ArrowDown,
    arrowDownDark: () => ArrowDownDark,
    iconStatus () {
      if (this.type === 'time') {
        if (this.isActive) {
          return this.clockDark
        } else {
          return this.clock
        }
      }
      if (this.type === 'location') {
        if (this.isActive) {
          return this.locationDark
        } else {
          return this.location
        }
      }
      return this.location
    },
    firstList () {
      if (this.type === 'time') {
        return this.staffList
      }
      return this.countyList
    },
    secondList () {
      if (this.type === 'time') {
        if (this.selectStaff === 'A') {
          return this.timeList.A
        }
        return this.timeList.B
      }
      return this.townList
    }
  },
  async created () {
    await this.getTownList('A')
  },
  beforeMount () {
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    ...mapMutations('Order', ['SET_ORDER']),
    async getTownList (countyCode) {
      try {
        const res = await axios({
          method: 'get',
          url: `https://api.nlsc.gov.tw/other/ListTown/${countyCode}`
        })
        const data = res.data
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data, 'text/xml')
        const xmlLength = xmlDoc.getElementsByTagName('townItem').length
        const townSet = []
        for (let i = 0; i < xmlLength; i += 1) {
          let obj = {}
          obj.townCode = xmlDoc.getElementsByTagName('townItem')[i].childNodes[1].textContent
          obj.townName = xmlDoc.getElementsByTagName('townItem')[i].childNodes[3].textContent
          townSet.push(obj)
          obj = {}
        }
        this.SET_ORDER({ key: 'townList', value: townSet })
      } catch (error) {
        // console.log('GetTownList: ', error)
      }
    },
    async handleSelectFirst (code, text) {
      if (this.type === 'time') {
        this.SET_ORDER({ key: 'selectStaff', value: code })
        this.SET_ORDER({ key: 'staff', value: text })
        this.SET_ORDER({ key: 'selectTime', value: this.secondList[0].code })
        this.SET_ORDER({ key: 'time', value: this.secondList[0].title })
      }
      if (this.type === 'location') {
        this.SET_ORDER({ key: 'selectCounty', value: code })
        this.SET_ORDER({ key: 'county', value: text })
        await this.getTownList(code)
        this.SET_ORDER({ key: 'selectTown', value: this.townList[0].townCode })
        this.SET_ORDER({ key: 'town', value: this.townList[0].townName })
      }
    },
    handleSelectSecond (code, text) {
      if (this.type === 'time') {
        this.SET_ORDER({ key: 'selectTime', value: code })
        this.SET_ORDER({ key: 'time', value: text })
        this.isActive = false
      }
      if (this.type === 'location') {
        this.SET_ORDER({ key: 'selectTown', value: code })
        this.SET_ORDER({ key: 'town', value: text })
        this.isActive = false
      }
    },
    documentClick ({ target }) {
      const el = this.$refs.formSelect
      if (el && el !== target && !el.contains(target)) {
        this.isActive = false
      }
    }
  }
}
</script>

<style scoped>
.form-select {
  position: relative;
  width: 100%;
  height: 44px;
  margin-bottom: 24px;
  cursor: pointer;
}
.select-container {
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
}
.select-container__active {
  border: 1px solid #000;
}
.select-container > .icon {
  width: 16px;
  margin-right: 8px;
}
.select-container > .arrow {
  margin-right: 4px;
  width: 8px;
  justify-self: flex-end;
}
.select-container > .text {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.select-container > .text > span {
  padding-right: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3e4459;
}
.select-list {
  position: absolute;
  top: 46px;
  width: 100%;
  height: 200px;
  padding: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px 0px rgba(229, 229, 229, 0.5);
}
.select-list > .list {
  width: 50%;
  height: 100%;
  overflow-y: scroll;
}
.select-list > .list > .list-content {
  padding: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #3e4459;
}

@media screen and (max-width: 400px) {
  .form-select {
    margin-bottom: 16px;
  }
}
</style>
