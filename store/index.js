export const state = () => ({
  country: 'NG'
})

export const mutations = {
  changeCountry(state, c) {
    state.country = c
  }
}

export const actions = {
  changeCountry({ commit }) {
    commit('changeCountry')
  }
}
