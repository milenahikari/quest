<template>
  <v-container grid-list-xl fluid>

    <v-layout justify-center> 
      <h2 class="q-text-success">Pronto!</h2>
    </v-layout>
    
    <router-link to="/">
    <v-layout justify-center wrap>
      <v-flex d-flex shrink>
        <v-avatar
          size="110px"
          color="#9A1982"
          class="wrapper-thumb"
        >
          <v-icon class="thumbs-up">fas fa-thumbs-up</v-icon>
        </v-avatar>
      </v-flex>
    </v-layout>
    </router-link>

    <v-layout justify-center>
      <h2 class="q-text-message">Cadastro realizado com sucesso!</h2>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
h2 {
  color: #707070;
}
.q-text-success {
  margin-top: 100px;
}
.q-text-message {
  margin-top: 50px;
}
.wrapper-thumb{
  margin-top: 30px;
}
.thumbs-up {
  font-size: 37px;
  color: #F896E6;
}
</style>