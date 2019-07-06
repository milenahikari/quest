<template>
  <v-container grid-list-xl>
    <router-link to="/Login">
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

            <v-layout align-center>
              <div><v-icon class="q-icon-info">fas fa-info-circle</v-icon></div>
              <div><span class="q-text-icon">Não se preocupe, o número só será divulgado caso seja do seu interesse.</span></div>
            </v-layout>

            <v-layout align-center justify-center column wrapper-button my-5>
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
      e1: false,
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
      this.$router.push("/");
    }
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