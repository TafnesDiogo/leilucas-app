<template>
  <ion-page>
    <info-base-layout titulo-pagina="Hemorragias">
      <h1>Hemorragias</h1>
      <p>As hemorragias são perdas de sangue que podem ocorrer interna ou externamente. As hemorragias externas são aquelas em que o sangue flui para fora do corpo, geralmente devido a lesões na pele, como cortes, lacerações ou perfurações. Já as hemorragias internas são aquelas em que o sangue é perdido dentro do corpo, geralmente devido a lesões nos órgãos internos, como pulmões, fígado ou baço, ou em vasos sanguíneos. As hemorragias internas podem ser mais difíceis de detectar do que as hemorragias externas e podem levar a complicações graves se não forem tratadas rapidamente.</p>
      <mensagem-aviso tipo-emergencia="uma pessoa com hemorragia" />
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="titulo1">
          <p>Info</p>
        </info-accordion>
        <info-accordion titulo-accordion="titulo2">
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
