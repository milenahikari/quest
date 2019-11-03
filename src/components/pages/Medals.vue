<template>
  <v-container fluid mt-3>
    <router-link to="/">
      <v-icon>fas fa-chevron-left</v-icon>
    </router-link>

    <div class="box-medals">
      <h2>Suas Medalhas</h2>

      <div class="frame mt-4">
        <div 
          v-for="(color, index) in colors"
          :key="color.level"
        >
          <div v-if="index < userMedals.number">
            <Medal :color="`${color.level}`"></Medal>
          </div>
          <div v-else>
            <Medal color="template"></Medal>
          </div>
        </div>
      </div>
    </div>
    
    <v-list class="mt-4">
      <v-list-tile
        v-for="(gem) in gems"
        :key="gem.title"
      >
        <v-list-tile-action>
          <v-icon :class="`${gem.class}`" class="icon">{{gem.icon}}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{gem.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-container>  
</template>

<script>
import api from '../../services/api';
import { mapGetters } from 'vuex';

import Medal from '../Medal';

export default {
  data() {
    return {
      gems: [],
      userMedals: [],
      colors: [],
    }
  },

  components: {
    Medal,
  },

  mounted() {    
    api.get('/gems')
      .then(res => {
        this.gems = res.data
      })
    
    api.get('/gems/colors')
      .then(res => this.colors = res.data)

    api.get(`/monitors/gems/${this.getProfile.id}`)
      .then(res => this.userMedals = res.data)

  },

  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    })
  },
}
</script>

<style scoped>
.template {
  color: #6F6F6F;
}
.iniciante {
  color: #D87515;
}
.esforcado {
  color: #CDC6C6;
}
.concentrado {
  color: #FFD700;
}
.motivador {
  color: #9B111E;
}
.inspiracao {
  color: #14A043;
}
.supremo {
  color: #6AA9DB;
}
.icon {
  font-size: 18px;
}
.v-list-tile-title {
  font-size: 16px;
}
.box-userMedals {
  background: #313131;
  width: 80%;
}
.box-medals {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
div .frame {
  background: #313131;
  width: 95%;
  border: 3px #FFB500 solid;
  border-radius: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.icon-gem {
  padding: 10px;
}
h2 {
  padding: 10px;
}
</style>