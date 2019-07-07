<template>
  <v-container grid-list-xl>
    <router-link to="/login">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form v-model="valid">
      <v-container fluid>
        <v-layout justify-center wrap>
          <v-flex d-flex shrink>
            <v-avatar
              size="110px"
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
              <v-btn @click="next" class="q-button mt-5" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
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
      ]
    }
  }, 
  methods: {
    clear() {
      this.$refs.form.reset()
    },
    next() {
      this.$router.push("/user-data");
    }
  },
}
</script>

<style scoped>
</style>