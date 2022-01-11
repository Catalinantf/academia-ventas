<template>
  <div id="app">
    <div id="nav">
      <Navbar />

      <!-- <router-link to="/">HOME</router-link> |
      <router-link to="/vistaadministrador">ADMINISTRACION</router-link>|
      <router-link to="/vistaestudiante">ESTUDIANTES</router-link>|
      <router-link to="/vistaprofesor">PROFESORES</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
import Navbar, { NavBar } from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
