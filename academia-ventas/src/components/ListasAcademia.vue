<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>Agrega tu Curso</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ListaAdministracion />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>Registra tu nuevo Usuario</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Registrar />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>Base de Datos Pospectos y Estudiantes</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <ListaProspectos />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import ListaAdministracion from "@/components/ListaAdministracion.vue";
import Registrar from "@/components/Registrar.vue";
import ListaProspectos from "@/components/ListaProspectos.vue";

export default {
  name: "ListasAcademia",
  components: {
    ListaAdministracion,
    Registrar,
    ListaProspectos,
  },
};
</script>

<style>
</style>