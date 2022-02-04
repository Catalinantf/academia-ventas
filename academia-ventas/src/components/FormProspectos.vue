<template>
<div class="success pa-1">

    <h4 class="white--text" >Admisión 2022</h4>
    <v-container class="red darken-1">

    <h5 class="white--text" >Hola ¡Contáctanos para más info!</h5>
    </v-container >

    <v-form ref="form" v-model="valid" lazy-validation  class="green lighten-5 pa-3">
      <!-- nombre del Prospecto -->
      <v-text-field
        v-model="name"
        :counter="40"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>
      <!-- Mail del Prospecto -->
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <!-- Rut del Prospecto -->
      <v-text-field
        v-model="rut"
        :rules="rutRules"
        label="Ingresa tu Rut (sin puntos ni guión)"
        required
      ></v-text-field>
      <!-- Fecha de nacimiento -->
      <v-text-field
        v-model="fechanacimiento"
        label="Fecha de Nacimiento"
        required
        type="date"
      ></v-text-field>
      <!-- Teléfono del Prospecto -->
      <v-text-field
        v-model="telefono"
        :rules="telefonoRules"
        label="Teléfono"
        required
      ></v-text-field>
      <!-- Ocupación del Prospecto -->
      <v-text-field
        v-model="ocupacion"
        label="Profesión u Ocupación:"
        required
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
          Solicitar Información
        </v-btn>
      </v-container>
    </v-form>
</div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  name: "FormProspectos",
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      rut: "",
      telefono: "",
      ocupacion: "",
      fechanacimiento: "",
      nameRules: [
        (v) => !!v || "El nombre es requerido",
        (v) => (v && v.length >= 3) || "Este nombre es muy corto",
      ],
      emailRules: [
        (v) => !!v || "El correo Electrónico es requerido",
        (v) => /.+@.+\..+/.test(v) || "El correo Electrónico debe ser válido",
      ],
      rutRules: [
        (v) => !!v || "El Rut es requerido",
        (v) =>
          (v && v.length >= 9 && /\d/gim.test(v) && v >= 0) ||
          "Ingresa tu RUT completo. Sólo deben ser números",
      ],
      telefonoRules: [
        (v) => !!v || "El número de teléfono es requerido",
        (v) =>
          (v && v.length >= 9 && /\d/gim.test(v) && v >= 0) ||
          "Este número telefónico es muy corto",
      ],

      dialog: false,
      headers: [
        { text: "Name", align: "start", value: "name" },
        { text: "Email", value: "email" },
        { text: "Rut", value: "rut" },
        { text: "Telefono", value: "telefono" },
        { text: "Ocupacion", value: "ocupacion" },
        { text: "Matriculado", value: "matriculado" },
        { text: "Egresado", value: "egresado" },
        { text: "Fecha de Nacimiento", value: "fechanacimiento" },
      ],
    };
  },
  
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        let prospectoNuevo = {
          name: this.name,
          email: this.email,
          rut: this.rut,
          fechanacimiento: this.fechanacimiento,
          telefono: parseInt(this.telefono),
          ocupacion: this.ocupacion,
          matriculado: false,
          egresado: false,
        };
        Swal.fire({
          title: "¿Seguro que deseas solicitar información?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: '<span style="color: white">Cancelar</span>',
          confirmButtonText: "Si, quiero esa info!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store
              .dispatch("agregarProspecto", prospectoNuevo)
              .then(() => {
                Swal.fire(
                  "Muy Bien",
                  "Solicitaste información con éxito",
                  "success"
                );
                this.reset();
                this.dialog = false;
              });
          } else {
            this.reset();
            this.dialog = false;
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Existen errores en los datos",
          footer: "Intenta nuevamente",
        });
      }
    },  
  },
};
</script>

<style>

</style>