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
import * as d3 from 'd3';

export default {
  components: {
    ListIndicators,
  },
  data() {
    return {
      learningLength: 32,
      reviewingLength: 12,
      masteredLength: 143,
    };
  },
  computed: {
    total() {
      return this.learningLength + this.reviewingLength + this.masteredLength;
    },
  },
  mounted() {
    this.$nextTick(this.generateChart());
  },
  methods: {
    generateChart() {
      const data = [
        this.learningLength,
        this.reviewingLength,
        this.masteredLength,
      ];

      const color = d3
        .scaleOrdinal()
        .domain(data)
        .range(['#34B6FF', '#ffc634', '#4A4A4A']);

      const width = 243;
      const height = width;

      const svg = d3
        .select('#chart')
        .attr('width', width)
        .attr('height', height);

      const g = svg
        .append('g')
        .attr('transform', `translate(${width / 2}, ${height / 2})`);

      const pie = d3.pie().value((d) => d);

      const data_ready = pie(data);

      g.selectAll('path')
        .data(data_ready)
        .join('path')
        .attr(
          'd',
          d3
            .arc()
            .innerRadius(100)
            .outerRadius(120),
        )
        .attr('fill', (d) => color(d.data));
    },
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
