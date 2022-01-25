<template>
  <v-app>
    <BarraNavegacion />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import BarraNavegacion from "@/components/BarraNavegacion.vue";
import firebase from "firebase";

export default {
  name: "App",
  components: {
    BarraNavegacion,
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch("cargarUsuario", user);
      } else {
        this.$store.dispatch("cargarUsuario", null);
      }
    });
    this.$store.dispatch("CursosDb");
  },
};
</script>