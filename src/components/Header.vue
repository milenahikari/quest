<template>
  <section>
    <Menu></Menu>
  
    <v-layout justify-center column mt-4>
      <v-autocomplete
        v-model="city"
        :items="cities"
        :search-input.sync="searchCity"
        hide-no-data
        hide-selected
        label="Localização"
        name="city"
        placeholder="Defina sua cidade"
        color="#9A1982"
        return-object
        no-filter
        item-text="name"
        class="q-input-header"
      ></v-autocomplete>
      
      <v-layout>
        <v-text-field
          v-model="searchCourse"
          label="O que você quer aprender?"
          type="text"
          color="#9A1982"
          outline
        ></v-text-field>

        <v-btn flat icon @click="search" class="q-search"><v-icon>fas fa-search</v-icon></v-btn>

      </v-layout>

    </v-layout>
    
    <Carousel></Carousel>


  </section>
</template>

<script>
import { mapActions } from 'vuex';
import api from '../services/api';

import Menu from './Menu.vue';
import Carousel from './Carousel.vue';

export default {
  data(){
    return {
      id_city: null,
      city: null,
      searchCity: null,
      cities: [],
      searchCourse: null,
    }
  },

  components: {
    Menu,
    Carousel
  },

  watch: {
    searchCity (val) {
      api.get(`search_city?q=${val.toUpperCase()}`)
        .then(data => this.cities = data.data.map( item => {
          this.id_city = item.id_city;    
          return ({
            name: `${item.name} / ${item.federated_unit}`
          })
        })
        )
    },
  },

  methods: {
    ...mapActions({
      setMonitors: 'set_monitors'
    }),

    async search() {
      if(this.id_city == null) return alert("Defina uma cidade");
      if(this.searchCourse == null) return alert("Digite o curso que gostaria de aprender");
      try {
        const response = await api.get('/search/course', {
          params: { 
            'idCity': this.id_city,
            'course': this.searchCourse
          },
        });
        console.log(response.data);
        this.setMonitors(response.data);            

      } catch(e) {
        alert("Problema ao realizar a pesquisa, tente novamente mais tarde...");
        console.log(e);
      }
    }
  },
  
}
</script>