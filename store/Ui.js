export const state = () => ({
  orderTab: 'fast' // Type: String, 'fast': 快速預約 | 'duo': 雙人快清 | 'assign': 指定人員 | 'discount': 定期享優惠
})

export const mutations = {
  SET_UI (state, { key, value }) {
    state[key] = value
  }
}

export const actions = {}

export const getters = {}
