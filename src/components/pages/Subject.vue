<template>
  <v-container grid-list-xl>

    <router-link v-if="isLogged" to="/my-courses">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <router-link v-else to="/user-contact">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-container fluid>
      <v-layout justify-center mb-4>
        <h2>Cadastre sua matéria</h2>
      </v-layout>
    </v-container>

    <Carousel></Carousel>

    <v-alert
      type="warning"
      border="border-left"
      color="yellow darken-2"
      v-model="show"
      dismissible="true"
    >
      Escolha uma das categorias acima
    </v-alert>
    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container fluid>

        <v-layout justify-center wrap>
          <v-flex>

            <v-text-field
              v-model= "course.title"
              label="Defina um título"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>

            <v-textarea
              v-model= "course.description"
              label="Descreva o curso:"
              :rules="fiedsRequired"
              outline
              required
            ></v-textarea>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="submit" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Cadastrar</v-btn>
            </v-layout>
          </v-flex>         
        </v-layout>
      </v-container>
    </v-form>

  </v-container>
</template>

<script>
import api from '../../services/api';
import { mapGetters } from 'vuex';

import Carousel from '../Carousel.vue';

export default {
  data() {
    return {
      valid: false,
      show: false,
      e1: false,
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
      course: {
        id_category: '',
        title: '',
        description: ''
      }
    }
  },
  components: {
    Carousel
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    
    async submit() {

      if(this.$refs.form.validate()) {

        if(this.id_category == '') {
          this.show = true;
          return;
        }

        try {

          const id_monitor  = this.monitor.id_monitor;
          const id_category = this.id_category;

          const response = await api.post('course',
            {...this.course, id_monitor, id_category});

          this.$router.push('/');

        } catch(e) {
          alert("Erro: arruma ai");
            console.log(e);
        }
      
      }
    }
  },
  computed: {
    ...mapGetters({
      id_category: 'get_category',
      isLogged: 'get_login',
      monitor: 'get_profile'
    })
  },
}
</script>

<style scoped>
</style>