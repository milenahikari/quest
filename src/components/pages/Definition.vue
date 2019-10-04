<template>
  <v-container mx-auto>
    <v-layout column>
      <v-img class="img-topo" :src="`${require('../../assets/img/friends.svg')}`"></v-img>
      <v-img class="img-quest" :src="`${require('../../assets/img/quest.png')}`"></v-img>
    </v-layout>

    <v-layout column>
      <v-flex mx-auto>
        <v-layout justify-center>
          <span class="q-title">Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</span>
        </v-layout>
      </v-flex>

      <v-flex mx-auto mt-5>
        <v-btn 
          class="q-button-purple"
          @click="home"
        >Começar</v-btn>
      </v-flex>
      
    </v-layout>

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
    
  </v-container>

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

  methods: {
    home() {
      this.$router.push("/");
    }
  },
}
</script>

<style scoped>
.img-topo {
  margin: 0 auto;
  width: 90%;
}
.img-quest {
  width: 50%;
  margin: 30px auto;
}
.q-title {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
</style>