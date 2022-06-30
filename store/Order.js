
export const state = () => ({
  county: '台北市',
  town: '大同區',
  countyList: [],
  townList: [],
  time: '3小時',
  havePet: false
})

export const mutations = {
  SET_ORDER (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {}

export const getters = {}
