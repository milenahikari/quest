<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout column>

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
                v-model= "mensagem"
                label="Escreva a mensagem:"
                :rules="fiedsRequired"
                outline
                required
              ></v-textarea>

              <v-layout align-center justify-center column wrapper-button>
                <v-btn @click="enviarEmail" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Enviar</v-btn>
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
import api from '../../services/api';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      mensagem: '',
      valid: false,
      fiedsRequired: [ 
        v => !!v || "O campo mensagem é obrigatório",
      ],
    }
  },

  methods: {
    clear () {
      this.$refs.form.reset()
    },

    enviarEmail() {
      const dadosEmail = {
        'user': {
          'name': this.user.name,
          'email': this.user.email,
        },
        'monitor': {
          'name': this.monitor.name,
          'email': this.monitor.email,
        },         
        'mensagem': this.mensagem
      }

      api.post('/monitors/email', dadosEmail)
        .then( res => console.log(res.data))
    }
  },

   computed: {
    ...mapGetters({
      monitor: 'get_monitor',
      user: 'get_profile'
    })
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