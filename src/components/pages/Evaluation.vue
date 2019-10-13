<template>
  <v-container fluid mt-3>
    <router-link to="/" class="q-left">
      <v-icon>fas fa-times</v-icon>
    </router-link>

    <v-container fluid>
      <v-layout justify-center mb-4>
        <h2>Avaliar o monitor</h2>
      </v-layout>

      <div>
        <qrcode-drop-zone @decode="onDecode" @init="logErrors">
          <qrcode-stream @decode="onDecode" @init="onInit" />
        </qrcode-drop-zone>

        <qrcode-capture v-if="noStreamApiSupport" @decode="onDecode" />
      </div>

      <v-layout class="q-text-center" pa-4>
        <p>Ao final da aula escaneie o QR Code do monitor que pode ser acessado em <span class="font-weight-black">Meu QR Code</span> no menu dele.</p>
      </v-layout>

    </v-container>

  </v-container>

</template>

<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';

export default {
  components: { 
    QrcodeStream, 
    QrcodeDropZone, 
    QrcodeCapture 
  },

  data () {
    return {
      result: '',
      noStreamApiSupport: false
    }
  },

  methods: {
    onDecode (result) {
      this.result = result
    },

    logErrors (promise) {
      promise.catch(console.error)
      console.log("oi")
    },

    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'StreamApiNotSupportedError') {
          this.noStreamApiSupport = true
        }
      }
    }
  }
  
}
</script>

<style scoped>
.q-left {
  display:flex;
  justify-content: flex-end;
}
.q-text-center {
  text-align: center;
}
</style>