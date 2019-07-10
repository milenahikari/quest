<template>
  <v-container>
    <router-link to="/login">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>


    <v-layout column>
      <v-layout>
        <v-flex mb-1>
          <h1 class="mt-3">Marina Joaquina</h1>
          <h4 class="q-title">Curso</h4>
          <span class="q-description">Medicina</span>
          <h4 class="q-title">Cidade</h4>
          <span class="q-description">Promissão - SP</span>
      </v-flex>
      <v-avatar
        size="100px"
        color="grey lighten-4"
      >
        <v-icon>fas fa-user-plus</v-icon>
      </v-avatar>
      </v-layout>
      <v-divider></v-divider>
      <v-flex mt-1>
        <Courses></Courses>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Courses from '../Courses.vue';

export default {
  components: {
    Courses,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.q-title {
  font-size: 12px;
  margin-top: 5px;
}
.q-description {
  font-size: 12px;
  font-weight: bold;
}
</style>