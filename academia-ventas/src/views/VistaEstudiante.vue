<template>
  <div>
    <b-container>
    <h2>Estudiantes</h2>
    <b-card
      bg-variant="info"
      text-variant="white"
      header="Info"
      class="text-center"
    >
      <b-card-text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text
      >
    </b-card>

    
      <h4>Asistencia</h4>
       <b-alert show variant="success">x%</b-alert>
       <!-- esto está en juegos 32bts -->

       <h4>Notas</h4>
       <b-table striped hover :items="items"></b-table>

       <h4>Enlaces</h4>
       <li>
         <ul>
           <a href="">Discord</a>
           <a href="">Drive</a>
           <a href="">Google Meet</a>

         </ul>
       </li>

    </b-container>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style>
</style>