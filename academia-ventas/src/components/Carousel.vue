<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    height="200"
    hide-delimiters
    :show-arrows="false"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-row class="fill-height" align="center" justify="center">
          <v-container class="text-h5 text-{md}-{h3} text-center white--text">{{ slide }}</v-container>
        </v-row><hr>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      colors: [
        "primary",
        "warning",
        "primary",
        "success",
        "primary",
        "warning",
      ],
      slides: [
          "Sólo hay una persona que puede decidir lo que voy a hacer, y soy yo mismo. (Ciudadano Kane)",
          "Primera academia de ventas 100% online", 
          "Es la perseverancia la que hace grandes a los hombres, no la fuerza. (Friederich Nietzsche)", 
          "Consigue tu trabajo como vendedor en una gran empresa y transforma tu vida", 
          "Cuando no podemos cambiar la situación a la que nos enfrentamos, el reto consiste en cambiarnos a nosotros. (Victor Frankl)", 
          "Aprende los secretos del arte de la venta e implementalos en una vida exitosa"],
    };
  },
};
</script>