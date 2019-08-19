<template>
  <section>
    <h3>Selecione uma categoria</h3>

    <slick ref="carousel" :options="slickOptions">
      
      <div v-for="i in categories" @click="idCategory(i.id)">
        <Category v-if="itemClicado == i.id" :name="i.name" :icon="i.icon" :selected="true"/>
        <Category v-else :name="i.name" :icon="i.icon" :selected="false"/>
      </div>
    </slick>

  </section>
</template>

<script>
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slick from 'vue-slick';
import api from '../services/api';
import { mapActions } from 'vuex';

import Category from './Category.vue';

export default {
  components: {
    Category, 
    Slick
  },
  data() {
    return {
      categories: [],
      clicado: false,
      itemClicado: 0,
      slickOptions: {
        slidesToShow: 3,
        infinite: true,
        accessibility: true,
        slidesToScroll: 3,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        draggable: true,
      },
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
    },

    idCategory(id) {
      this.clicado = true;
      this.itemClicado = id;
      this.setId(id);
    },

    ...mapActions({
      setId: 'set_category'
    })
  },
  watch: {
    categories: function () {
        let currIndex = this.$refs.carousel.currentSlide()

        this.$refs.carousel.destroy()
        this.$nextTick(() => {
        this.$refs.carousel.create()
        this.$refs.carousel.goTo(currIndex, true)
        })
    }
  },
  mounted() {
    api.get('/category')
      .then(res => this.categories = res.data)
  },
}
</script>

<style scoped>
h3 {
  margin-bottom: 8px;
  font-weight: bold;
}
</style>