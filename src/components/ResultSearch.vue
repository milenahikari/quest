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

        <div v-if="monitors.length = 0" class="box-not-found">
          <h2>Não encontramos nenhum resultado...</h2>
          <v-img :src="require('../../src/assets/img/not-found.svg')" class="img-not-found"/>
        </div>

        <div v-else>
          <h1>oi</h1>
        </div>

      </v-flex>

    </v-layout>

  </v-container>
  
</template>

<script>
import { mapGetters } from 'vuex';
import CardMonitor from './CardMonitor.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    CardMonitor,
  },

  computed: {
    ...mapGetters({
      monitors: 'get_monitors'
    })
  },
}
</script>

<style>
.box-not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-not-found {
  width: 50%;
  margin-top: 20px;
}
</style>