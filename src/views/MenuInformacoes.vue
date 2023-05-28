<style scoped>
a[color="danger"] {
    color: var(--ion-color-danger);
}

a[color="secondary"] {
    color: var(--ion-color-secondary);
}

.container {
  padding-top: 16px;
}
</style>

<template>
  <ion-page>
    <base-layout>
    <div class="container">
      <router-link
        v-for="tema in temas"
        :key="tema.id"
        :to="`/info/${tema.id}`"
        :color="tema.color">
        <ion-button :color="tema.color" expand="block">{{ tema.nome }}</ion-button>
      </router-link>
    </div>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonButton,
    IonPage,
  },
  data() {
    return {
      temas: [
        { id: 1, nome: "Engasgamento em Bebê", color: "secondary" },
        { id: 2, nome: "Engasgamento", color: "secondary" },
        { id: 3, nome: "Quedas com Trauma", color: "secondary" },
        { id: 4, nome: "Crise Convulsiva", color: "secondary" },
        { id: 5, nome: "Hemorragias", color: "secondary" },
        { id: 6, nome: "Parada Cardiorrespiratória", color: "secondary" },
        { id: 7, nome: "Queimaduras", color: "secondary" },
        { id: 8, nome: "Acidente com Animais Peçonhentos", color: "secondary" },
        { id: 9, nome: "Como Ligar para Emergência", color: "danger" },
      ],
    };
  },
});
</script>
