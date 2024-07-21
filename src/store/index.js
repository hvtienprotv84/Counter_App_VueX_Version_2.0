//  Vuex store instance that manages the state of the application
import { createStore } from "vuex";

export default createStore({
  state: {
    count: parseInt(localStorage.getItem("count")) || 0,
    error: "",
  },
  mutations: {
    increment(state) {
      state.count++;
      localStorage.setItem("count", state.count);
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
        localStorage.setItem("count", state.count);
      }
    },
    reset(state, value, error) {
      state.count = 0;
      // delete count from local storage
      localStorage.removeItem("count");
      // ACCESS THE VALUE INPUT BY THE USER AND ALSO SET IT TO ZERO
      value = document.querySelector("input");
      value.value = "";
      // CLEAR THE ERROR MESSAGE
      error = document.querySelector(".error");
      if (error !== null) {
        error.innerHTML = "";
      }
    },
    setValue(state, value) {
      state.count = value;
      localStorage.setItem("count", state.count);
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = "";
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    setValue({ commit }, value) {
      commit("setValue", value);
    },
    setError({ commit }, error) {
      commit("setError", error);
    },
    clearError({ commit }) {
      commit("clearError");
    },
  },
  getters: {
    count: (state) => state.count,
    error: (state) => state.error,
  },
});
