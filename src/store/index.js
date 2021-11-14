import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    currentFruitSearch: "mango",
  },
  mutations: {
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
      console.log("toggleMenu, ", state.isMenuOpen);
    },
    toggleFruit(state) {
      state.currentFruitSearch =
        state.currentFruitSearch === "banana" ? "mango" : "banana";
      console.log("toggleFruit, ", state.currentFruitSearch);
    },
  },
  actions: {
    toggleMenu({ commit }) {
      commit("toggleMenu");
    },
    toggleFruit({ commit }) {
      commit("toggleFruit");
    },
  },
  modules: {},
});
