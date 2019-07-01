<template>
  <section class="white">
    <v-toolbar flat height="98" color="white">
      <v-container fluid class="pa-0">
        <v-layout justify-space-between>
          <div>
            <v-img :src="require('../../src/assets/img/logo.png')" height="39px" width="120px"/>
          </div>
          <router-link to="/login" class="LoginIcon">
            <v-icon color="#707070">fas fa-user-circle</v-icon>
            <span>Login</span>
          </router-link>
        </v-layout>
      </v-container>
    </v-toolbar>

  <v-container fluid>
    <v-layout justify-center column>
      <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
      <input type='text' placeholder='O que você quer aprender?'>
      <input type='text' placeholder='Selecione uma cidade'>
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
.LoginIcon{
  width: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #707070;
  font-size: 14px;
}
h1 {
  margin-bottom: 12px;
}
</style>