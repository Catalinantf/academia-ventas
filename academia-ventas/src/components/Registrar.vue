<template>
  <v-container>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :counter="20"
          :rules="passwordRules"
          label="Password"
          required
          type="password"
        ></v-text-field>

        <v-container
          class="
            mt-5
            d-flex
            justify-center
            align-content-center
            flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row
          "
        >
          <v-btn
            :disabled="!valid"
            color="success"
            class="mt-2 mt-sm-2 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="validate"
          >
            Registrar
          </v-btn>

          <v-btn
            color="error"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="reset"
          >
            Limpiar Formulario
          </v-btn>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import firebase from "firebase";

export default {
  name: "Acceso",
  data() {
    return {
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 6) ||
          "La contraseña debe ser mayor o igual que 6 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "El correo Electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo Electrónico debe ser válido",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            setTimeout(() => {
              this.$router.replace({ name: "Administracion" }).catch(() => {});
            }, 500);
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Debes ingresar datos permitidos!",
              footer: "Intenta nuevamente",
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes ingresar datos permitidos!",
          footer: "Intenta nuevamente",
        });
      }
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
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>