<template>
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
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style scoped>
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
  padding-right: 10px;
}
.completed {
  font-weight: bold;
}
</style>