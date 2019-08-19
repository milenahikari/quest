<template>
  <div class="card">
    <div class="img-card" 
      :style="{'background-image': `url(${require('../assets/img/'+ this.img)})`,
               'background-position': `${this.position}`
              }">
    </div>
    
    <div class="text-card">
      <h3>{{this.title}}</h3>
      <p>{{this.textI}}</p>
      <p>{{this.textII}}</p>
      <p>{{this.textIII}}<br>{{this.textIV}}</p>
    </div>

  </div>
</template>

<script>
export default {
  props:['img', 'position', 'title', 'textI', 'textII', 'textIII', 'textIV']
}
</script>

<style scoped>
.card{
  width:328px;
  height: 466px;
  background: #BD5CAA;
  border-radius: 10px;
  margin-bottom: 20px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.card h3 {
  margin-top: 30px;
}
.card p {
  margin-top: 25px;
}
.img-card {
  width: 100%;
  height: 130px;
  background-size: 100%;
  border-radius: 10px 10px 0 0;
}
.text-card {
  margin: 0 auto;
  width: 78%;
}
</style>