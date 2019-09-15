<template>
  <div id="watch-example">
    <p>
      Faça uma pergunta do tipo sim/não:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import lodash from 'vue-lodash';

export default {
  data() {
    return {
      question: '',
      answer: 'Eu não posso responder até que você faça uma pergunta!'
    }
  },
  watch: {
    // sempre que a pergunta mudar, essa função será executada
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Esperando você parar de escrever...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce é uma função fornecida pelo lodash para limitar
    // a frequência que uma operação complexa pode ser executada.
    // Neste caso, queremos limitar a frequência com que acessamos
    // a yesno.wtf/api, esperando que o usuário termine completamente
    // a digitação antes de realizar a chamada Ajax. Para aprender
    // mais sobre a função _.debounce (e sua prima _.throttle),
    // visite: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Perguntas geralmente têm uma interrogação. ;-)'
        return
      }
      this.answer = 'Pensando...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = response.data.answer === 'yes' ? 'Sim.' :
            response.data.answer === 'no' ? 'Não.' : 'Talvez!'
        })
        .catch(function (error) {
          vm.answer = 'Erro! Não pode executar a API. ' + error
        })
    }
  }
}
</script>