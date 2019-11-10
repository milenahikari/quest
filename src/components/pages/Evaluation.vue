<template>
  <v-container fluid mt-3>
    <router-link to="/">
      <v-icon>fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout v-if="avaliarMonitor" column>       
      <v-layout>
        <v-flex mb-1>
          <h1 class="mt-3">{{ monitor.name }}</h1>

          <h4 class="q-title">Curso</h4>

          <span class="q-description">{{ monitor.course }}</span>

          <h4 class="q-title">Cidade</h4>

          <span class="q-description">{{ monitor.city  }} - {{ monitor.state }}</span>

        </v-flex>

        <v-avatar
          size="100px"
          color="grey lighten-4"
        >
          <v-img :src="`${monitor.photo}`"></v-img>

        </v-avatar>

      </v-layout>

      <v-divider></v-divider>

      <v-layout column mt-4>
        <v-layout justify-center>
          <h2>Avalie o monitor</h2>
        </v-layout>

        <v-layout justify-center mt-5>
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$vuetify.icons.ratingFull"
            hover
          ></v-rating>

        </v-layout>

        <v-layout justify-center mt-5>
          <v-btn 
            @click="submit"
            class="q-button-green"
          >
            <v-progress-circular
              v-if="progress"
              width="3"
              size="20"
              color="white"
              indeterminate
            ></v-progress-circular>
            <span v-else>Avaliar</span>
          </v-btn>
        </v-layout>

      </v-layout>

    </v-layout>

    <v-container v-else fluid>
      <v-layout justify-center mb-5>
        <h2>Avaliar o monitor</h2>
      </v-layout>

      <div>
        <qrcode-drop-zone @decode="onDecode" @init="logErrors">
          <qrcode-stream @decode="onDecode" @init="onInit" />
        </qrcode-drop-zone>

        <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
      </div>

      <v-alert
        v-if="timeAlert"
        :color="colorAlert"
        :value="valueAlert"
        :type="statusAlert"
      >
        {{messageAlert}}
      </v-alert>

      <v-layout justify-center class="q-text-center" mt-3 pa-4>
        <p>Ao final da aula escaneie o QR Code do monitor que pode ser acessado em <span class="font-weight-black">Meu QR Code</span> no menu dele.</p>
      </v-layout>

    </v-container>

  </v-container>

</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import api from '../../services/api';
import { mapGetters } from 'vuex';

export default {
  components: { 
    QrcodeStream, 
    QrcodeDropZone, 
    QrcodeCapture 
  },

  data () {
    return {
      idMonitor: '',
      avaliarMonitor: false,
      monitor: '',
      rating: 0,
      progress:false,

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
      noStreamApiSupport: false
    }
  },

  methods: {
    async onDecode (idMonitor) {

      if(!Number.isInteger(Number(idMonitor))) return;

      if(this.profile.id_monitor == idMonitor){
        this.timeAlert = true;
        this.colorAlert = '#FB8C00'
        this.messageAlert = "Não é permitido avaliar seu próprio usuário!";
        this.statusAlert = 'warning';
        this.valueAlert = true;
        return;
      }
      
      try {

        const response = await api.get(`monitors/${idMonitor}`);
        
        if(!response) return;

        this.avaliarMonitor = true;
        
        this.monitor = response.data.monitor[0];

      } catch(e) {
        console.log(e);

      }
      
    },

    logErrors (promise) {
      promise.catch(console.error)
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    },

    async submit() {
      const dados = {
        'id_user': this.profile.id,
        'id_monitor': this.monitor.id,
        'rating': this.rating
      };

      try {
        this.progress = true;

        const response = await api.post('ratings/monitor', dados);

        this.timeAlert = true;
        this.colorAlert = '#199854'
        this.messageAlert = "Sucesso ao avaliar o monitor!";
        this.statusAlert = 'success';
        this.valueAlert = true;

        await setTimeout(()=>{
          this.progress = false;
          this.timeAlert = false;
          console.log(this.timeAlert);
        },5000);

        await setTimeout(()=>{
          this.$router.push('/');
        }, 1000);

      } catch (e) {
        this.timeAlert = true;
        this.colorAlert = '#FB8C00'
        this.messageAlert = "Falha ao avaliar o monitor! Tente novamente mais tarde";
        this.statusAlert = 'warning';
        this.valueAlert = true;

        await setTimeout(()=>{
          this.progress = false;
          this.timeAlert = false;
          console.log(e);
        },8000);

        await setTimeout(()=>{
          this.$router.push('/');
        }, 2000);
      }      

    }
  },

  computed: {
    ...mapGetters({
      profile: 'get_profile'
    })
  },
  
}
</script>

<style scoped>
.q-button-green {
  width: 170px;
  height: 40px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  text-transform: unset !important;
  background: #199854 !important;
  color: white !important;
  border: 2px #199854 solid;
}
</style>