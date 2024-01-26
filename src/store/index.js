/* eslint-disable */

import { createStore } from "vuex";
import router from "../router";
const store = createStore({
  state: {
    getUser: null,
    getError: null,
  },
  getters: {
    getUser: (state) => state.getUser,
    getError: (state) => state.getError,
  },
  mutations: {
    setUser(state, payload) {
      state.getUser = payload;
    },
    setError(state, error) {
      state.getUser = null;
      state.getError = error;
    },
  },
  actions: {
    async login({ commit }, payload) {
      try {
        if (
          payload.email === "admin@admin.com" &&
          payload.password === "admin"
        ) {
          commit("setUser", payload);
        } else {
          commit("setError", "Username or password is incorrect");
        }
      } catch (error) {
        commit("setError", error);
      }
    },
    async logout({ commit }) {
      try {
        commit("setUser", null);
        commit("setError", null);
        router.push("/");
      } catch (error) {
        console.error("Logout error:", error);
        throw error;
      }
    },
  },
});

export default store;
