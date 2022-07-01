
export const state = () => ({
  selectCounty: 'A',
  selectTown: 'A09',
  selectStaff: 'A',
  selectTime: 3,
  county: '臺北市',
  town: '大同區',
  countyList: [],
  townList: [],
  staff: '單人打掃',
  time: '3 小時',
  staffList: [
    {
      staffCode: 'A',
      title: '單人打掃'
    },
    {
      staffCode: 'B',
      title: '雙人打掃'
    }
  ],
  timeList: {
    A: [
      {
        time: 3,
        title: '3 小時'
      },
      {
        time: 4,
        title: '4 小時'
      },
      {
        time: 5,
        title: '5 小時'
      }
    ],
    B: [
      {
        time: 4,
        title: '4 小時'
      },
      {
        time: 5,
        title: '5 小時'
      },
      {
        time: 6,
        title: '6 小時'
      }
    ]
  },
  havePet: false
})

export const mutations = {
  SET_ORDER (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {}

export const getters = {}
