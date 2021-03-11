<template>
  <section class="list-indicator">
    <div class="tablet" :style="{ backgroundColor: color }"></div>
    <p class="title">{{ title }}</p>
    <p class="index">{{ index }}</p>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tablet {
  margin: auto;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.5rem;
}
.title {
  margin: 0.5rem auto 0.25rem auto;
  text-align: center;
  font-size: 1rem;
  color: #a5a5a5;
}
.index {
  margin: auto;
  text-align: center;
  font-size: 1.5rem;
  color: #4a4a4a;
}
</style>
