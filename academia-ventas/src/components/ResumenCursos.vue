<template>
  <v-container>
    <div class="my-6 d-flex justify-center">
      <div class="mt-8">
        <v-alert
          color="purple"
          dense
          elevation="1"
          icon="mdi-account-group"
          outlined
        >
          Cantidad total de alumnos inscritos:
          <strong>{{ totalAlumnosInscritos }}</strong> alumnos
        </v-alert>
        <v-alert
          color="red"
          dense
          elevation="1"
          icon="mdi-account-clock"
          outlined
        >
          Cantidad total de cursos terminados:
          <strong>{{ totalCursosTerminados }}</strong> cursos.
        </v-alert>
        <v-alert
          color="brown"
          dense
          elevation="1"
          icon="mdi-bell-ring"
          outlined
        >
          Cantidad total de cursos activos:
          <strong>{{ cursosActivos }}</strong> cursos.
        </v-alert>
        <v-alert
          color="deep-orange"
          dense
          elevation="1"
          icon="mdi-bell-ring"
          outlined
        >
          Cantidad total de cursos:
          <strong>{{ cantidadTotalCursos }}</strong> cursos.
        </v-alert>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "ResumenCursos",
  data() {
    return {
      valid: true,
      nombre: "",
      imagen: "",
      codigo: "",
      inscritos: 0,
      duracion: "",
      descripcion: "",

      inscritosRules: [
        (v) => !!v || "La cantidad de Inscritos es requerida",
        (v) =>
          (v && v.length >= 0 && /\d/gim.test(v) && v >= 0) ||
          "Solo deben ser numeros positivos",
      ],
      nombreRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 10 characters",
      ],
      dialog: false,
      headers: [
        {
          text: "Curso",
          align: "start",
          value: "nombre",
        },
        { text: "Inscritos", value: "inscritos" },
        { text: "Duración", value: "duracion" },
        { text: "Terminado", value: "estado" },
        { text: "Fecha", value: "fecharegistro" },
        { text: "Acciones", value: "acciones" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "enviarCursos",
      "totalAlumnosInscritos",
      "totalCursosTerminados",
    ]),
    cursosActivos() {
      return this.enviarCursos.length - this.totalCursosTerminados;
    },
    cantidadTotalCursos() {
      return this.enviarCursos.length;
    },
  },
  filters: {
    formatoNum(valor) {
      return new Intl.NumberFormat("cl", {
        style: "currency",
        currency: "CLP",
      }).format(valor);
    },
    formatoFecha(valor) {
      let fecha = new Intl.DateTimeFormat("cl").format(valor.toDate());
      return fecha; // toDate() metodo propio de firebase para trasnformar la base de datos con fechas
    },
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        let cursoNuevo = {
          nombre: this.nombre,
          codigo: this.codigo,
          imagen: this.imagen,
          inscritos: parseInt(this.inscritos),
          duracion: this.duracion,
          estado: false,
          descripcion: this.descripcion,
          fecharegistro: new Date(),
        };
        Swal.fire({
          title: "¿Seguro que deseas agregar el curso?",
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: '<span style="color: white">Cancelar</span>',
          confirmButtonText: "Si, agregar curso!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("agregarCurso", cursoNuevo).then(() => {
              Swal.fire("Muy Bien", "Curso agregado con éxito", "success");
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

<style lang="scss">
</style>