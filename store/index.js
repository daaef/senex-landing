export const state = () => ({
  country: {
    name: 'Nigeria',
    imageSource: '/img/nigeria.svg',
    code: 'NG'
  }
})

export const mutations = {
  changeCountry(state, payload) {
    state.country = payload.country
  }
}

export const actions = {
  changeCountry({ commit }, payload) {
    commit('changeCountry', payload)
  }
}
