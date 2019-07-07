<template>
  <v-container grid-list-xl>
    <router-link to="/Contact">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-container fluid>
      <v-layout justify-center mb-4>
        <h2>Cadastre sua matéria</h2>
      </v-layout>
    </v-container>

    <Carousel></Carousel>

    <v-form v-model="valid">
      <v-container fluid>

        <v-layout justify-center wrap>
          <v-flex>

            <v-text-field
              label="Defina um título"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-textarea
              label="Descreva o curso:"
              :rules="fiedsRequired"
              outline
              required
            ></v-textarea>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="next" :class=" { 'btnGreen' : valid, disabled: !valid }">Cadastrar</v-btn>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

  </v-container>
</template>

<script>
import Carousel from '../Carousel.vue';

export default {
  data() {
    return {
      valid: false,
      e1: false,
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
    }
  },
  components: {
    Carousel
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    next() {
      this.$router.push("/success");
    }
  },
}
</script>

<style scoped>
</style>