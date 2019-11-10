<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>
        <div v-if="monitors.length > 0">
          <h2>Resultados encontrados...</h2>

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
              :phone="`${monitor.phone}`"
              :share="`${monitor.share}`"
              :photo="`${monitor.photo}`"
            ></CardMonitor>

          </div>
        </div>

        <div v-else>
          <h2>Não encontramos nenhum resultado para sua busca...</h2>
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