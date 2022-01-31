<template>
  <div>
    <v-container>
    <h2>Prospectos</h2>
    <div>
      <v-data-table
        :headers="headers"
        :items="enviarProspectos"
        :items-per-page="5"
        item-key="nombre"
        class="elevation-1"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
      >

        <template v-slot:[`item.matriculado`]="{ item }">
          <v-chip
            :color="item.matriculado ? 'blue lighten-1' : 'brown lighten-3'"
            dark
          >
            {{ item.matriculado ? "Si" : "No" }}
          </v-chip>
        </template>
        <template v-slot:[`item.egresado`]="{ item }">
          <v-chip
            :color="item.egresado ? 'blue lighten-1' : 'brown lighten-3'"
            dark
          >
            {{ item.egresado ? "Si" : "No" }}
          </v-chip>
        </template>

        <template v-slot:[`item.acciones`]="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                small
                class="mr-3"
                @click="editando(item)"
                v-bind="attrs"
                v-on="on"
              >
                mdi-pencil
              </v-icon>
            </template>
            <span>Editar</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon small @click="eliminando(item)" v-bind="attrs" v-on="on">
                mdi-delete
              </v-icon>
            </template>
            <span>Eliminar</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "ListaProspectos",
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Nombre", align: "start", value: "name" },
        { text: "Rut", value: "rut" },
        { text: "Email", value: "email" },
        { text: "Telefono", value: "telefono" },
        { text: "Fecha", value: "fechanacimiento" },
        { text: "Ocupacion", value: "ocupacion" },
        { text: "Matriculado", value: "matriculado" },
        { text: "Egresado", value: "egresado" },
        { text: "Acciones", value: "acciones" },
      ],
    };
  },

  computed: {
    ...mapGetters(["enviarProspectos"]),
  },

  methods: {
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
          this.$store.dispatch("eliminarProspecto", item.idDoc).then(() => {
            Swal.fire("Eliminado", "El curso fue eliminado", "success");
          });
        }
      });
    },
    editando(item) {
      this.$router.push({ name: "EditandoProspecto", params: { id: item.idDoc } });
    },
  },
};
</script>

<style>
</style>