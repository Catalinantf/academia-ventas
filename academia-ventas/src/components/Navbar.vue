<template>
  <div>
    <b-navbar
      toggleable="md"
      type="light"
      variant="info"
      class="navbar-light bg-light"
    >
      <b-container>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav  class="ms-auto">
            <b-nav-item :to="{ name:'Home'}">Home</b-nav-item>
             <b-nav-item :to="{ name:'VistaEstudiante'}">Estudiantes</b-nav-item>
              <b-nav-item :to="{ name:'VistaProfesor'}">Profesores</b-nav-item>
               <b-nav-item :to="{ name:'VistaAdministrador'}">Administración</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  Name: "Navbar",
};
</script>

<style>
</style>