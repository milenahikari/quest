<template>
  <section>
    <h3>Categorias</h3>
    <slick ref="slick" :options="slickOptions">
      <Category name="Artes" icon="fas fa-palette"/>
      <Category name="Biologia" icon="fas fa-microscope"/>
      <Category name="Filosofia" icon="fas fa-puzzle-piece"/>
      <Category name="Física" icon="fas fa-atom"/>
      <Category name="Geografia" icon="fas fa-globe-africa"/>
      <Category name="História" icon="fas fa-archway"/>
      <Category name="Inglês" icon="fas fa-language"/>
      <Category name="Literatura" icon="fas fa-book-reader"/>
      <Category name="Matemática" icon="fas fa-calculator"/>
      <Category name="Português" icon="fas fa-book"/>
      <Category name="Química" icon="fas fa-bong"/>
      <Category name="Sociologia" icon="fas fa-running"/>
    </slick>
  </section>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from 'vue-slick';

import Category from './Category.vue';

export default {
  components: {
    Category, 
    Slick
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        slidesToScroll: 3,
        dots: true,
        draggable: true
      }
    }
  }, 
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$refs.slick.reSlick();
    }

},
}
</script>

<style scoped>
h3 {
  margin-top: 12px;
  margin-bottom: 8px;
  font-weight: bold;
}
</style>