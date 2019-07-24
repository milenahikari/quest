<template>
  <section>
    <v-toolbar flat color="white">
      <v-toolbar-side-icon v-if="isLogged" class="menuIcon" v-on:click="hide"></v-toolbar-side-icon>
      <router-link to="/login" v-else class="wrapper-icon">
        <v-icon>fas fa-user-circle</v-icon>
        <span>Login</span>
      </router-link>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-img :src="require('../../src/assets/img/quest.png')" class="logo"/>
      </router-link>
    </v-toolbar>

    <v-navigation-drawer 
      v-model="drawer" 
      absolute 
      temporary
    >

      <v-list>
        <v-list-tile 
          v-for="(item) in items"
          :key="item.title"
          @click="toRouter(item.to)"
          class="py-2"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>
  </section>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      drawer: false,
      isLogged: false,
      items: [],
    }
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
    api.get('/menus')
      .then(res => this.items = res.data)
  },
}
</script>

<style scoped>
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