export const state = () => ({
  country: {
    name: 'Nigeria',
    imageSource: '/img/nigeria.svg',
    code: 'NGN',
    symbol: '₦'
  },
  sideBarOpen: false,
  showCookies: true
})

export const mutations = {
  changeCountry(state, payload) {
    state.country = payload.country
  },
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen
  },
  toggleCookies(state) {
    state.showCookies = !state.showCookies
  }
}

export const actions = {
  changeCountry({ commit }, payload) {
    commit('changeCountry', payload)
  },
  toggleSideBar({ commit }) {
    commit('toggleSideBar')
  },
  toggleCookies({ commit }) {
    commit('toggleCookies')
  }
}
