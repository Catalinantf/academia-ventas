<template>
  <div>
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon :to="{ name: 'Home' }">
        <v-img
          src="../assets/49d8b89a-d28f-42e9-8451-978d7a17d88a.png"
          max-height="40"
          max-width="40"
        ></v-img>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="cursor"> Academia Ventas </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mr-14">
        <v-btn icon v-if="enviarUser" @click="salidaOut">
          <span class="ml-3 text-caption d-none d-sm-inline" alt="Salir">{{
            enviarUser.email
          }}</span>
          <v-icon
            right
            class="mr-0 mr-sm-14 mr-md-14 ml-16 ml-sm-1"
            alt="Salida"
            >mdi-logout</v-icon
          >
        </v-btn>
        <v-btn icon v-else :to="{ name: 'Home' }">
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Administracion' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Administracion</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ name: 'About' }">
            <v-list-item-icon>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Quiénes Somos</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name: 'Acceso' }">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Iniciar Sesión</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Swal from "sweetalert2";

export default {
  name: "BarraNavegacion",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    ...mapGetters(["enviarUser"]),
  },

  methods: {
    salidaOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log Out con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.$router.push({ name: "Acceso" }).catch(() => {});
          }, 1000);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.cursor {
  &:hover {
    cursor: pointer;
  }
}
</style>