<template>
  <main>
    <list-indicators
      :learningLength="learning.length"
      :reviewingLength="reviewing.length"
      :masteredLength="mastered.length"
    />
  </main>
</template>

<script>
import ListIndicators from './components/ListIndicators.vue';
import { getTerms } from './services/api';

export default {
  name: 'App',
  components: {
    ListIndicators,
  },
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

<style lang="scss" scoped></style>
