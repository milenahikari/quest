<template>
  <v-container grid-list-xl>
    <router-link to="/login">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-form 
      ref="form"
      v-model="valid"
    >
      <v-container fluid>
        <v-layout justify-center wrap>
          <v-flex d-flex shrink>
            
            <UploadImage @addFile="uploadFile"></UploadImage>
          
          </v-flex>
        </v-layout>
        <v-layout justify-center mb-4>
          <h2>Cadastre-se</h2>
        </v-layout>
        <v-layout justify-center wrap>
          <v-flex>

            <v-text-field
              label="Nome"
              v-model="user.name"
              type="text"
              :rules="fiedsRequired"
              required
              outline
            ></v-text-field>
            
            <v-text-field
              label="Email"
              v-model="user.email"
              type="email"
              :rules="emailRules"
              required
              outline
            ></v-text-field>

            <v-text-field
              label="Senha"
              v-model="user.password"
              @keyup.enter="next"
              :append-icon="e1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'text' : 'password'"
              :rules="passwordRules"
              required
              outline
            ></v-text-field>

            <v-layout align-center justify-center column wrapper-button>
              <v-btn @click="next" class="q-button mt-2" :class=" { 'btnGreen' : valid, disabled: !valid }">Avançar</v-btn>
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
import { mapActions } from 'vuex';
import api from '../../../services/api';
import UploadImage from '../../UploadImage';

export default {
  components: {
    UploadImage
  },
  
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        file: '',
      },

      valid: false,
      e1: false,
      
      emailRules: [ 
        v => !!v || "E-mail é obrigatório",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Preencha um e-mail válido'
      ],
      
      passwordRules: [
        v => !!v || 'Senha é obrigatório',   
        v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || 'Mínimo de 8 caracteres, pelo menos uma letra e um número'
      ],
      fiedsRequired: [ 
        v => !!v || "Nome é obrigatório",
      ],

      messageAlert: '',
      colorAlert: '',
      statusAlert: '',
      valueAlert: false,
      timeAlert: false,
    }
  }, 
  methods: {
    clear() {
      this.$refs.form.reset()
    },

    ...mapActions({
      setRegister: 'set_register'
    }),
    
    async next() {

      const email = await api.get(`/user/email/${this.user.email}`);

      if(email.data.registered) {
        this.timeAlert = true;
        this.colorAlert = '#FB8C00'
        this.messageAlert = "Já existe um cadastro com esse e-mail!";
        this.statusAlert = 'warning';
        this.valueAlert = true;

        await setTimeout(()=>{
          this.progress = false;
          this.timeAlert = false;
          console.log(e);
        },8000);
        return;
      }

      if(this.$refs.form.validate()) {

        this.setRegister({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          c_password: this.user.password,
          photo: this.user.file
        });

        this.$router.push("/user-data");
      } 
    },

    uploadFile(img){
      this.user.file = img;
    }
  },  
}
</script>