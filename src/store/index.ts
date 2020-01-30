import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  selectedColors: string[] | undefined;
  childCount: number | undefined;
  childAngle: number | undefined;
  branchCount: number | undefined;
}

export default new Vuex.Store<State>({
  state: {
    selectedColors: undefined,
    childCount: undefined,
    childAngle: undefined,
    branchCount: undefined
  },
  mutations: {
    setSelectedColors(state, payload) {
      state.selectedColors = payload;
    },
    setChildCount(state, payload) {
      state.childCount = payload;
    },
    setChildAngle(state, payload) {
      state.childAngle = payload;
    },
    setBranchCount(state, payload) {
      state.branchCount = payload;
    }
  },
  actions: {},
  modules: {},
  getters: {
    selectedColors(state) {
      return state.selectedColors;
    },
    childCount(state) {
      return state.childCount;
    },
    childAngle(state) {
      return state.childAngle;
    },
    branchCount(state) {
      return state.branchCount;
    }
  }
});
