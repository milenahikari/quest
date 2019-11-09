<template>
  <v-container fluid mt-3>
    <router-link to="/">
      <v-icon >fas fa-chevron-left</v-icon>
    </router-link>

    <v-layout justify-center wrap mb-2>
          <v-flex d-flex shrink>
            <v-avatar
              size="110px"
              color="grey lighten-4"
            >
              <v-icon>fas fa-user-plus</v-icon>
            </v-avatar>
          </v-flex>
        </v-layout>

        <v-layout justify-center>
          <h2>Meu Perfil</h2>
        </v-layout>

        <layout>
          <v-tabs
            v-model="tabs"
            slider-color="#9A1982"
            fixed-tabs
            m-top="2"
          >
            <v-tab 
              v-for="menu in menus" 
              :key="menu"
            >
              <p style="color: black">{{ menu }} </p>
            </v-tab>
          </v-tabs>
        </layout>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-text-field
                    label="Nome"
                    v-model="name"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    v-model="email"
                    :rules="emailRules"
                    disabled
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Curso"
                    v-model="course"
                    type="text"
                    :rules="fiedsRequired"
                    required
                    outline
                  ></v-text-field>

                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="saveDados" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>
          </v-form>
          </v-tab-item>

          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-autocomplete
                    v-model="locationUser"
                    search-input="locationUser"
                    :items="cities"
                    :search-input.sync="search"
                    :placeholder="locationUser"
                    hide-no-data
                    hide-selected
                    label="Cidade"
                    name="city"
                    outline
                    return-object
                    no-filter
                    item-text="name"
                    class="q-input-register"
                    id="city"
                  > </v-text-field> </v-autocomplete>

                  <v-text-field
                    label="Celular"
                    v-model="phone"
                    :rules="fiedsRequired"
                    v-mask="mask"
                    required
                    outline
                    v-if="getProfile.teach==true || getProfile.teach==1"
                  ></v-text-field>

                  <v-checkbox
                    v-model="checkShare"
                    label="Compartilhar número de WhatsApp"
                    v-if="getProfile.teach==true || getProfile.teach==1"
                  ></v-checkbox>

                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="saveContact" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>

          </v-form>
          </v-tab-item>

          <v-tab-item>
            <v-form v-model="valid">
              <v-layout justify-center wrap mt-3>
                <v-flex>

                  <v-text-field
                    label="Senha Atual"
                    v-model="password"                      
                    min="8"
                    :append-icon="e1 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'text' : 'password'"
                    :rules="passwordRules"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Nova senha"
                    v-model="password1"
                    min="8"
                    :append-icon="e2 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    :append-icon-cb="() => (e2 = !e2)"
                    :type="e2 ? 'text' : 'password'"
                    :rules="passwordRules"
                    required
                    outline
                  ></v-text-field>

                  <v-text-field
                    label="Confirmar nova senha"
                    v-model="password2"
                    min="8"
                    :append-icon="e3 ? 'fas fa-eye' : 'fas fa-eye-slash'"
                    :append-icon-cb="() => (e3 = !e3)"
                    :type="e3 ? 'text' : 'password'"
                    :rules="passwordRules"
                    required
                    outline
                  ></v-text-field>

                  <v-layout align-center justify-center column wrapper-button>
                    <v-btn @click="savePassword" class="q-button" :class=" { 'btnGreen' : valid, disabled: !valid }">Salvar</v-btn>
                  </v-layout>
                </v-flex>         
              </v-layout>
          </v-form>
        </v-tab-item>
      </v-tabs-items>    
        </v-tabs-items>    
      </v-tabs-items>    
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import api from '../../services/api';
import { mask } from 'vue-the-mask';

export default {
  directives: {
    mask,
  },
  data() {
    return {
      valid: false,
      e1: false,
      e2: false,
      e3: false,
      fiedsRequired: [ 
        v => !!v || "E-mail is required",
      ],
      checkShare: true,
      emailRules: [ 
        v => !!v || "E-mail is required",
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

      tabs: null,
      menus: [
        'Dados',
        'Contato',
        'Senha'
      ],
      name: '',
      email: '',
      curso: '',
      passwordRules: [
        v => !!v || 'Senha é obrigatório',        
      ],
      mask: '(##) #####-####',
      name: '',
      email: '',
      course: '',
      city: '',
      state: '',
      phone: '',
      share_phone: '',
      password:'',
      password1:'',
      password2:'',
      dados: [],

      id_city: null,
      search: null,
      cities: [],

      location: '',
      locationUser: '',
    }
  }, 

  methods: {
    clear() {
      this.$refs.form.reset()
    },

    next() {
      this.$router.push("/");
    },

    async saveDados() {
      try {
        this.dados = [
        this.name,
        this.course
        ]

        const response = await api.put(`/user/${this.getProfile.id}`, this.dados);

        this.setProfile(response); //não consegui
      } catch(e) {
        console.log();
      }
    },

    async saveContact(){
      try{
        this.dados = [
        this.getProfile.teach, //[0]
        this.id_city, //[2]
        this.getProfile.id_monitor, //[2]
        this.phone, //[3]
        this.share_phone //[4]
        ]

        const response = await api.put(`userContact/${this.getProfile.id}`, this.dados);

      } catch(e){
        console.log();
      }
    },

    async savePassword(){
      try{
        this.dados = [
        this.password,
        this.password1,
        this.password2
        ]

        const response = await api.put(`/userPassword/${this.getProfile.id}`, this.dados);

      } catch(e) {
        console.log();
      }
    }
  },

  computed: {
    ...mapGetters({
      getProfile: 'get_profile'
    })
  },

  async mounted() {
    const response = await api.get(`/user/${this.getProfile.id}`);

    this.name = response.data[0].name;
    this.email = response.data[0].email;
    this.course = response.data[0].course;
    this.id_city = response.data[0].id_city;
    this.city = response.data[0].city;
    this.state = response.data[0].state;
    this.locationUser = this.city + ' / ' + this.state

    const responseContact = await api.get(`/userContact/${this.getProfile.id}`);

    this.phone = responseContact.data[0].phone;
    this.share_phone = responseContact.data[0].share;

    if(this.share_phone == 1){
      this.share_phone = true;
    }else{
      this.share_phone = false;
    }
    
  },

  watch: {
    search (val) {
      api.get(`search_city?q=${val.toUpperCase()}`)
        .then(data => this.cities = data.data.map( item => {
          this.id_city = item.id_city;    
          return ({
            name: `${item.name} / ${item.federated_unit}`,
          })
        })
        )
    },
  },
}
</script>

<style scoped>
.theme--light.v-input input{
    color: black;
}
</style>