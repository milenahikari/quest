<template>
  <v-container grid-list-xl>
    <router-link to="/register">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form 
      ref="form"
      v-model="valid"
    >
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
              :rules="fiedsRequired"
              hide-no-data
              label="Cidade"
              name="city"
              required
              outline
              return-object
            ></v-autocomplete>

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
              <v-btn @click="next" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

  </v-container>
</template>

<script>
import api from '../../../services/api';
import { mapActions, mapGetters } from 'vuex';
import { saveStorage } from '../../../utils/saveStorage';

export default {
  data() {
    return {
      profile: {
        id_city: '',
        course: '',
        teach: false,
      },

      city: null,
      search: null,
      result_cities: [],

      valid: false,
      fiedsRequired: [ 
        v => !!v || "Campo é obrigatório",
      ],
    }
  }, 

  methods: {
    clear () {
      this.$refs.form.reset()
    }, 

    ...mapActions({
      setUser: 'set_user'
    }),

    async next() {

      const { id_city, course, teach } = this.profile;

      if(this.$refs.form.validate()) {

        if(teach) {
          const data = {
            ...this.getUser,
            id_city,
            course, 
            teach
          }
          
          this.setUser(data);

          this.$router.push('/user-contact');

        } else {

          const data = {
            ...this.getUser,
            id_city,
            course, 
            teach
          }

          try {
            const response = await api.post('register', data);

            saveStorage(response.data.success);

            this.$router.push("/");
            
          } catch(e) {
            alert("Erro: arruma ai");
            console.log(e);
          }
          
        }  
      }
    }
  },

  computed: {
    searchCities(){
      return this.result_cities.map(entry => {
        this.profile.id_city = entry.id_city;

        return `${entry.name} / ${entry.federated_unit}`

      })
    },
    ...mapGetters({
      getUser: 'get_user',
    })
  },

  watch: {
    async search (val) {

      const response = await api.get(`search_city/${val}`);

      this.result_cities = response.data;

    },
  },
}
</script>

<style scoped>
</style>