<template>
  <div>
    <h1>Teste</h1>
    <input type="text" v-model="email" placeholder="Email">
    {{email}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: ''
    }
  },
}
</script>