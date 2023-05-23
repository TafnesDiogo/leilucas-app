<template>
  <ion-page>
    <info-base-layout tituloPagina="Menu de Informações" paginaRetorno="/">
      <ion-button
        v-for="tema in temas"
        :router-link="tema.url"
        expand="block"
        >{{ tema.title }}</ion-button
      >
    </info-base-layout>
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
        {
          title: "Engasgamento em Bebê",
          url: "/info/EngasgamentoBebe",
        },
        {
          title: "Engasgamento",
          url: "/info/Engasgamento",
        },
        {
          title: "Quedas com Traumas",
          url: "/info/QuedascomTraumas",
        },
        {
          title: "Crise Convulsiva",
          url: "/info/CriseConvulsiva",
        },
        {
          title: "Hemorragias",
          url: "/info/Hemorragias",
        },
        {
          title: "Parada Cardiorrespiratória",
          url: "/info/PCR",
        },
        {
          title: "Queimaduras",
          url: "/info/Queimaduras",
        },
        {
          title: "Acidente com Animais Peçonhentos",
          url: "/info/AnimaisPeçonhentos",
        },
      ],
    };
  },
});
</script>
