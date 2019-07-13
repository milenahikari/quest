<template>
  <section class="homeBackground">
    <Header></Header>

    <v-container grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex d-flex shrink>
          <Card 
            img      = "grupoestudo.png"
            position = "0px -15px"
            title    = "APRENDA" 
            parteI   = "Encontre a ajuda perfeita para entender a matéria"
            parteII  = "Tire suas dúvidas com um amigo"
            parteIII = "Combine o melhor momento para estudar"
            parteIV  = ""/>
        </v-flex>
        <v-flex d-flex shrink>
            <Card 
            img      = "ensinar.png"
            position = "0px -55px" 
            title    = "ENSINE" 
            parteI   = "Compartilhe seu conhecimento"
            parteII  = "Faça novas amizades"
            parteIII = "Divirta-se ensinando e aprendendo"
            parteIV  = ""/>
        </v-flex>
        <v-flex d-flex shrink>    
            <Card 
            img      = "premio.jpg"
            position = "0px -20px"
            title    = "CONQUISTE" 
            parteI   = "Colabore ensinando e ganhe estrelas"
            parteII  = "Cumpra metas e colecione pedras preciosas"
            parteIII = "Seja um membro"
            parteIV  = "É grátis :)"/>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </section>
</template>

<script>
import Header from '../Header.vue';
import Card from '../Card.vue';
import Footer from '../Footer.vue';

export default {
  components: {
    Header, 
    Card, 
    Footer
  }
}
</script>

<style>
</style>