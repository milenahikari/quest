<template>
  <section>
    <v-toolbar flat height="98" color="white">
      <v-container fluid class="pa-0 displayFlex">
        <div>
          <v-img :src="require('../../src/assets/img/logo.png')" height="39px" width="118px"/>
        </div>
        <div class="grayIcon">
          <i class="fas fa-user-circle"></i>
          <span>Login</span>
        </div>
      </v-container>
    </v-toolbar>

  <v-container fluid>
    <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
    <Card></Card>
  </v-container>
  </section>
</template>

<script>
import Card from './Card.vue';
export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.grayIcon{
  width: 65px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #707070;
}
</style>