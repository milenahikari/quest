<template>
  <v-container>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-flex>
      <v-layout justify-center>
        <div>
          <v-img :src="require('../../../src/assets/img/logo.png')" height="69px" width="209px"/>
        </div>
      </v-layout>
    </v-flex>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
</style>