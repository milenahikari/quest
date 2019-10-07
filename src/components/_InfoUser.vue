<template>
  <div>
    
  </div>

</template>

<script>
import api from '../services/api';

export default {
  props: ['idMonitor'],

  components: {

  },

  data() {
    return {
    }
  },

  mounted() {
    api.get(`monitors/${this.idMonitor}`)
      .then(response => 
        console.log(response.data)
        // this.monitor = response.data
      )
      .catch(err => console.log(err))
    
  },

}
</script>

