<template class="bg-dark">
  <div class="text-white">
    <h2>Inicia sesión</h2>

    <b-container class="w-50">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Email:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            :rules="emailRules"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form @submit.stop.prevent>
          <label for="text-password">Contraseña</label>
          <b-form-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
            v-model="password"
            :rules="passwordRules"
            required
          ></b-form-input>
          <b-form-text id="password-help-block">
          </b-form-text>
        </b-form>

        <b-form-group id="input-group-3" label="Usuario:" label-for="input-3">
          <b-form-select
            id="input-3"
            v-model="form.usuario"
            :options="usuarios"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Ingresar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        usuario: null,
        checked: [],
      },
      usuarios: [
        { text: "Seleccione uno", value: null },
        "Estudiante",
        "Profesor",
        "Admnistración",
      ],
      emailRules: [
        (v) => !!v || "El correo Electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo Electrónico debe ser válido",
      ],
      passwordRules: [
        (v) => !!v || "La contraseña es requerida",
        (v) =>
          (v && v.length >= 6) ||
          "La contraseña debe ser mayor o igual que 6 caracteres",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.usuario = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            setTimeout(() => {
              this.$router.replace({ name: "Inicio" }).catch((error) => {
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
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>