<template>
  <v-app>
    <BarraNavegacion />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import BarraNavegacion from "@/components/BarraNavegacion.vue";
import firebase from "firebase";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    BarraNavegacion,
    Footer,
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
    this.$store.dispatch("ProspectosDb");
  },
};
</script>