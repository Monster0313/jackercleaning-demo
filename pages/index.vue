<template>
  <div id="app">
    <NavBar />
    <LandingOrder />
    <LandingCategory />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import NavBar from '~/components/NavBar.vue'
import LandingOrder from '~/components/Landing/LandingOrder.vue'
import LandingCategory from '~/components/Landing/LandingCategory.vue'

export default {
  name: 'IndexPage',
  components: {
    NavBar,
    LandingOrder,
    LandingCategory
  },
  computed: {
    ...mapState('Order', ['countyList'])
  },
  async mounted () {
    await this.getCountyList()
  },
  methods: {
    ...mapMutations('Order', ['SET_ORDER']),
    async getCountyList () {
      try {
        const res = await axios({
          method: 'get',
          url: 'https://api.nlsc.gov.tw/other/ListCounty'
        })
        const data = res.data
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data, 'text/xml')
        const xmlLength = xmlDoc.getElementsByTagName('countyItem').length
        const countySet = []
        for (let i = 0; i < xmlLength; i += 1) {
          let obj = {}
          obj.countyCode = xmlDoc.getElementsByTagName('countyItem')[i].childNodes[1].textContent
          obj.countyName = xmlDoc.getElementsByTagName('countyItem')[i].childNodes[3].textContent
          countySet.push(obj)
          obj = {}
        }
        // console.log(countySet)
        this.SET_ORDER({ key: 'countyList', value: countySet })
      } catch (error) {
        // console.log('GetCountyList: ', error)
      }
    }
  }
}
</script>
