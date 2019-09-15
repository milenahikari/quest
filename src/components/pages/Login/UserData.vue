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
              :items="cities"
              :search-input.sync="search"
              hide-no-data
              hide-selected
              label="Cidade"
              name="city"
              outline
              return-object
              no-filter
              item-text="name"
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
      cities: [],

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
    ...mapGetters({
      getUser: 'get_user',
    })
  },

  watch: {
    search (val) {
      api.get(`search_city?q=${val}`)
        .then(data => this.cities = data.data.map( item => {
          this.profile.id_city = item.id_city;    
          return ({
            name: `${item.name} / ${item.federated_unit}`
          })
        })
        )
    },
  },
}
</script>

<style scoped>
</style>