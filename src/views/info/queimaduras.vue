<template>
  <ion-page>
    <info-base-layout titulo-pagina="Queimaduras">
      <h1>Queimaduras</h1>
      <p>
        As queimaduras podem ser causadas por diversos fatores, como fogo,
        líquidos quentes, produtos químicos, entre outros. Elas podem ser
        classificadas em três graus, de acordo com a profundidade da lesão:
        primeiro grau, segundo grau e terceiro grau.
      </p>
      <callout-atencao titulo-callout="Chame o socorro imediatamente">
        Se a queimadura for grave ou se você não tiver certeza do grau da lesão,
        ligue para o serviço de emergência 192 (SAMU) ou 193 (Corpo de
        Bombeiros) e forneça o endereço completo, nome da cidade, rua e número,
        além de qualquer ponto de referência que possa ajudar a localizar o
        local.
      </callout-atencao>
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Primeiros Socorros">
          <ul>
            <li>
              <strong>Resfrie a região afetada:</strong> Lave a queimadura com água
              corrente em temperatura ambiente, por pelo menos 20 minutos. Não
              utilize água quente ou gelada, pois isso pode agravar a lesão. Se
              possível, retire roupas ou objetos que estejam cobrindo a área
              queimada.
            </li>
            <li>
              <strong>Não rompa as bolhas:</strong> As bolhas são uma forma do organismo
              proteger a lesão. Não as estoure ou retire a pele queimada, pois
              isso pode aumentar o risco de infecção e agravar a lesão.
            </li>
            <li>
              <strong>Hidrate o ferimento:</strong> Se tiver à mão, <b>use soro fisiológico</b>
              para hidratar a queimadura. Não coloque nenhuma outra substância,
              como pasta de dente, pó de café ou óleos, pois isso pode
              contaminar a lesão e piorar a situação.
            </li>
            <li>
              <strong>Procure um médico:</strong> Se a queimadura for de segundo ou
              terceiro grau, se a área queimada for grande, se houver dor
              intensa ou se você tiver dúvidas sobre como proceder, procure um
              médico imediatamente. O profissional pode avaliar a gravidade da
              lesão e indicar o tratamento adequado.
            </li>
            <li>
              <strong>Evite cobrir a lesão:</strong> Não cubra a queimadura com tecidos ou
              outros materiais. A área queimada precisa respirar para se
              recuperar adequadamente. Se necessário, o médico pode indicar o
              uso de curativos específicos.
            </li>
          </ul>
        </info-accordion>
      </ion-accordion-group>
      <p style="font-weight: bold; text-align: center">
        Lembre-se de que o tratamento adequado de uma queimadura pode minimizar
        a dor, evitar complicações e prevenir cicatrizes. Em caso de dúvida, não
        hesite em procurar ajuda médica.
      </p>
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
