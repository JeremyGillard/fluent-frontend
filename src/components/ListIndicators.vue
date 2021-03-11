<template>
  <div class="list-indicators">
    <list-indicator title="Learning" :index="learningLength" color="#34B6FF" />
    <list-indicator
      title="Reviewing"
      :index="reviewingLength"
      color="#ffc634"
    />
    <list-indicator title="Mastered" :index="masteredLength" color="#4A4A4A" />
  </div>
</template>

<script>
import ListIndicator from './ListIndicator';

export default {
  components: {
    ListIndicator,
  },
  props: {
    learningLength: {
      type: Number,
      required: true,
    },
    reviewingLength: {
      type: Number,
      required: true,
    },
    masteredLength: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.list-indicators {
  margin: 3.5rem auto 0;
  display: flex;
  justify-content: space-evenly;
}
</style>
