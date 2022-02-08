<template>
<div class="red">
  <v-card>
    <v-toolbar color="purple" dark flat>
      <template>
        <v-tabs v-model="tabs" centered>
          <v-tab> Resumen </v-tab>
          <v-tab> Administración </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tabs" >
      <v-tab-item >
        <v-card flat color="purple lighten-5">
          <v-card-title class="text-h4 text-center "> Resumen </v-card-title>
          <v-card-text>
            <ResumenCursos />
            <ListaCursos />
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="text-h4 text-center"> Administración </v-card-title>
          <v-card-text>
            <ListasAcademia />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
</template>



<script>
import ListasAcademia from "@/components/ListasAcademia.vue";
import ListaCursos from "@/components/ListaCursos.vue";
import ResumenCursos from "@/components/ResumenCursos.vue";

export default {
  name: "Administracion",
  components: {
    ListasAcademia,
    ListaCursos,
    ResumenCursos,
  },
  data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
</style>