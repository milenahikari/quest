<template>
  <v-container grid-list-xl>
    <router-link to="/">
      <v-icon>fas fa-chevron-left</v-icon>
    </router-link>

    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container fluid>
        <v-layout justify-center mb-4>
          <h2>Dados do contato</h2>
        </v-layout>

        <v-layout justify-center mb-4>
          <h2>Primeiro é necessário cadastrar um celular</h2>
        </v-layout>

        <v-layout justify-center wrap>
          <v-flex>

            <v-text-field
              label="Celular"
              v-model="user.phone"
              :rules="fiedsRequired"
              v-mask="mask"
              required
              outline
            ></v-text-field>

            <v-checkbox
              v-model="user.share_phone"
              label="Compartilhar número de WhatsApp"
            ></v-checkbox>

            <v-layout align-center>
              <div><v-icon class="q-icon-info">fas fa-info-circle</v-icon></div>
              <div><span class="q-text-icon">Não se preocupe, o número só será divulgado caso seja do seu interesse.</span></div>
            </v-layout>

            <v-layout align-center justify-center column wrapper-button my-5>
              <v-btn @click="submit" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

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
import { mapGetters, mapActions } from 'vuex';
import { mask } from 'vue-the-mask';

export default {
  directives: {
    mask,
  },
  data() {
    return {
      user: {
        phone: '',
        share_phone: false
      },
      mask: '(##) #####-####',
      valid: false,
      e1: false,
      fiedsRequired: [ 
        v => !!v || "Celular é obrigatório",
        v => /(\([1-9][0-9]\)|)\s?([0-9]{5})-?([0-9]{4})$/.test(v) || 'Mínimo de 11 caracteres'  
      ],

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
    }
  }, 
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    async submit() {
      
      if(this.$refs.form.validate()) {
        try {

          const id_user = this.getProfile.id;

          const monitor = {
            id_user,
            ...this.user
          }
          
          const responseMonitor = await api.post('/monitor/new', monitor);
          this.setProfile(responseMonitor.data[0]);
          this.$router.push('/subject');       

        } catch(e) {
          console.log(e);

          this.timeAlert = true;
          this.colorAlert = '#FB8C00'
          this.messageAlert = "Falha ao realizar login!";
          this.statusAlert = 'warning';
          this.valueAlert = true;

          await setTimeout(()=>{
            this.progress = false;
            this.timeAlert = false;
            console.log(e);
          },2000);
        }
    
      }
      
    },

    ...mapActions({
      setProfile: 'set_profile',
    })

  },
  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    }),
  },
}
</script>

<style scoped>
.q-icon-info {
  display: flex;
  justify-content: center;
  margin: 5px;
  height: 34px;
  width: 34px;
}
.q-text-icon{
  color: rgba(0,0,0,.54);
  font-size: 13px;
}
</style>