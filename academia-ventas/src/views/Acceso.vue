<template>
  <v-container class="contenedor">
    <h1 class="mt-10">Inicio de Sesión</h1>
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
            flex-column
            flex-sm-column
            flex-md-column
            flex-lg-column
            flex-xl-column
          "
        >
          <v-btn
            :disabled="!valid"
            color="success"
            class="mt-2 mt-sm-2 mt-md-1 mt-lg-1 mt-xl-1 mx-4"
            @click="validate"
          >
            Iniciar
          </v-btn>
<!-- 
          <v-btn
            color="error"
            class="mt-4 mt-sm-4 mt-md-1 mt-lg-1 mt-xl-1 mx-4"
            @click="reset"
          >
            Limpiar Formulario
          </v-btn>

          <v-btn
            color="warning"
            class="mt-4 mt-sm-4 mt-md-1 mt-lg-1 mt-xl-1 mx-4"
            @click="resetValidation"
          >
            Limpiar Validación
          </v-btn> -->
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
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            setTimeout(() => {
              this.$router.replace({ name: "Administracion" }).catch((error) => {
                console.info(error.message);
              });
            }, 500);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.log("no permitido");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes ingresar datos permitidos!",
          footer: "Intenta nuevamente",
        }); 
      }
    },
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // },
  },
};
</script>

<style>
.contenedor {
  max-width: 35%;
}
</style>
