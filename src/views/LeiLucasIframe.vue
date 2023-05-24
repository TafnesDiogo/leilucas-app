<style scoped>
iframe {
  width: 100vw;
  height: 100vh;
  border: 0 none inherit;
}
</style>

<template>
  <ion-page>
    <info-base-layout titulo-pagina="Lei Lucas">
      <iframe src="http://www.planalto.gov.br/ccivil_03/LEIS/2002/L10406.htm" />
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import InfoBaseLayout from "@/components/InfoBaseLayout.vue";

export default {
  components: {
    IonPage,
    InfoBaseLayout,
  },
};
</script>
