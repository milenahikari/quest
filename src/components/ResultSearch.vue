<template>
  <v-container grid-list-xl>
    <v-layout>
      <v-flex>  

        <div v-if="monitors == 'vazio'" class="box-not-found">
          <h2>Não encontramos nenhum resultado...</h2>
          <v-img :src="require('../../src/assets/img/not-found.svg')" class="img-not-found"/>
        </div>

        <div v-if="monitors.length > 0 && monitors != 'vazio'">
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
        
          <h2 v-if="destaques.length > 0">Monitores em destaque...</h2>

          <div 
            v-for="destaque in destaques"
            :key="destaque.id"
          >
            <CardMonitor 
              :idMonitor="`${destaque.id}`"
              :name="`${destaque.name_monitor}`" 
              :course="`${destaque.course}`"
              :email="`${destaque.email}`"
              :city="`${destaque.city}`"
              :state="`${destaque.state}`"
              :rating="`${destaque.rating}`"
              :phone="`${destaque.phone}`"
              :share="`${destaque.share}`"
              :photo="`${destaque.photo}`"
            ></CardMonitor>

          </div>
        </div>

      </v-flex>

    </v-layout>

  </v-container>
  
</template>

<script>
import api from '../services/api';
import { mapGetters } from 'vuex';
import CardMonitor from './CardMonitor.vue';

export default {
  data() {
    return {
      destaques: ''
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

  async mounted() {
    if(this.monitors.length == 0 && this.monitors != 'vazio') {
      
      const response = await api.get('/monitors/listagem');
      this.destaques = response.data;
    }
    
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