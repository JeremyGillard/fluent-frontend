<template>
  <main>
    <list-indicators
      :learningLength="learning.length"
      :reviewingLength="reviewing.length"
      :masteredLength="mastered.length"
    />
    <flash-card
      :term="currentTerm.term"
      :translation="currentTerm.translation"
      :reviewed="currentTerm.reviewed"
      :color="flashCardColor"
    />
  </main>
</template>

<script>
import ListIndicators from './components/ListIndicators.vue';
import FlashCard from './components/FlashCard.vue';
import { getTerms } from './services/api';

export default {
  name: 'App',
  components: {
    ListIndicators,
    FlashCard,
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
    currentTerm() {
      if (this.learning) {
        return this.learning[0];
      } else if (this.reviewing) {
        return this.reviewing[0];
      } else {
        return this.mastered[0];
      }
    },
    flashCardColor() {
      if (this.learning) {
        return '#34B6FF';
      } else if (this.reviewing) {
        return '#ffc634';
      } else {
        return '#4A4A4A';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
