<template>
  <section class="homeBackground">
    <Header></Header>

    <v-container grid-list-xl>
      <v-layout>
        <v-flex>
          <h2>Resultados encontrados...</h2>

          <div 
            v-for="monitor in monitors"
            :key="monitor.id"
          >
            <CardMonitor 
              :name="`${monitor.name}`" 
              :course="`${monitor.course}`"
              :city="`${monitor.city}`"
              :state="`${monitor.state}`"
              :rating="`${monitor.rating}`"
            ></CardMonitor>
          </div>
        </v-flex>
      </v-layout>
    
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
            :parteI   = "`${explanation.parteI}`"
            :parteII  = "`${explanation.parteII}`"
            :parteIII = "`${explanation.parteIII}`"
            :parteIV  = "`${explanation.parteIV}`"/>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer></Footer>
  </section>
</template>

<script>
import axios from 'axios';

import Header from '../Header.vue';
import Explanation from '../Explanation.vue';
import Footer from '../Footer.vue';
import CardMonitor from '../CardMonitor.vue';

export default {
  data() {
    return {
      explanations: [],
      monitors: [],
    }
  },
  components: {
    Header, 
    Explanation, 
    Footer, 
    CardMonitor,
  },
  mounted() {
    axios.get('/data/explanation.json')
      .then(res => this.explanations = res.data)

    axios.get('data/monitors.json')
      .then(res => this.monitors = res.data)
  },
  
}
</script>

<style>
</style>