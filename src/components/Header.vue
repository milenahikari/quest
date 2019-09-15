<template>
  <section class="white">

    <Menu></Menu>
  
    <v-container fluid>
      <v-layout justify-center column>
        <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
        <v-text-field
          label="O que você quer aprender?"
          type="text"
          outline
        ></v-text-field>

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

      </v-layout>
      
      <Carousel></Carousel>
    </v-container>
  </section>
</template>

<script>
import api from '../services/api';

import Menu from './Menu.vue';
import Carousel from './Carousel.vue';

export default {
  data(){
    return {
      id_city: '',

      city: null,
      search: null,
      cities: [],
    }
  },

  components: {
    Menu,
    Carousel
  },

  watch: {
    search (val) {
      api.get(`search_city?q=${val}`)
        .then(data => this.cities = data.data.map( item => {
          this.id_city = item.id_city;    
          return ({
            name: `${item.name} / ${item.federated_unit}`
          })
        })
        )
    },
  },
}
</script>