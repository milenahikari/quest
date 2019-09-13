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
          :items="items"
          :search-input.sync="search"
          hide-no-data
          label="Cidade"
          name="city"
          outline
          return-object
        ></v-autocomplete>

      </v-layout>
      {{ message }}
      
      <Carousel></Carousel>
    </v-container>
  </section>
</template>

<script>
import lodash from 'vue-lodash';
import api from '../services/api';

import Menu from './Menu.vue';
import Carousel from './Carousel.vue';

export default {
  data(){
    return {
      search: '',
      message: '',
      result_cities: [],
    }
  },
  components: {
    Menu,
    Carousel
  },

  watch: {
    search: function (newCity, oldCity) {    
      this.message = 'Digitando';
      this.debouncedGetCity()
    }
  },

  created: function () {
    this.debouncedGetCity = _.debounce(this.getCity, 500)
  },

  methods: {
    getCity: function () {
      this.message = 'Pensando...'

      var vm = this
      api.get(`search_city/${this.search}`)
        .then(function (response) {
          
          this.result_cities = response.data;
        })
        .catch(function (error) {
          vm.message = 'Erro ao executar a API' + error
        })
    }
  },


  computed: {
    items(){
      return this.result_cities.map(entry => {
        // this.profile.id_city = entry.id_city;

        return `${entry.name} / ${entry.federated_unit}`

      })
    }
  },

}
</script>

<style>
</style>