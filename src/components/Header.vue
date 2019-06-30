<template>
  <section class="white">
    <v-toolbar flat height="98" color="white">
      <v-container fluid class="pa-0">
        <v-layout justify-space-between>
          <div>
            <v-img :src="require('../../src/assets/img/logo.png')" height="39px" width="118px"/>
          </div>
          <div class="LoginIcon">
            <v-icon color="#707070">fas fa-user-circle</v-icon>
            <span>Login</span>
          </div>
        </v-layout>
      </v-container>
    </v-toolbar>

  <v-container fluid>
    <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
    <input type='text' placeholder='O que você quer aprender?'>
    <input type='text' placeholder='Selecione uma cidade'>
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
input {
  width: 284px;
  height: 45px;
  padding:inherit;
  border: 1px #9A1982 solid;
  border-radius: 10px;
  font-size: 14px;
  margin: 8px 0px;
  background-color: #F9F9F9;
}
</style>