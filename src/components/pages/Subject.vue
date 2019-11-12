<template>
  <v-container grid-list-xl>

    <router-link to="/my-courses">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <!--
    v-if="isLogged"
    
    <router-link v-else to="/user-contact">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>
    -->

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
              :rules="titleRequired"
              required
              outline
            ></v-text-field>

            <v-textarea
              v-model= "course.description"
              label="Descreva a matéria:"
              :rules="descriptionRequired"
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

    <v-alert
      v-if="timeAlert"
      :color="colorAlert"
      :value="valueAlert"
      :type="statusAlert"
    >
      {{messageAlert}}
    </v-alert>

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
      titleRequired: [ 
        v => !!v || "Título é obrigatório",
      ],
      descriptionRequired: [ 
        v => !!v || "Descrição é obrigatória",
      ],
      course: {
        id_category: '',
        title: '',
        description: ''
      },

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
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
          console.log(this.monitor);
          const id_monitor  = this.monitor.id_monitor;
          const id_category = this.id_category;

          await api.post('course',
            {...this.course, id_monitor, id_category});

          this.$router.push('/my-courses');

        } catch(e) {
          console.log(e);

          this.timeAlert = true;
          this.colorAlert = '#FB8C00'
          this.messageAlert = "Falha ao cadastrar a matéria!";
          this.statusAlert = 'warning';
          this.valueAlert = true;

          await setTimeout(()=>{
            this.progress = false;
            this.timeAlert = false;
            console.log(e);
          },2000);
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