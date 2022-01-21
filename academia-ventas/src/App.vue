<template>
  <div id="app" class="bg-dark">
   <Navbar />
<router-view />
<Footer />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
};
</script>

