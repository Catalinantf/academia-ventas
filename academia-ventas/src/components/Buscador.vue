<template>
  <div class="container pt-5">
    <div>
      <h2 class="mb-4">Buscar :</h2>
      <input
        type="text"
        v-model="buscarPorRut"
        placeholder="Busca por el Rut"
      />
      <ListaProspectos
        v-if="buscarPorRut(buscarPorRut).length > 0"
        :juegos="buscarPorRut(buscarPorRut)"
      ></ListaProspectos>
    </div>

    <!-- <div class="my-5">
      <h2 class="mb-4">Cantidad de juegos y de stock total:</h2>
      <div>
        <div class="badge badge-dark text-success m-3 p-2">
          <h4>Cantidad de juegos: {{ $store.state.juegos.length }}</h4>
        </div>

        <div class="badge badge-dark text-danger m-3 p-2">
          <h4>Stock Total: {{ stockTotal }}</h4>
        </div>
      </div>
    </div> -->

    <div>
      <h2 class="mb-4">Listado de Personas</h2>
      <ListaProspectos :prospectos="$store.state.prospectos"></ListaProspectos>
    </div>
  </div>
</template>

<script>
import ListaProspectos from "../components/ListaProspectos.vue";
import { mapGetters } from "vuex";

export default {
  name: "Buscador",
  data() {
    return {
      buscarPorRut: "",
    };
  },
  components: {
    ListaProspectos,
  },

  computed: {
    ...mapGetters(["buscarPorRut"]),
  },

  methods: {},
};
</script>

<style></style>
