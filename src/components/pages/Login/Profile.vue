<template>
  <v-container grid-list-xl>
    <router-link to="/register">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form v-model="valid">
      <v-container fluid>
        <v-layout justify-center mb-4>
          <h2>Dados do perfil</h2>
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

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="next" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
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
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
      checkbox: false,
    }
  }, 
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    next() {
      this.$router.push("/contact");
    }
  },
}
</script>

<style scoped>
</style>