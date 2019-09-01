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
          :items="searchCities"
          :search-input.sync="search"
          hide-no-data
          label="Cidade"
          name="city"
          outline
          return-object
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
      city: null,
      search: null,
      result_cities: [],
    }
  },
  components: {
    Menu,
    Carousel
  },

  computed: {
    searchCities(){
      return this.result_cities.map(entry => {
        // this.profile.id_city = entry.id_city;

        return `${entry.name} / ${entry.federated_unit}`

      })
    }
  },

  watch: {
    async search (val) {

      const response = await api.get(`search_city/${val}`);

      this.result_cities = response.data;

    },
  },

}
</script>

<style>
</style>