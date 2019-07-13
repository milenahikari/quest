<template>

  <v-layout column>
    <v-flex align-self-end>
      <v-btn class="btn-course">Nova matéria</v-btn>
    </v-flex>
    
    <v-flex>
      <v-layout column
        v-for="(group, index) in groups"
        :key="group.id"
      >

        <div class="wrapper-category">
          <v-icon class="icon-category">{{group.category.icon}}</v-icon>
          <span class="title-category">{{group.category.name}}</span>
        </div>
      
        <v-layout column
          v-for="(item) in group.category.courses"
        >
          <v-layout align-center justify-space-between row>
            <span class="title-course">{{item.name}}</span>
            <div>
              <button class="btn-icon" @click="deleteCourse"><v-icon class="icon-course">fas fa-trash</v-icon></button>
              <button class="btn-icon" @click="modifyCourse"><v-icon class="icon-course">fas fa-pencil-alt</v-icon></button>
            </div>
          </v-layout>
          <v-layout>
            <div class="wrapper-description mt-1 mb-4">
              <p>{{item.description}}</p>
            </div>
          </v-layout>
        </v-layout>

      </v-layout>
    </v-flex> 
    <v-layout row justify-center>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-text>
            Tem certeza que deseja excluir a matéria?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
            >
              Não
            </v-btn>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
            >
              Sim
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout> 
    <Delete></Delete>
  </v-layout>
</template>

<script>
import axios from 'axios';

import Delete from './Delete.vue';

export default {
  data() {
    return {
      groups: [],
      dialog: false
    }
  },
  mounted() {
    axios.get('/data/courses.json')
      .then(res => this.groups = res.data)

  },
  methods: {
    deleteCourse() {
      this.dialog = true
    },
    modifyCourse() {
      alert("Deseja alterar essa matéria?");
    }
  },
}
</script>

<style scoped>
.btn-course {
  width: 100px;
  height: 40px;
  background: #199854 !important;
  font-size: 12px;
  font-weight: bold;
  text-transform: unset !important;
  color: white;
  border: 2px #199854 solid;
}
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
.title-course {
  font-size: 15px;
  font-weight: bold;
  color: #BD5CAA;
}
.btn-icon {
  width: 40px;
  height: 40px;
  outline: none;
}
.icon-course{
  font-size: 16px;
  color: #9A1982;
}





.wrapper-description {
  background: #F9F9F9;
  border: 1px #9A1982 solid;
  border-radius: 10px;
  font-size: 14px;
  padding: 8px;
}

</style>