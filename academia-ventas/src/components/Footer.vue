<template>
  <div>
    <v-card color="yellow darken-1 text-center">
      <v-container>
        <div id="app">
          <section v-if="errored">
            <p>
              Lo sentimos, no es posible obtener la información en este momento,
              por favor intente nuevamente mas tarde
            </p>
          </section>
          <section v-else>
            <div v-if="loading">Cargando...</div>
            <small v-for="currency in info" :key="currency" class="currency">
              1 BTC ={{ currency.description }}:
              <span class="lighten">
                <span v-html="currency.symbol"></span
                >{{ currency.rate_float | currencydecimal }}
              </span>
            </small>
          </section>
        </div>
      </v-container>
    </v-card>
    <v-footer id="footer" class="white" dark>
      <v-card flat tile width="100%" class="text-center" color="white">
        <v-card-text class="black--text">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 black--text"
            icon
          >
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-instagram", "mdi-facebook", "mdi-twitter"],
    info: null,
    loading: true,
    errored: false,
  }),
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response.data.bpi))
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
};
</script>