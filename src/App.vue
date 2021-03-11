<template>
  <router-view />
  <nav-bar />
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
};
</script>

<style lang="scss" scoped></style>
