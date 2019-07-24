<template>
  <v-container grid-list-xl>
    <router-link to="/login">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form 
      v-model="valid"
      method="post" 
      action="https://www.getform.org/f/[YOUR-FORM-ID]"
    >
      <v-container fluid>
        <v-layout justify-center wrap>
          <v-flex d-flex shrink>
            <v-avatar
              size="100px"
              color="grey lighten-4"
            >
              <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
            </v-avatar>
          </v-flex>
        </v-layout>
        <v-layout justify-center mb-4>
          <h2>Cadastre-se</h2>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex>

            <v-text-field
              label="Nome"
              v-model="user.name"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>
            
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
              :append-icon="e1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'text' : 'password'"
              :rules="passwordRules"
              required
              outline
            ></v-text-field>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="submit" class="q-button mt-5" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

  </v-container>
</template>

<script>
import api from '../../../services/api';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },

      valid: false,
      e1: false,
      
      emailRules: [ 
        v => !!v || "E-mail é obrigatório",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
      ],
      
      passwordRules: [
        v => !!v || 'Senha é obrigatório',        
      ],
      fiedsRequired: [ 
        v => !!v || "Nome é obrigatório",
      ],
    }
  }, 
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    async submit() {
      const user = {
        ...this.user,
        c_password: this.user.password
      }
      
      try{
        const response = await api.post('/register', user);

        await localStorage.setItem('user', JSON.stringify(response.data.success));

        this.$router.push("/user-data");
        
      } catch(e) {
        alert("Erro: arruma ai");
      }


    }
  },
}
</script>

<style scoped>
</style>