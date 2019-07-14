<template>
  <v-icon :class="`${this.color}`" class="gem">fas fa-gem</v-icon>
</template>

<script>
export default {
  props:['color'],
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.gem {
  font-size: 40px;
  padding: 20px;
}
</style>