<template>
  <ion-page>
    <info-base-layout tituloPagina="titulo">
      <h1>titulo</h1>
      <p>texto</p>
      <ion-accordion-group expand="inset">
        <info-accordion tituloAccordion="titulo1">
          <p>Info</p>
        </info-accordion>
        <info-accordion tituloAccordion="titulo2">
          <p>Info</p>
        </info-accordion>
      </ion-accordion-group>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonAccordionGroup, IonPage } from "@ionic/vue";

export default {
  components: {
    IonAccordionGroup,
    IonPage,
  },
};
</script>
