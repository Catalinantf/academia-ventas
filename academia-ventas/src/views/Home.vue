<template>
  <div class="home bg-dark text-white">
    <h2 class="p-5 text-center">Admisión 2022</h2>
    

    
    <b-container class="w-50 py-5">
      <h3>¡Te entregamos toda la informacion que necesitas!</h3>
      <ContactForm />
    </b-container>
    <b-container>
    <div class="cards-profesores">
      <b-card-group>
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-top
          bg-variant="dark"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-top
          bg-variant="dark"
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-top
          bg-variant="dark"
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    </b-container>
    <b-container class="p-5 text-center">

        <a href="https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg" target="_blank">Descarga la malla aquí</a>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Home",
  components: {
    ContactForm,
  },

};
</script>
