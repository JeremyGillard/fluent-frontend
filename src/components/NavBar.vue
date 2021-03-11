<template>
  <nav>
    <ul class="container">
      <li class="nav-item">
        <router-link to="/revision">
          <i class="fas fa-book" :class="revisionSelectedClass"></i>
          <p class="revision" :class="revisionSelectedClass">Revision</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/">
          <i class="fas fa-home" :class="homeSelectedClass"></i>
          <p class="home" :class="homeSelectedClass">Home</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/newterm">
          <i class="fas fa-plus" :class="newtermSelectedClass"></i>
          <p class="newterm" :class="newtermSelectedClass">New Term</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    revisionSelectedClass() {
      return this.currentRoute === 'revision' ? 'selected' : '';
    },
    homeSelectedClass() {
      return this.currentRoute === 'home' ? 'selected' : '';
    },
    newtermSelectedClass() {
      return this.currentRoute === 'newterm' ? 'selected' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #4a4a4a;
}
.container {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 0;
}
.nav-item {
  text-align: center;
}
i {
  font-size: 1.4rem;
  color: #4a4a4a;
}
p {
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.25rem;
  color: #4a4a4a;
}
.selected {
  color: #3461ff;
}
</style>
