import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  selectedColors: string[] | undefined;
}

export default new Vuex.Store<State>({
  state: {
    selectedColors: undefined,
  },
  mutations: {
    setSelectedColors(state, payload) {
      state.selectedColors = payload;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    selectedColors(state) {
      return state.selectedColors;
    }
  }
});
