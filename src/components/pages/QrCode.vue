<template>
  <v-container fluid mt-3>
    <router-link to="/" class="q-left">
      <v-icon>fas fa-times</v-icon>
    </router-link>

    <v-container fluid>
      <v-layout justify-center mb-5>
        <h2>Meu QR Code</h2>
      </v-layout>

      <v-layout justify-center mt-3>
        <input style="display: none" type="text" v-model="idMonitor">
        <qr-code :text="idMonitor"></qr-code>
      </v-layout>

      <v-layout justify-center class="q-text-center" mt-3 pa-4>
        <p>Apresente o QR Code para receber a avaliação do aluno!</p>
      </v-layout>  

  </v-container>

</v-container>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      idMonitor: '',
    }
  },
  
  mounted() {
    this.idMonitor = `${this.getProfile.id}`;
  },
 
  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    })
  },

}

</script>