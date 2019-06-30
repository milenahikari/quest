<template>
  <v-footer height="170px" color="white">
    <v-container fluid>
      <v-layout justify-start column>
        <router-link to="quem-somos" class="titleAbout">Quem somos</router-link>
        <router-link to="nossos-valores" class="titleAbout">Nossos Valores</router-link>
      </v-layout>
      <v-divider></v-divider>
      <v-flex class="copyright">
        &copy;{{ new Date().getFullYear() }} <span>QUEST</span>
      </v-flex>
    </v-container>
  </v-footer>
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
.titleAbout {
  font-size: 20px;
  font-weight: bold;
  color: #9A1982;
  margin-bottom: 15px;
}
.copyright {
  color: #707070;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
}
</style>