<template>
  <v-container mx-auto>
    <Menu></Menu>

    <div class="white">
      <v-img :src="require('../../../src/assets/img/nossos-valores.svg')" class="logo"/>
    </div>

    <v-layout column pa-3 class="box">
        <h1>Nossos Valores</h1>

        <v-flex align-self-center>
          <v-icon>fas fa-users</v-icon>
        </v-flex>
        <h2>COOPERAÇÃO</h2>
        <p class="recuo">Valorizamos a aprendizagem cooperativa para aumentar a participação dos alunos e o melhorar o desempenho acadêmico.</p>

        <v-flex align-self-center>
          <v-icon>fas fa-universal-access</v-icon>
        </v-flex>
        <h2>INCLUSÃO</h2>
        <p class="recuo">Acreditamos que todos podem contribuir com seus conhecimentos e por isso nos dedicamos a abranger o maior número de pessoas, independente de diferenças sociais.</p>

        <v-flex align-self-center>
          <v-icon>fas fa-trophy</v-icon>
        </v-flex>
        <h2>SUPERAÇÃO</h2>
        <p class="recuo">Percebemos que todos buscam se tornar pessoas melhores e estamos aqui para possibilitar descobrirem ou aumentarem seu potencial.</p>
      </v-layout>

    <Footer></Footer>
    
  </v-container>
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
h2 {
  margin-top: 10px;
}

p {
  margin-top: 10px;
}

.v-icon {
  color: white;
  font-size: 47px;
  margin-top: 40px;
  margin-bottom: 10px;
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