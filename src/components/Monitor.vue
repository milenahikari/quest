<template>
  <v-card 
    class="card-monitor mt-3"
    flat
  >
    <v-container>
      <v-layout align-center>
        <v-avatar
          size="100px"
          color="grey lighten-4"
          class="ma-2"
        >
          <v-icon>fas fa-user-plus</v-icon>
        </v-avatar>
        <v-layout>
          <v-flex ml-3 pt-0>
            <div 
              class="box-stars"
            >
              <div
                v-for="padrao in 5"
                :key="padrao"
              >
                <v-icon 
                  class="star completed"
                  v-if="padrao <= number"
                >fas fa-star</v-icon>
                <v-icon 
                  class="star"
                  v-else
                >fas fa-star</v-icon>

              </div>
            </div>
            <h2>{{name}}</h2>
            <p>{{course}}</p>
            <p>{{city}} - {{state}}</p>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  props: ['name', 'course', 'city', 'state', 'rating'],
  data() {
    return {
      stars: [],
      number: parseInt(this.rating)
    }
  },
  mounted() {
    axios.get('data/monitors.json')
      .then(res => this.stars = res.data)
  },
}
</script>

<style scoped>
.card-monitor {
  border-radius: 5px;
}
.box-stars {
  display: flex;
  width: 85%;
  padding-top: 5px;
  padding-bottom: 5px;
}
.star {
  color: #FFB500;
  font-size: 22px;
  font-weight: inherit;
  padding-right: 5px;
}
.completed {
  font-weight: bold;
}
</style>