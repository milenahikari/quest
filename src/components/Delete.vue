<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-text>
          Tem certeza que deseja excluir a matéria?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Não
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Sim
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: true
    }
  }
}
</script>

<style scoped>
</style>