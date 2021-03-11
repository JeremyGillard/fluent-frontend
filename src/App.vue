<template>
  <main>
    <h1>My App!</h1>
  </main>
</template>

<script>
import { getTerms } from './services/api';

export default {
  name: 'App',
  data() {
    return {
      terms: [],
    };
  },
  created() {
    this.terms = getTerms();
  },
  computed: {
    learning() {
      return this.terms.filter((term) => !term.reviewed);
    },
    reviewing() {
      return this.terms.filter(
        ({ reviewed, numberCorrectAnswer }) => reviewed && !numberCorrectAnswer,
      );
    },
    mastered() {
      return this.terms.filter((term) => !!term.numberCorrectAnswer);
    },
  },
};
</script>

<style lang="scss"></style>
