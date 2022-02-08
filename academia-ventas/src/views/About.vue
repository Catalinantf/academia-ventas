<template >
  <div class="black h-100 ">
    <v-container>
      <v-container class="text-center white--text pt-9 px-16">
        <v-card class="red darken-4 pa-9">
          <h4>QUIÉNES SOMOS</h4>
          <span>
            Academia de Ventas es una plataforma de crecimiento profesional 100%
            online, creada en 2021 por su CEO Felipe Mesa, donde cualquier
            persona, sin importar clase social, sexo o experiencia previa, puede
            transformarse en la mejor versión de sí mismo rápidamente.
          </span>
        </v-card>
        <v-card class="green darken-4 pa-9">
          <h3>MISIÓN</h3>
          <span>
            A través de nuestros programas educativos, iniciativas tecnológicas
            y servicios de consultoría en ventas y marketing logramos que todos
            nuestros clientes puedan vender más, más rápido y con menos estrés.
          </span>
        </v-card>
        <v-card class="blue darken-4 pa-9">
          <h3>VISIÓN</h3>
          <span>
            Aspiramos a revolucionar el modelo educacional actual y la forma de
            hacer negocios en el mundo, convirtiendo estas dos en modelos más
            efectivos, más conscientes y más divertidos. Aspiramos a que
            individuos,asociaciones, gobiernos y empresas de todo tipo de
            productos o servicios reconozcan que un servicio excelente es la
            mejor forma de vender y que apliquen a diario iniciativas que
            generen una conexión emocional positiva entre ellos y sus clientes
            para ser más rentables, más felices y tener un mayor impacto.
          </span>
        </v-card>
        <hr />
        <v-container>
          <b-button
            :to="{ name: 'Home' }"
            class="text-white mt-4"
            variant="success"
            size="lg"
            >Contáctanos</b-button
          >
        </v-container>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

