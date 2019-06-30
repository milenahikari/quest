<template>
  <section>
    <h3>Categorias</h3>
    <v-carousel height="100px" hide-delimiters>
      <v-carousel-item>
        <Category name="Artes" icon="fas fa-palette"/>
      </v-carousel-item>
      <v-carousel-item>
        <Category name="Biologia" icon="fas fa-microscope"/>
      </v-carousel-item>
      <v-carousel-item>
        <Category name="Filosofia" icon="fas fa-puzzle-piece"/>
      </v-carousel-item>   
    </v-carousel> 
  </section>
</template>

<script>
import Category from './Category.vue';
export default {
  components: {
    Category
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
h3 {
  margin-top: 12px;
  margin-bottom: 8px;
  font-weight: bold;
}
</style>