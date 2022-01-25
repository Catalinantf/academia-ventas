<template>
  <div>
    <BarraNavegacionAdm />
    <ListaAdministracion />
    <Registrar />
    <ListaCursos />
    <ListaProspectos />
    
  </div>
</template>
<script>
import ListaAdministracion from "@/components/ListaAdministracion.vue";
import Registrar from "@/components/Registrar.vue";
import ListaCursos from "@/components/ListaCursos.vue";
import BarraNavegacionAdm from '../components/BarraNavegacionAdm.vue';
import ListaProspectos from "@/components/ListaProspectos.vue";

export default {
  name: "Administracion",
  components: {
    ListaAdministracion,
     ListaCursos,
    Registrar,
    BarraNavegacionAdm,
    ListaProspectos
    
  },
};
</script>