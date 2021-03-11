<template>
  <main class="home">
    <svg class="d3-space"></svg>
    <header>
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
    <button>Let's practice!</button>
  </main>
</template>

<script>
import ListIndicators from '@/components/ListIndicators.vue';

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
};
</script>

<style lang="scss" scoped>
.home {
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
svg {
  position: absolute;
  width: 15.2rem;
  height: 15.2rem;
  background-color: #ffc53457;
  border-radius: 100%;
  z-index: -1;
  top: 11.5%;
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
