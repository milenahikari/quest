<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout justify-center wrap mb-2>
          <v-flex d-flex shrink>
            <v-avatar
              size="110px"
              color="grey lighten-4"
            >
              <v-icon>fas fa-user-plus</v-icon>
            </v-avatar>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <h2>Meu Perfil</h2>
        </v-layout>

        <layout>
          <v-tabs
            v-model="tabs"
            slider-color="#9A1982"
            fixed-tabs
            m-top="2"
          >
            <v-tab 
              v-for="menu in menus" 
              :key="menu"
            >
              <p style="color: black">{{ menu }} </p>
            </v-tab>
          </v-tabs>
        </layout>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-text-field
                    label="Nome"
                    :value="getProfile.name"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    :value="getProfile.email"
                    :rules="emailRules"
                    disabled
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Curso"
                    :value="getProfile.course"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkTeach"
                    label="Desejo contribuir ensinando"
                  ></v-checkbox>

                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="next" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>
          </v-form>
          </v-tab-item>

          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-text-field
                    label="Cidade"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Celular"
                    v-model="email"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkShare"
                    label="Compartilhar número de WhatsApp"
                  ></v-checkbox>

                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="next" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>

          </v-form>
          </v-tab-item>

          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-text-field
                    label="Senha Antiga"
                    :value="getProfile.name"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Senha Nova"
                    :value="getProfile.name"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>
                  
                  <v-text-field
                    label="Confirmar Senha"
                    :value="getProfile.name"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  
                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="next" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>
          </v-form>
          </v-tab-item>
        </v-tabs-items>    
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      valid: false,
      e1: false,
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
      checkTeach: true,
      checkShare: true,
      emailRules: [ 
        v => !!v || "E-mail is required",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

      tabs: null,
      menus: [
        'Dados',
        'Contato',
        'Senha'
      ],
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

  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    })
  },
}
</script>

<style scoped>
</style>