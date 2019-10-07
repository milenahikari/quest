<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <h2 v-if="monitors.length > 0">Resultados encontrados...</h2>

        <div 
          v-for="monitor in monitors"
          :key="monitor.id"
        >
          <CardMonitor 
            :idMonitor="`${monitor.id}`"
            :name="`${monitor.name_monitor}`" 
            :course="`${monitor.course}`"
            :email="`${monitor.email}`"
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
import { mapGetters } from 'vuex';

import Footer from './Footer.vue';
import CardMonitor from './CardMonitor.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    Footer, 
    CardMonitor,
  },

  computed: {
    ...mapGetters({
      monitors: 'get_monitors'
    })
  },
}
</script>