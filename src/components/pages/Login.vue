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

    <v-form v-model="valid">
      <v-container>
        <v-layout justify-center wrap>
          <v-flex xs12 sm6>

            <v-text-field
              label="Email"
              v-model="email"
              :rules="emailRules"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Senha"
              v-model="password"
              min="8"
              :append-icon="e1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'text' : 'password'"
              :rules="passwordRules"
              required
              outline
            ></v-text-field>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="submit" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Login</v-btn>
              <router-link to="/register" class="mt-3">Ainda não é membro?</router-link>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      e1: false,
      email: '',
      emailRules: [ 
        v => !!v || "E-mail is required",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',        
      ],
    }
  }, 
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    submit() {
      alert('Apertou no botao');
    }
  },
}
</script>

<style scoped>

</style>