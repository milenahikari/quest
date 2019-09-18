<template>
  <v-container grid-list-xl>
    <router-link to="/user-data">
      <v-icon>fas fa-chevron-left</v-icon>
    </router-link>

    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container fluid>
        <v-layout justify-center mb-4>
          <h2>Dados do perfil</h2>
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

  </v-container>
</template>

<script>
import api from '../../../services/api';
import { mapGetters, mapActions } from 'vuex';
import { saveStorage } from '../../../utils/saveStorage';
import storeMonitor from '../../../services/storeMonitor/index';
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
        v => !!v || "Preencha o campo celular",
      ],
    }
  }, 
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    async submit() {
      if(this.$refs.form.validate()) {
        const contact = this.user;

        try {
          const response = await api.post('/register', this.getRegister);

          saveStorage(response.data.success);

          this.setLogin(true);

          this.setRegister(false);

          const profile = response.data.success.profile;

          this.setProfile(profile)

          const id_user = profile.id;
          
          const monitor = {
            id_user,
            ...contact
          }
          
          storeMonitor(monitor);
          this.$router.push('/subject');     

        } catch {
          alert("Erro: arruma ai");
        }
    
      }
      
    },

    ...mapActions({
      setLogin: 'set_login',
      setRegister: 'set_register',
      setProfile: 'set_profile',
    })

  },
  computed: {
    ...mapGetters({
      getRegister: 'get_register'
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