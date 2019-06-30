<template>
  <section>
    <Header></Header>
    <v-container>
      <Card 
      img      = "grupoestudo.png"
      position = "0px -15px"
      title    = "APRENDA" 
      parteI   = "Encontre a ajuda perfeita para entender a matéria"
      parteII  = "Tire suas dúvidas com um amigo"
      parteIII = "Combine o melhor momento para estudar"
      parteIV  = ""/>
    <Card 
      img      = "ensinar.png"
      position = "0px -55px" 
      title    = "ENSINE" 
      parteI   = "Compartilhe seu conhecimento"
      parteII  = "Faça novas amizades"
      parteIII = "Divirta-se ensinando e aprendendo"
      parteIV  = ""/>
    <Card 
      img      = "premio.jpg"
      position = "0px -20px"
      title    = "CONQUISTE" 
      parteI   = "Colabore ensinando e ganhe estrelas"
      parteII  = "Cumpra metas e colecione pedras preciosas"
      parteIII = "Seja um membro"
      parteIV  = "É grátis :)"/>
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