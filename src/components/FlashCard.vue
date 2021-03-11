<template>
  <section @click="handleToggle" class="flash-card">
    <p class="content">{{ content }}</p>
    <div class="light">
      <div class="icon"><i :class="toggledClassName"></i></div>
      <div class="tablet" :style="{ backgroundColor: color }"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    term: String,
    translation: String,
    reviewed: Boolean,
    color: String,
    toggle: Boolean,
    handleToggle: Function,
  },
  data() {
    return {
      className: '',
    };
  },
  computed: {
    content() {
      return this.toggle ? this.translation : this.term;
    },
    toggledClassName() {
      return this.toggle ? 'fas fa-eye-slash' : 'fas fa-eye';
    },
  },
};
</script>

<style lang="scss" scoped>
.flash-card {
  width: 16rem; /* 68% if prefered */
  box-shadow: 0px 4px 16px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin: 1.5rem auto 1rem;
  padding: 1rem;
}
.content {
  font-size: 1.375rem;
  color: #4a4a4a;
  margin: 0 auto 1.375rem;
  text-align: center;
  user-select: none;
}
.light {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.icon i {
  font-size: 1.5rem;
  color: #4a4a4a;
}
.tablet {
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
}
</style>
