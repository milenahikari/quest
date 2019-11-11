<template>

  <v-layout column>
    <v-flex align-self-end>
      <v-btn 
        v-if="isLogged"
        class="btn-course"
        @click="btnRouter(router)"
      >{{txtButton}}</v-btn>
      
      <v-btn 
        v-else
        class="btn-course"
        @click="btnRouter('/login')"
      >{{txtButton}}</v-btn>
    </v-flex>
    
    <v-flex>
      <v-layout column
        v-for="(group) in courses"
        :key="group.id"
      >

        <div class="wrapper-category">
          <v-icon class="icon-category">{{group.category.icon}}</v-icon>
          <span class="title-category">{{group.category.name}}</span>
        </div>
      
        <v-layout column
          v-for="(item) in group.category.courses"
          :key="item.id"
        >
          <v-layout align-center justify-space-between row>
            <span class="title-course mt-3">{{item.title}}</span>
            <div v-if="showButton == 'yes'">
              <button class="btn-icon" @click="dialog=true, idDelete=item.id"><v-icon class="icon-course">fas fa-trash</v-icon></button>
              <button class="btn-icon" @click="modifyCourse(item.id)"><v-icon class="icon-course">fas fa-pencil-alt</v-icon></button>
            </div>
          </v-layout>
          <v-layout>
            <div class="wrapper-description mt-1 mb-3">
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
              @click="deleteConfirm(idDelete, idMonitor)"
            >
              Sim
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout> 
  </v-layout>
</template>

<script>
import api from '../services/api';
import { mapGetters } from 'vuex';

export default {
  props: ['txtButton', 'showButton', 'router', 'idMonitor', 'idCourse'],

  data() {
    return {
      courses: '',
      dialog: false,
      idDelete:'',
    }
  },

  mounted() {
    api.get(`/monitors/courses/${this.idMonitor}`)
      .then(
        res => this.courses = res.data,
      )

  },

  methods: {
    async deleteConfirm(idDelete, idMonitor) {
      console.log(idDelete);
      try {
        
        const response = await api.post(`/course/${this.idDelete}`);
        this.dialog = false;
        this.$router.go('/my-courses');

      } catch(e) {
        console.log(e);
      }
    },

    modifyCourse(idCourse) {
      this.$router.push(`/edit-course/${idCourse}`);
    },
    
    btnRouter(router) {
      this.$router.push(router);
    }
  },

  computed: {
    ...mapGetters({
      isLogged: 'get_login'
    })
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