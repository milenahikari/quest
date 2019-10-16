<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout column>

      <v-flex mt-3>
        <v-layout justify-center wrap mb-3>
          <h2>Entre em contato</h2>
        </v-layout>
      </v-flex>

      <v-form v-model="valid">
        <v-container fluid>
          <v-layout justify-center wrap>
            <v-flex>
              <v-textarea
                v-model= "mensagem"
                label="Escreva a mensagem:"
                :rules="mensagemRules"
                outline
                required
              ></v-textarea>

              <v-layout align-center justify-center column wrapper-button>
                <v-btn @click="enviarEmail" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">
                  <v-progress-circular
                    v-if="progress"
                    width="3"
                    size="20"
                    color="white"
                    indeterminate
                  ></v-progress-circular>
                  <span
                    v-else
                  >Enviar</span>
                </v-btn>
              </v-layout>

              <v-layout 
                v-if="monitor.share==1"
                align-center 
                justify-center 
                column 
                mt-3
              >
                <span>ou</span>
                <a :href="`https://api.whatsapp.com/send?phone=55${phone}`"><v-icon class="iconWhats">fab fa-whatsapp</v-icon></a>

              </v-layout>

            </v-flex>    

          </v-layout>

        </v-container>

      </v-form>

    </v-layout>

    <v-alert
      v-if="timeAlert"
      :color="colorAlert"
      :value="valueAlert"
      :type="statusAlert"
    >
      {{messageAlert}}
    </v-alert>

  </v-container>

</template>

<script>
import api from '../../services/api';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      mensagem: '',
      mensagemRules: [
        v => !!v || 'O campo mensagem é obrigatório',        
      ],
      
      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
      progress: false,
      valid: false,
      phone: ''
    }
  },

  methods: {
    clear () {
      this.$refs.form.reset()
    },

    async enviarEmail() {
      const dadosEmail = {
        'user': {
          'name': this.user.name,
          'email': this.user.email,
        },
        'monitor': {
          'name': this.monitor.name,
          'email': this.monitor.email,
        },         
        'mensagem': this.mensagem
      }

      if(this.mensagem) {
        try{
          this.progress = true;
          
          const response = await api.post('/monitors/email', dadosEmail);

          this.timeAlert = true;
          this.colorAlert = '#199854'
          this.messageAlert = "Sucesso ao enviar a menssagem!";
          this.statusAlert = 'success';
          this.valueAlert = true;

          await setTimeout(()=>{
            this.progress = false;
            this.timeAlert = false;
            console.log(this.timeAlert);
          },3000);

          await setTimeout(()=>{
            this.$router.push('/');
          }, 1000);

        } catch(e){
          this.timeAlert = true;
          this.colorAlert = '#FB8C00'
          this.messageAlert = "Falha ao enviar a menssagem! Tente novamente mais tarde";
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
    }
  },

   computed: {
    ...mapGetters({
      monitor: 'get_monitor',
      user: 'get_profile'
    })
  },

  mounted() {
    this.phone= this.monitor.phone.replace(/[^0-9]+/g,'');
  },
}
</script>

<style scoped>
.iconWhats {
  font-size: 45px;
  color:#199854;
  margin-top: 10px;
}
</style>