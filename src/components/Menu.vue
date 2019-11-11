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
        <v-layout mt-2>
          <v-list-tile @click="verPerfil">
            <v-list-tile-action>
              <v-icon>fas fa-user-edit</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Meu perfil</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>

        <v-layout mt-2>
          <v-list-tile @click="addCourse" v-if="!isMonitor">
            <v-list-tile-action>
              <v-icon>fas fa-book-open</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Criar matéria</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>

        <v-layout mt-2>
          <v-list-tile @click="myCourses" v-if="isMonitor">
            <v-list-tile-action>
              <v-icon>fas fa-chalkboard-teacher</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Minhas Matérias</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>

        <v-layout mt-2>
          <v-list-tile @click="myMedals">
            <v-list-tile-action>
              <v-icon>fas fa-medal</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Medalhas</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>

        <v-layout mt-2>
          <v-list-tile @click="veQrCode" v-if="isMonitor">
            <v-list-tile-action>
              <v-icon>fas fa-qrcode</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Meu QR Code</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>

        <v-layout mt-2>
          <v-list-tile @click="evaluation">
            <v-list-tile-action>
              <v-icon>fas fa-star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Avaliar Aula</v-list-tile-title>
            </v-list-tile-content>   
          </v-list-tile>
        </v-layout>
        
        <v-layout mt-2>
          <v-list-tile @click="logOut">
            <v-list-tile-action>
              <v-icon>fas fa-sign-out-alt</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Sair</v-list-tile-title>
            </v-list-tile-content>
            
          </v-list-tile>
        </v-layout>
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
      if(this.isLogged) {
        if(this.user.teach) this.isMonitor = true;
      }
    }, 

    toRouter(url) {
      this.$router.push(`${url}`);
    },

    ...mapActions({
      setLogin: 'set_login'
    }),

    async logOut() {
      //Limpa o state
      await this.setLogin(false)

      //Limpa o Local Storage
      await localStorage.removeItem('monitor')
      await localStorage.removeItem('user')
      await localStorage.removeItem('vuex')

      this.$router.push('/')

      //Fecha menu lateral
      this.drawer = false
    },

    verPerfil() {
      this.$router.push('/profile')
      this.drawer = false
    },

    veQrCode() {
      this.$router.push('/qr-code')
      this.drawer = false
    },
    
    myMedals() {
      this.$router.push('/medals')
      this.drawer = false
    },

    evaluation() {
      this.$router.push('/evaluation')
      this.drawer = false
    },

     addCourse() {
      this.$router.push('/add-contact')
      this.drawer = false
    },

    myCourses() {
      this.$router.push('/my-courses')
      this.drawer = false
    },

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