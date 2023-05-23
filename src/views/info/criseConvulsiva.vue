<template>
  <ion-page>
    <info-base-layout titulo-pagina="Crise Convulsiva">
      <h1>Crise Convulsiva</h1>
      <p>
        As convulsões podem ser causadas por uma variedade de fatores, incluindo
        epilepsia, lesões cerebrais e febre alta.
      </p>
      <p>
        Se alguém estiver tendo uma crise convulsiva, é importante proteger a
        pessoa de lesões durante o episódio, evitando que ela bata a cabeça em
        superfícies duras ou objetos próximos.
      </p>
      <mensagem-aviso tipo-emergencia="uma pessoa em crise convulsiva" />
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Durante a crise">
          <ol>
            <li>Mantenha a vítima afastada de objetos perigosos.</li>
            <li>Proteja a cabeça da vítima para evitar impactos.</li>
            <li>
              Não tente conter os movimentos da vítima, apenas evite que ela se
              machuque.
            </li>
          </ol>
        </info-accordion>
        <info-accordion titulo-accordion="Após a crise">
          <ol>
            <li>Verifique se as vias aéreas estão desobstruídas.</li>
            <li>Verifique os sinais vitais da vítima.</li>
            <li>Trate quaisquer ferimentos.</li>
            <li>Mantenha a vítima aquecida para evitar hipotermia.</li>
            <li>Mantenha a vítima em uma posição confortável.</li>
          </ol>
        </info-accordion>
      </ion-accordion-group>
      <callout-atencao tituloCallout="Importante">
        Não tente forçar a boca da vítima aberta ou introduzir objetos nela
        durante a crise. Se a vítima perder a consciência e parar de respirar,
        inicie o procedimento para parada cardiorrespiratória. Pode ocorrer
        perda de consciência ou vômito. Após a crise, é fundamental a avaliação
        médica.
      </callout-atencao>
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
