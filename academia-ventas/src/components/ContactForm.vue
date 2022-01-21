<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nombre:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Ingresa tu Nombre"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="RUT:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.rut"
          placeholder="Ingresa tu Rut"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Edad:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.edad"
          placeholder="Ingresa tu Edad"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Teléfono:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.telefono"
          placeholder="+569"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Email:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          v-model="form.email"
          type="email"
          placeholder="ejemplo@mail.com"
          required
        ></b-form-input>
        <b-form-group
          id="input-group-6"
          label="Profesión u Ocupación:"
          label-for="input-6"
        >
          <b-form-input
            id="input-6"
            v-model="form.ocupacion"
            placeholder="¿A qué te dedicas?"
          ></b-form-input>
        </b-form-group>
      </b-form-group>

      <b-button class="my-2" type="submit" variant="primary">Solicitar Información</b-button>
      <b-button class="m-2" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        rut:"",
        edad:"",
        telefono:"",
        email: "",
        ocupacion:"",

        // checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },

   //limpiar fomulario 
    onReset(event) {
      event.preventDefault();
      // Reset our form values

      this.form.name = "";
      this.form.rut = "";
      this.form.edad = "";
      this.form.telefono = "";
      this.form.email = "";
      this.form.ocupacion = "";
    //   this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>