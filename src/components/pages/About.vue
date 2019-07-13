<template>
  <section class="homeBackground">
    <Menu></Menu>

    <div>
      <v-img :src="require('../../../src/assets/img/quem-somos.png')" class="logo"/>
    </div>

    <v-container fluid class="mb-4 box">
      <v-layout column pa-3>
        <h1>Quem Somos</h1>
        <p>Somos uma comunidade que surgiu com o objetivo de expandir a rede de conhecimento, motivando alunos a estudarem e compartilharem seus saberes com outros alunos.</p>
        <p>Sabemos das dificuldades de assimilar totalmente o que está sendo transmitido em sala de aula e adaptamos estratégias para despertar o interesse do aluno em aprender.</p>
        <p>O QUEST busca unir seu conhecimento em tecnologia numa plataforma web gratuita que valoriza o cooperativismo, ajudando você a encontrar apoio para reforçar seus estudos.</p>
      </v-layout>
    </v-container>

    <Footer></Footer>
    
  </section>
</template>

<script>
import Menu from '../Menu.vue';
import Footer from '../Footer.vue';

export default {
  data() {
    return {
    }
  },
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>
p {
  margin-top: 10px;
}

.box {
  background: #9A1982;
  border-radius: 10px;
  margin-top: -5px;
  z-index: 3;
  position: relative;
  color: white;

}
</style>