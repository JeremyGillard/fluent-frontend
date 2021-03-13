<template>
  <main class="home">
    <header>
      <svg class="chart" id="chart"></svg>
      <p class="title">Total</p>
      <p class="number">{{ total }}</p>
    </header>
    <div style="width: 100%">
      <list-indicators
        :learningLength="learningLength"
        :reviewingLength="reviewingLength"
        :masteredLength="masteredLength"
      />
    </div>
    <router-link to="/revision">
      <div class="button">Let's practice!</div>
    </router-link>
  </main>
</template>

<script>
import ListIndicators from '@/components/ListIndicators.vue';
import Chart from '../services/chart';

export default {
  components: {
    ListIndicators,
  },
  computed: {
    learningLength() {
      return this.$store.getters.learning.length;
    },
    reviewingLength() {
      return this.$store.getters.reviewing.length;
    },
    masteredLength() {
      return this.$store.getters.mastered.length;
    },
    total() {
      return this.learningLength + this.reviewingLength + this.masteredLength;
    },
  },
  methods: {
    generateChart() {
      Chart.generate(
        this.learningLength,
        this.reviewingLength,
        this.masteredLength,
      );
    },
  },
  watch: {
    total: function() {
      this.generateChart();
    },
  },
  mounted() {
    this.$store.dispatch('fetchTerms');
    this.generateChart();
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f3f3f3;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
}
svg {
  position: absolute;
}
header {
  width: 15.2rem;
  height: 15.2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 1.625rem;
    font-weight: 500;
  }
  .number {
    font-size: 1.5rem;
  }
}
.button {
  font-size: 1.625rem;
  color: white;
  padding: 0.26em 3.4em;
  margin-bottom: 4rem;
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
