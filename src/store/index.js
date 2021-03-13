import { createStore } from 'vuex';
import { getTerms } from '../services/api';
import { auth } from '../services/firebase';

export default createStore({
  state: {
    terms: [],
    user: null,
    error: null,
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
    auth(state, user) {
      const { email, password } = user;
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          this.state.user = userCredential;
          this.state.error = null;
        })
        .catch((error) => (this.state.error = error.message));
    },
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
      const terms = await getTerms();
      context.commit('setTerms', terms);
    },
  },
  modules: {},
});
