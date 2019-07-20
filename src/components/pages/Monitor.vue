<template>
  <v-container fluid>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout column>
      <InfoUser></InfoUser> 

      <v-flex mt-1>
        <Courses txtButton="ME AJUDE" showButton="no" router="/monitor-contact"></Courses>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import InfoUser from '../InfoUser.vue';
import Courses from '../Courses.vue';

export default {
  components: {
    InfoUser,
    Courses,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>