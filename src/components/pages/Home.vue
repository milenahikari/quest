<template>
  <v-container mx-auto>
    <Header></Header>
    
    <ResultSearch></ResultSearch>

    <Footer></Footer>
    
  </v-container>
  
</template>

<script>
import api from '../../services/api';

import Header from '../Header';
import ResultSearch from '../ResultSearch';
import Footer from '../Footer';

export default {
  data() {
    return {
    }
  },

  components: {
    Header, 
    ResultSearch,
    Footer, 
  },
  
}
</script>