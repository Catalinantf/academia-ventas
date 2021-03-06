<template>
  <v-container>
    <h1 class="my-5 text-center text-h5 text-sm-h2">
      Editando el curso: {{ nombre }}
    </h1>
    <div class="mt-10">
      <v-form ref="form" v-model="valid" lazy-validation>
        <!-- nombre del curso -->
        <v-text-field
          v-model="nombre"
          :counter="20"
          :rules="nombreRules"
          label="Nombre"
          required
        ></v-text-field>
        <!-- imagen del curso -->
        <v-text-field
          v-model="imagen"
          label="URL de la Imagen del curso"
          required
          type="url"
        ></v-text-field>
        <!-- inscritos en el curso -->
        <v-text-field
          v-model="inscritos"
          label="Inscritos en el curso"
          required
        ></v-text-field>
        <!-- duracion del curso -->
        <v-text-field
          v-model="duracion"
          label="Duración del curso"
          required
        ></v-text-field>
        <!-- id del curso -->
        <v-text-field
          v-model="codigo"
          label="Código del curso"
          required
        ></v-text-field>
        <!-- fecha de registro del curso -->
        <v-text-field
          v-model="fecharegistro"
          label="Fecha de Registro"
          type="date"
        ></v-text-field>
        <!-- estado del curso -->
        <v-switch
        class="mb-5"
          v-model="estado"
          :label="estado ? 'Terminado: Si' : 'Terminado: No'"
          color="indigo"
          :true-value="estado"
          hide-details
        ></v-switch>
        <!-- decripcion del curso -->
        <v-textarea
          outlined
          label="Descripción del curso"
          v-model="descripcion"
        >
        </v-textarea>

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
  name: "Editando",
  props: ["id"],
  computed: {
    ...mapGetters(["enviarCursos"]),
  },
  data() {
    return {
      valid: true,
      nombre: "",
      imagen: "",
      codigo: "",
      inscritos: 0,
      descripcion: "",

      duracion: "",
      nombreRules: [
        (v) => !!v || "Name is required",
        (v) =>
          (v && v.length >= 2) ||
          "El nombre debe ser mayor o igual a dos caracteres",
      ],
      dialog: false,
      fecharegistro: "",
      estado: false,
    };
  },
  watch: {
    estado(nuevo) {
      if (nuevo) {
        this.inscritos = 0;
      }
    },
  },
  mounted() {
    let cursoEncontrado = this.enviarCursos.find(
      (result) => result.idDoc === this.id
    );
    if (cursoEncontrado !== undefined) {
      this.duracion = cursoEncontrado.duracion;
      this.codigo = cursoEncontrado.codigo;
      this.idDoc = cursoEncontrado.idDoc;
      this.imagen = cursoEncontrado.imagen;
      this.descripcion = cursoEncontrado.descripcion;
      this.nombre = cursoEncontrado.nombre;
      this.estado = cursoEncontrado.estado;
      this.inscritos = parseInt(cursoEncontrado.inscritos);
      let fecha = cursoEncontrado.fecharegistro.toDate();
      fecha = new Intl.DateTimeFormat("cl").format(fecha);
      this.fecharegistro = fecha.split("-").reverse().join("-");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No existe el curso",
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
        let cursoNuevo = {
          nombre: this.nombre,
          codigo: this.codigo,
          inscritos: parseInt(this.inscritos),
          imagen: this.imagen,
          duracion: this.duracion,
          estado: this.estado,
          fecharegistro: new Date(this.fecharegistro),
          idDoc: this.idDoc,
          descripcion: this.descripcion,
        };
        this.$store.dispatch("actualizarCurso", cursoNuevo).then(() => {
          Swal.fire("Muy Bien", "Curso Actualizado con éxito", "success");
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