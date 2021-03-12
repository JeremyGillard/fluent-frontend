import { createStore } from 'vuex';
import { getAsyncTerms } from '../services/api';

export default createStore({
  state: {
    terms: [],
  },
  getters: {
    learning(state) {
      return state.terms.filter((term) => !term.reviewed);
    },
    reviewing(state) {
      return state.terms.filter(
        ({ reviewed, numberCorrectAnswer }) => reviewed && !numberCorrectAnswer,
      );
    },
    mastered(state) {
      return state.terms.filter((term) => !!term.numberCorrectAnswer);
    },
  },
  mutations: {
    setTerms(state, terms) {
      if (!state.terms.length) {
        state.terms = terms;
      }
    },
    addTerm(state, term) {
      state.terms.push(term);
    },
  },
  actions: {
    async fetchTerms(context) {
      const terms = await getAsyncTerms();
      context.commit('setTerms', terms);
    },
  },
  modules: {},
});
