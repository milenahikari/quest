<template>
  <v-container fluid mt-3>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout column>
      <v-layout>
        <v-flex mb-1>
          <h1 class="mt-3">{{monitor.name}}</h1>
          <h4 class="q-title">Curso</h4>
          <span class="q-description">{{monitor.course}}</span>
          <h4 class="q-title">Cidade</h4>
          <span class="q-description">{{monitor.city + ' - ' + monitor.state}}</span>
      </v-flex>
      <v-avatar
        size="100px"
        color="grey lighten-4"
      >
        <v-img :src="`${monitor.photo}`"></v-img>
      </v-avatar>
    </v-layout>

    <v-divider></v-divider>

    <v-flex mt-1>
      <Courses txtButton="Nova matéria" showButton="yes" router="/subject"  :idMonitor="this.getProfile.id_monitor"></Courses>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../../services/api';
import { mapGetters } from 'vuex';
import Courses from '../Courses.vue';

export default {
  components: {
    Courses,
  },

  data() {
    return {
      monitor: {},
    }
  },

  mounted() {
    api.get(`monitors/${this.getProfile.id_monitor}`)
      .then(response => 
        this.monitor = response.data.monitor[0]
      )
      .catch(err => console.log(err))    
  },

  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    })
  },

}
</script>

<style scoped>
.q-title {
  font-size: 12px;
  margin-top: 5px;
}
.q-description {
  font-size: 12px;
  font-weight: bold;
}
</style>