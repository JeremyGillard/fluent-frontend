<template>
  <main>
    <list-indicators
      :learningLength="learning.length"
      :reviewingLength="reviewing.length"
      :masteredLength="mastered.length"
    />
    <div class="container" :class="[reviewFinished ? '' : 'finished']">
      <flash-card
        v-if="currentTerm"
        :term="currentTerm.term"
        :translation="currentTerm.translation"
        :reviewed="currentTerm.reviewed"
        :color="flashCardColor"
        :toggle="toggle"
        :handleToggle="handleToggle"
      /><!-- TODO loader -->
      <textarea
        v-if="reviewFinished"
        type="text"
        v-model="inputValue"
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
        @keydown.enter.exact.prevent
        @keyup.enter.exact="handleInput"
        :disabled="inputDisabled"
      />
    </div>
  </main>
</template>

<script>
import ListIndicators from '@/components/ListIndicators.vue';
import FlashCard from '@/components/FlashCard.vue';

export default {
  name: 'App',
  components: {
    ListIndicators,
    FlashCard,
  },
  data() {
    return {
      inputValue: '',
      inputDisabled: false,
      toggle: false,
    };
  },
  computed: {
    terms() {
      return this.$store.state.terms;
    },
    learning() {
      return this.$store.getters.learning;
    },
    reviewing() {
      return this.$store.getters.reviewing;
    },
    mastered() {
      return this.$store.getters.mastered;
    },
    currentTerm() {
      if (this.learning.length) {
        return this.learning[0];
      } else if (this.reviewing.length) {
        return this.reviewing[0];
      } else {
        return this.mastered[0];
      }
    },
    flashCardColor() {
      if (this.learning.length) {
        return '#34B6FF';
      } else if (this.reviewing.length) {
        return '#ffc634';
      } else {
        return '#4A4A4A';
      }
    },
    reviewFinished() {
      return !(this.learning.length === 0 && this.reviewing.length === 0);
    },
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle;
      if (this.toggle) {
        this.inputDisabled = true;
        this.currentTerm.numberWrongAnswer += 1;
      } else {
        this.inputDisabled = false;
        this.currentTerm.numberWrongAnswer += 1;
        if (!this.learning.length) {
          this.terms.push(this.terms.shift());
        }
        this.currentTerm.reviewed = true;
        this.inputValue = '';
      }
    },
    handleInput() {
      if (
        this.inputValue.trim().toLowerCase() === this.currentTerm.translation
      ) {
        this.currentTerm.numberCorrectAnswer += 1;
      } else {
        this.currentTerm.numberWrongAnswer += 1;
        if (!this.learning.length) {
          this.terms.push(this.terms.shift());
        }
      }
      this.currentTerm.reviewed = true;
      this.inputValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-family: 'Roboto', sans-serif;
  resize: none;
  border: none;
  border-bottom: 1px solid #a5a5a5;
  display: block;
  width: 16.8rem;
  margin: 0 auto;
  font-size: 1.375rem;
  height: 1.375rem;
  text-align: center;
  overflow: hidden;
  background-color: #f3f3f3;
  &:focus {
    outline: none;
  }
}
main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f3f3f3;
  height: 100vh;
}
.container {
  margin-top: 0;
  transition: margin-top 1s ease-out;
}
.finished {
  margin-top: 30%;
}
</style>
