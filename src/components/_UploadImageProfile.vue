<template>
  <section>
    <div v-if="!preview" class="img-upload previewImage">
      <div class="img-upload shadow-1 flex justify-center">
        <label for="file-input" class="imgCamera">
          <v-icon v-if="editar">fas fa-camera</v-icon>
          <img v-else :src="urlPhoto">
        </label>
        <input id="file-input" type="file" :data-file="file" accept="image/*" @change="previewImage"/>
      </div>
    </div>

    <div v-if="preview" class="img-upload previewImage"> 
      
      <div class="img-upload shadow-1 flex justify-center">
       <label for="file-input" class="imgCamera">
          <img :src="preview">
        </label>
        <input id="file-input" type="file" :data-file="file" accept="image/*" @change="previewImage"/>
      </div>
    </div>  

    <v-icon @click="savePhoto" color="#199854">fas fa-check-circle</v-icon>
    
  </section>
</template>

<script>
export default {
  props: ['editar', 'urlPhoto'],

  data () {
    return {
      preview: '',
      file: '',

    }
  },
  
  computed: {
    myIcon(){
      return `font-size:${this.size}px`;
    }
  },
  methods: {
    previewImage(e) {
      const data = new FormData();
            
      this.file = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);

      this.$emit('addFile', this.file);
    },

    async savePhoto() {
      try {
        const form = new FormData();
        form.append('photo', this.file);

        const response = await api.put(`/user/photo/${this.getProfile.id}`, form);
        console.log(response);
        
      } catch(e) {
        console.log(e);
      }
      
    },
  }
}
</script>

<style scoped>
  #file-input{
    display: none;
  }
  .img-upload {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border: 1px solid #eee;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px !important;
  }
  .imgCamera {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
  .previewImage img {
    width: 100%;
  }
</style>