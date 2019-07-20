<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout column>
      <InfoUser></InfoUser> 

      <v-flex mt-3>
        <v-layout justify-center wrap mb-3>
          <h2>Entre em contato</h2>
        </v-layout>
      </v-flex>

      <v-form v-model="valid">
      <v-container fluid>

        <v-layout justify-center wrap>
          <v-flex>
            <v-textarea
              label="Descreva o curso:"
              :rules="fiedsRequired"
              outline
              required
            ></v-textarea>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="next" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Enviar</v-btn>
            </v-layout>

            <v-layout align-center justify-center column mt-3>
              <span>ou</span>

              <router-link to="/">
                <v-icon class="iconWhats">fab fa-whatsapp</v-icon>
              </router-link>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

    </v-layout>
  </v-container>
</template>

<script>
import InfoUser from '../InfoUser.vue';

export default {
  components: {
    InfoUser,
  },
  data() {
    return {
      valid: false,
      fiedsRequired: [ 
        v => !!v || "Message is required",
      ],
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
.iconWhats {
  font-size: 45px;
  color:#199854;
  margin-top: 10px;
}
</style>