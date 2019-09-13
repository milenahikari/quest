<template>
  <section class="homeBackground">
    <Header></Header>
    
      <v-container grid-list-xl>
        <v-layout justify-center wrap>
          <v-flex 
            d-flex shrink 
            v-for="explanation in explanations"
            :key="explanation.title"
          >
            <Explanation 
              :img      = "`${explanation.image}`"
              :position = "`${explanation.position}`"
              :title    = "`${explanation.title}`"
              :textI   = "`${explanation.textI}`"
              :textII  = "`${explanation.textII}`"
              :textIII = "`${explanation.textIII}`"
              :textIV  = "`${explanation.textIV}`"/>
          </v-flex>

        </v-layout>
      </v-container>
    <Footer></Footer>
  </section>
</template>

<script>
import api from '../../services/api';

import Header from '../Header.vue';
import Explanation from '../Explanation.vue';
import Footer from '../Footer.vue';

export default {
  data() {
    return {
      explanations: [],
    }
  },
  components: {
    Header, 
    Explanation, 
    Footer, 
  },
  mounted() {
    api.get('/explanations')
      .then(res => this.explanations = res.data)
  },
  
}
</script>

<style scoped>
</style>