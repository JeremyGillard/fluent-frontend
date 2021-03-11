<template>
  <nav>
    <ul class="container">
      <li class="nav-item selected">
        <router-link to="/revision">
          <i class="fas fa-book"></i>
          <p class="revision">Revision</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/">
          <i class="fas fa-home"></i>
          <p class="home">Home</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/newterm">
          <i class="fas fa-plus"></i>
          <p class="newterm">New Term</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
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
  & i {
    font-size: 1.4rem;
    color: #4a4a4a;
  }
  & p {
    font-size: 0.875rem;
    font-weight: 500;
    color: #4a4a4a;
    margin-top: 0.25rem;
  }
  & .selected {
    color: linear-gradient(322.56deg, #3461ff 0%, #34b6ff 89.84%);
  }
}
</style>
