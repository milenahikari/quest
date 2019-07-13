<template>
  <section class="white">
    <Menu></Menu>

    <v-container fluid>
      <v-layout justify-center column>
        <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
        <v-text-field
          label="O que você quer aprender?"
          type="text"
          outline
        ></v-text-field>
        <v-text-field
          label="Selecione uma cidade"
          type="text"
          outline
        ></v-text-field>
      </v-layout>
      <Carousel></Carousel>
    </v-container>
  </section>
</template>

<script>
import Menu from './Menu.vue';
import Carousel from './Carousel.vue';

export default {
  data(){
    return {
    }
  },
  components: {
    Menu,
    Carousel
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}
</style>