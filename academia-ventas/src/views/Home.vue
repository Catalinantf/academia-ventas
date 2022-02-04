<template>
  <div class="home black">
    <main class="home text--white pt-7">
      <b-container class="bv-example-row">
        <b-row class="text-center">
          <b-col>
            <main class="hero h-100"></main>
          </b-col>

          <b-col cols="4">
            <FormProspectos />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <!-- inicio carousel -->
    <b-container>
      <v-carousel
        cycle
        height="200"
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
        ma-5
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </b-container>
    <!-- fin carousel -->
    <!-- inicio card -->
    <b-container class="p-5">
      <h2 class="text-white p-5 text-center">Nuestro Equipo</h2>
      <div class="cards-profesores">
        <b-card-group>
          <b-card bg-variant="black" text-variant="white">
            <img
              class="
                card-img-top
                rounded-circle
                my-3
                border border-4 border-danger
              "
              src="../assets/DSC_2118_01.jpg"
              alt="Card image cap"
            />

            <b-card-text>
              <h4>Felipe Mesa</h4>
              <small class="muted">
                Ingeniero Comercial de Universidad Autónoma, MBI en USACH,
                diploma en Innovación y Liderazgo en Universidad de Oxford y
                diploma en Product Management en USACH
              </small>
            </b-card-text>
            <template #footer>
              <h6>Director y docente</h6>
            </template>
          </b-card>

          <b-card bg-variant="black" text-variant="white">
            <img
              class="
                card-img-top
                rounded-circle
                my-3
                border border-4 border-warning
              "
              src="../assets/DSC_2118_01.jpg"
              alt="Card image cap"
            />
            <b-card-text>
              <h4>Ulises Matamala</h4>
              <small class="muted">
                Ingeniero Industrial de Universidad Andrés Bello, Magister en
                Marketing Universidad Católica
              </small>
            </b-card-text>
            <template #footer>
              <h6>Coordinador Académico y docente</h6>
            </template>
          </b-card>

          <b-card bg-variant="black" text-variant="white">
            <img
              class="
                card-img-top
                rounded-circle
                my-3
                border border-4 border-primary
              "
              src="../assets/DSC_2118_01.jpg"
              alt="Card image cap"
            />

            <b-card-text>
              <h4>Rocío Matamala</h4>
              <small class="muted">
                Ingeniero comercial de Universidad Andrés Bello.
              </small>
            </b-card-text>
            <template #footer>
              <h6>Secretaría Académica</h6>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
    <!-- fin card -->
    <!--inicio Link -->
    <b-container class="p-5 text-center">
      <a
        href="https://drive.google.com/file/d/1IPrqHJsvtkmAcGLCwobF7iJaOtnWEFsc/view?usp=sharing"
        target="_blank"
        >Descarga la malla aquí</a
      >
    </b-container>
    <!-- fin link -->

    <b-container>
      <div style="width: 80vw">
        <div
          style="
            position: relative;
            padding-bottom: 56.25%;
            padding-top: 0;
            height: 0;
          "
        >
          <iframe
            frameborder="0"
            width="1200"
            height="675"
            style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            "
            src="https://view.genial.ly/61fc802a9a91010018e2ea75"
            type="text/html"
            allowscriptaccess="always"
            allowfullscreen="true"
            scrolling="yes"
            allownetworking="all"
          ></iframe>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import FormProspectos from "@/components/FormProspectos.vue";

export default {
  name: "Home",
  components: {
    FormProspectos,
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
<style>
/* div{
 background-color: black; 
 color: white;
} */
.hero {
  background-image: url("../assets/001_Portada.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
}
</style>
