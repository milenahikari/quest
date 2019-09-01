<template>
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
  </v-container>
</template>

<script>
import api from '../../services/api';

import Footer from '../Footer.vue';
import CardMonitor from '../CardMonitor.vue';

export default {
  data() {
    return {
      monitors: [],
    }
  },
  components: {
    Footer, 
    CardMonitor,
  },
  mounted() {
    api.get('/monitors')
      .then(res => this.monitors = res.data)
  }
}
</script>

<style scoped>
</style>