export const state = () => ({
  country: {
    name: 'Nigeria',
    imageSource: '/img/nigeria.svg',
    code: 'NG'
  },
  sideBarOpen: false
})

export const mutations = {
  changeCountry(state, payload) {
    state.country = payload.country
  },
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen
  }
}

export const actions = {
  changeCountry({ commit }, payload) {
    commit('changeCountry', payload)
  },
  toggleSideBar({ commit }) {
    commit('toggleSideBar')
  }
}
