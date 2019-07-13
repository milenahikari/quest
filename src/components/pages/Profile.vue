<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form v-model="valid">
      <v-container fluid>
        <v-layout justify-center wrap>
          <v-flex d-flex shrink>
            <v-avatar
              size="100px"
              color="grey lighten-4"
            >
              <v-icon>fas fa-user-plus</v-icon>
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
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Sobrenome"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

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

            <v-text-field
              label="Cidade"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Curso"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              label="Desejo contribuir ensinando"
            ></v-checkbox>

            <v-text-field
              label="Celular"
              v-model="email"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              label="Compartilhar número de WhatsApp"
            ></v-checkbox>

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
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
      checkbox: true,
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
      this.$router.push("/");
    }
  },
}
</script>

<style scoped>
</style>