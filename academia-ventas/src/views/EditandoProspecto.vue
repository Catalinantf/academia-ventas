<template>
  <v-container>
    <h1 class="my-5 text-center text-h5 text-sm-h2">
      Editando estado de {{ name }}
    </h1>
    <div class="mt-10">
      <v-form ref="form" v-model="valid" lazy-validation>
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
          type="number"
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
          type="number"
        ></v-text-field>
        <!-- Ocupación del Prospecto -->
        <v-text-field
          v-model="ocupacion"
          label="Profesión u Ocupación:"
          required
        ></v-text-field>
        <!-- estado del Prospecto -->
        <v-switch
          v-model="matriculado"
          :label="matriculado ? 'Matriculado: Si' : 'Matriculado: No'"
          color="indigo"
          :true-value="matriculado"
          hide-details
        ></v-switch>
        <v-switch
          v-model="egresado"
          :label="egresado ? 'Egresado: Si' : 'Egresado: No'"
          color="indigo"
          :true-value="egresado"
          hide-details
        ></v-switch>

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
            Actualizar
          </v-btn>

          <v-btn
            color="error"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="reset"
          >
            Limpiar Formulario
          </v-btn>

          <v-btn
            color="warning"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="resetValidation"
          >
            Limpiar Validación
          </v-btn>

          <v-btn
            color="primary"
            class="mt-4 mt-sm-4 mt-md-0 mt-lg-0 mt-xl-0 mx-4"
            @click="$router.go(-1)"
          >
            Regresar
          </v-btn>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters } from "vuex";

export default {
  name: "EditandoProspecto",
  props: ["id"],
  computed: {
    ...mapGetters(["enviarProspectos"]),
  },
  data() {
    return {
      valid: true,
      name: "",
      email: "",
      rut: 0,
      telefono: 0,
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
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros",
      ],
      telefonoRules: [
        (v) => !!v || "El número de teléfono es requerido",
        (v) =>
          (v && v.length >= 9 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser números",
      ],
      dialog: false,
      matriculado: false,
      egresado: false,
    };
  },

  mounted() {
    let prospectoEncontrado = this.enviarProspectos.find(
      (result) => result.idDoc === this.id
    );
    if (prospectoEncontrado !== undefined) {
      this.name = prospectoEncontrado.name;
      this.email = prospectoEncontrado.email;
      this.rut = parseInt(prospectoEncontrado.rut);
      this.idDoc = prospectoEncontrado.idDoc;
      this.telefono = parseFloat(prospectoEncontrado.telefono);
      this.ocupacion = prospectoEncontrado.ocupacion;
      this.matriculado = prospectoEncontrado.matriculado;
      this.egresado = prospectoEncontrado.egresado;
      this.fechanacimiento = prospectoEncontrado.fechanacimiento;
      // let fecha = prospectoEncontrado.fechanacimiento;
      // fecha = new Intl.DateTimeFormat("cl").format(fecha);
      // this.fechanacimiento = fecha.split("-").reverse().join("-");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Esta persona no existe",
        footer: "Intenta nuevamente",
      });
      setTimeout(() => {
        this.$router.replace({ name: "Administracion" });
      }, 1000);
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        let prospectoNuevo = {
          name: this.name,
          email: this.email,
          rut: parseInt(this.rut),
          fechanacimiento: this.fechanacimiento,
          telefono: parseInt(this.telefono),
          ocupacion: this.ocupacion,
          matriculado: this.matriculado,
          egresado: this.egresado,
          idDoc: this.idDoc,
        };
        this.$store.dispatch("actualizarProspecto", prospectoNuevo).then(() => {
          Swal.fire("Muy Bien", "Actualizado con éxito", "success");
          this.reset();
          setTimeout(() => {
            this.$router.replace({ name: "Administracion" });
          }, 1000);
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
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>