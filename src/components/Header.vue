<template>
  <section class="white">
    <v-toolbar flat color="white">
      <v-container fluid class="pa-0">
        <v-layout justify-space-between>
          <div>
            <v-img :src="require('../../src/assets/img/logo.png')" height="39px" width="120px"/>
          </div>
          <router-link to="/login" class="wrapper-icon">
            <v-icon>fas fa-user-circle</v-icon>
            <span>Login</span>
          </router-link>
        </v-layout>
      </v-container>
    </v-toolbar>

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
import Carousel from './Carousel.vue';
export default {
  components: {
    Carousel
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}
.wrapper-icon {
  width: 65px;
}
</style>