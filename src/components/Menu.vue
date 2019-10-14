<template>
  <section>
    <v-toolbar flat color="white">
      <router-link to="/">
        <v-img :src="require('../../src/assets/img/quest.png')" class="logo"/>
      </router-link>
      
      <v-spacer></v-spacer>
      
      <v-toolbar-side-icon v-if="isLogged" class="menuIcon" v-on:click="hide"></v-toolbar-side-icon>

      <router-link to="/login" v-else class="wrapper-icon">
        <v-icon>fas fa-user-circle</v-icon>
        <span>Login</span>
      </router-link>

    </v-toolbar>

    <v-navigation-drawer 
      v-model="drawer" 
      app 
      temporary
      right
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

        <v-list-tile
          v-if="isMonitor"
          @click="veQrCode"
        >
          <v-list-tile-action>
            <v-icon>fas fa-qrcode</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Meu QR Code</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>

        <v-list-tile
          @click="logOut"
        >
          <v-list-tile-action>
            <v-icon>fas fa-sign-out-alt</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Sair</v-list-tile-title>
          </v-list-tile-content>
          
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>
  </section>
</template>

<script>
import api from '../services/api';
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      items: [],
      isMonitor: false,
    }
  },

  methods: {
    hide() {
      this.drawer = !this.drawer;
    }, 

    toRouter(url) {
      this.$router.push(`${url}`);
    },

    ...mapActions({
      setLogin: 'set_login'
    }),

    logOut() {
      //Limpa o state
      this.setLogin(false)

      //Limpa o Local Storage
      localStorage.removeItem('monitor')
      localStorage.removeItem('user')
      localStorage.removeItem('vuex')

      this.$router.push('/')

      //Fecha menu lateral
      this.drawer = false
    },

    veQrCode() {
      this.$router.push('/qr-code')
      this.drawer = false
    }

  },

  mounted() {
    api.get('/menus')
      .then(res => this.items = res.data)    
  },

  computed: {
    ...mapGetters({
      isLogged: 'get_login',
      user: 'get_profile'
    }),

    isMonitor() {
      console.log(this.user.teach)
      if(this.isLogged && this.user.teach) {
        return true;
      } else {
        return false;
      }
      
    }
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