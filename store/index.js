export default {
  state: () => ({
    status: 'LOADING'
  }),

  getters: {
    status: state => state.status
  },

  mutations: {
    setStatus(state, status) {
      state.status = 'LOADED'
    }
  },

  actions: {
    load({ commit }) {
      commit('setStatus', 'LOADED')
    }
  }
}