<template>
  <v-container grid-list-xl>
  
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout justify-center wrap my-5>
      <v-flex d-flex shrink>
        <v-img :src="require('../../../src/assets/img/logo.png')" height="69px" width="209px"/>
      </v-flex>
    </v-layout>

    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container>
        <v-layout justify-center wrap>
          <v-flex xs12 sm6>

            <v-text-field
              label="Email"
              v-model="user.email"
              :rules="emailRules"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Senha"
              v-model="user.password"
              min="8"
              @keyup.enter="submit"
              :append-icon="e1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'text' : 'password'"
              :rules="passwordRules"
              required
              outline
            ></v-text-field>

            <v-layout align-center justify-center column wrapper-button>

              <v-btn 
                @click="submit" 
                class="q-button" 
                :class=" { 'btnGreen' : valid, disabled: !valid }"
              >Login
              </v-btn>

              <router-link 
                to="/register" 
                class="mt-3"
              >
                Ainda não é membro?
              </router-link>

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
import { saveStorage } from '../../utils/saveStorage';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      valid: false,
      e1: false,
      emailRules: [ 
        v => !!v || "E-mail é obrigatório",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail é obrigatório'
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatório',        
      ],

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
    }
  }, 
  methods: {
    clear() {
      this.$refs.form.reset();
    },

    async submit() {
      if(this.$refs.form.validate()) {
        try {
          const response = await api.post('login', this.user);

          saveStorage(response.data.success.token);

          this.setLogin(true)

          const profile = response.data.success.profile;

          this.setProfile(profile)
          
          await this.$router.push('/');

        } catch(e) {
          console.log(e);

          this.timeAlert = true;
          this.colorAlert = '#FB8C00'
          this.messageAlert = "E-mail ou senha inválida!";
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
      setLogin: 'set_login',
      setProfile: 'set_profile',
    })
  },
}
</script>

<style scoped>

</style>