<template>
  <v-container>
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
      <!-- Fecha de naciemeitno del Prospecto  PENDIENTE!!!-->
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

        <!-- <v-btn
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
                    </v-btn> -->
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
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
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros",
      ],
      telefonoRules: [
        (v) => !!v || "El número de teléfono es requerido",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser números",
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
        { text: "Fecha", value: "fechanacimiento" },
        { text: "Acciones", value: "acciones" },
      ],
    };
  },
  // computed: {
  //   ...mapGetters([
  //     "enviarCursos",
  //     "totalAlumnosPermitidos",
  //     "totalAlumnosInscritos",
  //     "totalCursosTerminados",
  //   ]),
  //   cuposRestantes() {
  //     return this.totalAlumnosPermitidos - this.totalAlumnosInscritos;
  //   },
  //   cursosActivos() {
  //     return this.enviarCursos.length - this.totalCursosTerminados;
  //   },
  //   cantidadTotalCursos() {
  //     return this.enviarCursos.length;
  //   },
  // },
  filters: {
    // formatoNum(valor) {
    //   return new Intl.NumberFormat("cl", {
    //     style: "currency",
    //     currency: "CLP",
    //   }).format(valor);
    // },
    // formatoFecha(valor) {
    //   let fechanacimiento = new Intl.DateTimeFormat("cl").format(valor.toDate());
    //   return fechanacimiento; // toDate() metodo propio de firebase para trasnformar la base de datos con fechas
    // },
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
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    eliminando(item) {
      Swal.fire({
        title:
          '<span class="font-weight-regular">¿Seguro que deseas eliminar el curso?</span>',
        text: "No se puede volver a recuperar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2196F3",
        cancelButtonColor: "#F44336",
        cancelButtonText:
          '<span style="color: white"><strong>Cancelar</strong></span>',
        confirmButtonText:
          '<span style="color: white"><strong>Si, borrar!</strong></span>',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch("eliminarCurso", item.idDoc).then(() => {
            Swal.fire("Eliminado", "El curso fue eliminado", "success");
          });
        }
      });
    },
    editando(item) {
      this.$router.push({ name: "Editando", params: { id: item.idDoc } });
    },
  },
};
</script>

<style>
</style>