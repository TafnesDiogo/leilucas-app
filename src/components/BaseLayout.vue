<style>
p,
li {
  line-height: 1.5em;
  text-align: justify;
}

ion-content > ion-title {
  padding: 0;
}

ion-content h1:first-child {
    margin-top: 5px;
}
</style>

<template>
  <app-cabecalho />
  <ion-content class="ion-padding" id="animacao-conteudo">
    <h1 v-if="titulo"> {{ titulo }} </h1>
    <slot />
  </ion-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppCabecalho from "./AppCabecalho.vue";

import { IonTitle, IonContent } from "@ionic/vue";

export default defineComponent({
  props: {
    titulo: {
      type: String,
      default: undefined,
    }
  },
  name: "base-layout",
  components: {
    IonTitle,
    IonContent,
    AppCabecalho,
  },
});
</script>
