<template>
  <div>
    <div class="category" v-bind:class="{ selected: this.selected }">
      <v-icon color="#199854" v-bind:class="{ colorWhite: this.selected }">{{icon}}</v-icon>
      <span class="text-category" v-bind:class="{ colorWhite: this.selected }">{{this.name}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props:['name', 'icon', 'selected'], 
}
</script>

<style scoped>
.category{
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #F9F9F9;
  border-radius: 10px;
}
.category i{
  font-size: 55px;
}
.text-category{
  margin-top: 4px;
}
.selected {
  background: rgb(25, 152, 84);
}
.colorWhite {
  color: white !important;
}
</style>