<template>
  <section class="white">
    <v-toolbar flat color="white">
      <v-toolbar-side-icon v-if="isLogged" class="menuIcon" v-on:click="hide"></v-toolbar-side-icon>
      <router-link to="/login" v-else class="wrapper-icon">
        <v-icon>fas fa-user-circle</v-icon>
        <span>Login</span>
      </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-img :src="require('../../src/assets/img/quest.png')" class="logo"/>
     </div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list 
        v-for="(item, index) in items"
        :key="item.title" 
      >
        <v-list-tile @click="toRouter(item.to)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
        <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
      </v-list>
      
    </v-navigation-drawer>

    <v-container fluid>
      <v-layout justify-center column>
        <h1>Busque pelas matérias que possui dificuldade e colabore compartilhando conhecimentos</h1>
        <v-text-field
          label="O que você quer aprender?"
          type="text"
          outline
        ></v-text-field>
        <v-text-field
          label="Selecione uma cidade"
          type="text"
          outline
        ></v-text-field>
      </v-layout>
      <Carousel></Carousel>
    </v-container>
  </section>
</template>

<script>
import axios from 'axios'

import Carousel from './Carousel.vue';
export default {
  data(){
    return {
      isLogged: true,
      drawer: false,
      items: [],
    }
  },
  components: {
    Carousel
  },
  methods: {
    hide() {
      this.drawer = !this.drawer;
    }, 
    toRouter(url) {
      this.$router.push(`${url}`);
    }
  },
  mounted() {
    axios.get('/menu.json')
      .then(res => this.items = res.data)
  },
}
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}
.logo {
  height: 40px;
  width: 122px;
  margin-top: 6px;
  margin-right: 6px;
}
.wrapper-icon {
  width: 65px;
}
.menuIcon {
  color: #707070 !important;
}
</style>