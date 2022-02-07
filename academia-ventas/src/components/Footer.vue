<template>
  <v-footer id="footer" class="white" dark>
    <v-card flat tile width="100%" class="text-center" color="white">
      <v-card-text class="black--text">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 black--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <br />
        <small
          ><span class="muted"
            >ACADEMIA VENTAS © TODOS LOS DERECHOS RESERVADOS</span
          ></small
        >
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"],
  }),
};
</script>