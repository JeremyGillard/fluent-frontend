<template>
  <main class="new-term">
    <form @submit.prevent="handleSubmit">
      <label for="term">Term</label>
      <textarea
        type="text"
        v-model="termValue"
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
        @keydown.enter.exact.prevent
      />
      <label for="term">Translation</label>
      <textarea
        type="text"
        v-model="translationValue"
        oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
        @keydown.enter.exact.prevent
      />
      <button>Add Term</button>
    </form>
  </main>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      termValue: '',
      translationValue: '',
    };
  },
  methods: {
    handleSubmit() {
      const term = {
        id: uuidv4(),
        term: this.termValue.trim().toLowerCase(),
        translation: this.translationValue.trim().toLowerCase(),
        reviewed: false,
        numberCorrectAnswer: 0,
        numberWrongAnswer: 0,
      };
      this.$store.commit('addTerm', term);
      this.termValue = '';
      this.translationValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.new-term {
  background-color: #f3f3f3;
  & form {
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    align-items: center;
  }
}
label {
  display: block;
  font-size: 1.375rem;
  font-weight: 500;
  margin-top: 2rem;
}
textarea {
  background-color: #f3f3f3;
  font-family: 'Roboto', sans-serif;
  resize: none;
  border: none;
  border-bottom: 1px solid #a5a5a5;
  display: block;
  width: 16.8rem;
  margin: 0 auto;
  font-size: 1.375rem;
  color: #4a4a4a;
  height: 1.375rem;
  text-align: center;
  overflow: hidden;
  &:focus {
    outline: none;
  }
}
button {
  font-size: 1.625rem;
  color: white;
  padding: 0.26em 3.4em;
  margin-top: 2rem;
  border: none;
  background: linear-gradient(322.56deg, #3461ff 0%, #34b6ff 89.84%);
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: 1s background ease-out;
  &:active,
  &:visited {
    background: #3461ff;
  }
  &:focus {
    outline: none;
  }
}
</style>
