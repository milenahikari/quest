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


            <v-autocomplete
              v-model="city"
              :items="searchCities"
              :search-input.sync="search"
              color="white"
              hide-no-data
              hide-selected
              item-text="Description"
              item-value="API"
              label="Public APIs"
              placeholder="Start typing to Search"
              return-object
            ></v-autocomplete>

            <v-text-field
              label="Cidade"
              v-model="profile.city"
              name="city"
              type="number"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Curso"
              v-model="profile.course"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-checkbox
              v-model="profile.teach"
              label="Desejo contribuir ensinando"
            ></v-checkbox>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="submit" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
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
      profile: {
        city: '',
        course: '',
        teach: false,
      },

      city: null,
      search: null,
      result_cities: [],

      valid: false,
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
    }
  }, 
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    async submit() {
      const id = JSON.parse(localStorage.getItem('user')).id;

      const profile = {
        id,
        city: this.profile.city,
        course: this.profile.course,
        teach: this.profile.teach,
      }
      try {
        const response = await api.put('users/update', profile);

        this.$router.push("user-contact")
      }catch(e) {
        alert("Erro");
        console.log(e);
      }      
    }
  },
  
  watch: {
    async search (val) {

      const response = await api.get(`search_city/${val}`);

      this.result_cities = response.data;

    },
  },

  computed: {
    searchCities(){
      return this.result_cities.map(entry => {

        return `${entry.nome} / ${entry.sigla}`

      })
    }
  },
}
</script>

<style scoped>
</style>