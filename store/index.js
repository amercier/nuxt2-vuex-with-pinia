import { defineStore } from "pinia";

// Pinia
export const useMainStore = defineStore("main", {
  state: () => ({
    status: "LOADING",
  }),

  actions: {
    load() {
      this.status = "LOADED";
    },
  },
});

// Vuex
export default {
  state: () => ({
    status: "LOADING",
  }),

  getters: {
    status: (state) => state.status,
  },

  mutations: {
    setStatus(state, status) {
      state.status = "LOADED";
    },
  },

  actions: {
    load({ commit }) {
      commit("setStatus", "LOADED");
    },
  },
};
