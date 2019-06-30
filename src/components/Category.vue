<template>
  <div>
    <div class="category">
      <v-icon color="#199854">{{icon}}</v-icon>
      <span class="text-category">{{this.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['name', 'icon'], 
}
</script>

<style>
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
</style>