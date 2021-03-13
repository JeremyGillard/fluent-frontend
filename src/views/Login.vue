<template>
  <main class="login">
    <img class="icon" src="../assets/reviewer.png" alt="app icon" />
    <form @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" required type="email" name="email" id="email" />
      <label for="password">Password</label>
      <input
        v-model="password"
        required
        type="password"
        name="password"
        id="password"
      />
      <p v-if="error">{{ error }}</p>
      <button type="submit">Login</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      const user = {
        email: this.email,
        password: this.password,
      };
      this.$store.commit('auth', user);
      this.password = '';
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    user: function(value) {
      if (value) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f3f3f3;
}
.icon {
  width: 40vw;
  max-width: 15rem;
}
label,
input {
  display: block;
}
label {
  font-size: 1.375rem;
  color: #4a4a4a;
  margin: 1rem 0 0.25rem;
  user-select: none;
}
input {
  width: 15.85rem;
  background-color: #f3f3f3;
  font-size: 1.2rem;
  padding: 0.45rem 0.5rem 0.25rem;
  border: 0.5px #4a4a4a7a solid;
  border-radius: 0.25rem;
}
p {
  color: #b10000;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  width: 15.85rem;
}
button {
  font-size: 1.625rem;
  color: white;
  padding: 0.26em 4em;
  margin-top: 1rem;
  margin-bottom: 2rem;
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
