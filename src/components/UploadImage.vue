<template>
  <section>
    <div v-if="!preview" class="img-upload shadow-1 flex justify-center">
      <div>
        <label for="file-input" class="imgCamera">
          <v-icon>fas fa-camera</v-icon>
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
    
  </section>
</template>

<script>
export default {
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
    } 
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