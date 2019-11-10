<template>
  <v-container grid-list-xl>

    <router-link to="/my-courses">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-container fluid>
      <v-layout justify-center mb-4>
        <h2>Edite sua matéria</h2>
      </v-layout>
    </v-container>
    
    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container fluid>

        <v-layout justify-center wrap>
          <v-flex>
            <div class="wrapper-category">
              <v-icon class="icon-category">{{icon}}</v-icon>
              <span class="title-category">{{name}}</span>
            </div>

            <v-text-field
              class="mt-3"
              v-model= "title"
              label="Defina um título"
              type="text"
              :rules="titleRequired"
              required
              outline
            ></v-text-field>

            <v-textarea
              v-model= "description"
              label="Descreva a matéria:"
              :rules="descriptionRequired"
              outline
              required
            ></v-textarea>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="saveCourse(idCourse)" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
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
  props:['idCourse'],
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
        title: '',
        description: ''
      },

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,

      idCourse: '',
      icon: '',
      name: '',
      title: '',
      description:'',

    }
  },

  async mounted() {
    const response = await api.get(`/monitors/course/${this.idCourse}`);

    this.icon = response.data[0].icon;
    this.name = response.data[0].name;
    this.title = response.data[0].title;
    this.description = response.data[0].description;

  },

  methods: {
    clear () {
      this.$refs.form.reset()
    },
    
    async saveCourse(idCourse) {
      try {
        this.dados = [
            this.title,
            this.description
          ]

        const response = await api.put(`/course/${this.idCourse}`, this.dados);

        this.timeAlert = true;
        this.colorAlert = '#199854';
        this.messageAlert = "Matéria editada com sucesso!";
        this.statusAlert = 'success';
        this.valueAlert = true;

        await setTimeout(()=>{
          this.progress = false;
          this.timeAlert = false;
          console.log(this.timeAlert);
        },5000);
        this.$router.push('/my-courses');

      } catch(e) {
          console.log(e);

          this.timeAlert = true;
          this.colorAlert = '#FB8C00';
          this.messageAlert = "Os campos devem ser preenchidos!";
          this.statusAlert = 'warning';
          this.valueAlert = true;

          await setTimeout(()=>{
            this.progress = false;
            this.timeAlert = false;
            console.log(e);
          },2000);
        }
           
      }
  },
}
</script>

<style scoped>
  .wrapper-category {
    background: #F9F9F9;
    width: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 10px;
  }
  .icon-category {
    font-size: 20px;
    color: #5CCC6D;
    padding: 10px;
  }
  .title-category {
    font-size: 15px;
    font-weight: bold;
    color: #313131;
  }
</style>