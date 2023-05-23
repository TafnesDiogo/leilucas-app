<template>
  <ion-page>
    <info-base-layout titulo-pagina="Hemorragias">
      <h1>Hemorragias</h1>
      <p>
        As hemorragias são perdas de sangue que podem ocorrer interna ou
        externamente. As hemorragias externas são aquelas em que o sangue flui
        para fora do corpo, geralmente devido a lesões na pele, como cortes,
        lacerações ou perfurações. Já as hemorragias internas são aquelas em que
        o sangue é perdido dentro do corpo, geralmente devido a lesões nos
        órgãos internos, como pulmões, fígado ou baço, ou em vasos sanguíneos.
        As hemorragias internas podem ser mais difíceis de detectar do que as
        hemorragias externas e podem levar a complicações graves se não forem
        tratadas rapidamente.
      </p>
      <mensagem-aviso tipo-emergencia="uma pessoa com hemorragia" />
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Tratamento">
          <ol>
            <li>
              Encontre o ferimento e exponha a área afetada.
            </li>
            <li>
              Pressione firmemente sobre o ferimento até que o sangramento pare.
            </li>
            <li>Coloque uma compressa e use uma bandagem para fixá-la no local.</li>
            <li>Eleve o membro com hemorragia.</li>
            <li>Identifique os sinais de hemorragia interna, com base no mecanismo de trauma e na condição da pessoa.</li>
            <li>Solte as roupas da pessoa e evite a hipotermia.</li>
          </ol>
        </info-accordion>
        <info-accordion titulo-accordion="Hemorragia Interna">
          <p>
            Para reconhecer uma hemorragia interna, verifica se a vítima
            apresenta:
          </p>
          <ul>
            <li>Hematomas ou contusões na pele</li>
            <li>Dores, rigidez, flacidez, hematomas no abdome</li>
            <li>Vômito ou tosse com sangue</li>
            <li>Fezes escuras ou com sangue vermelho vivo</li>
          </ul>
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
