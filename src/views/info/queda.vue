<template>
  <ion-page>
    <info-base-layout tituloPagina="Queda com Traumas">
      <h1>Primeiros Socorros para Quedas com Traumas</h1>
      <mensagem-aviso tipo-emergencia="uma vítima de queda com trauma" />
      <p>
        Antes de tudo, verifique se a pessoa está respirando e se há qualquer
        sangramento que possa ameaçar a vida. Se houver um ferimento visível,
        remova qualquer acessório da pessoa, como pulseiras ou anéis, para
        evitar a pressão excessiva na área.
      </p>
      <ion-accordion-group expand="inset">
        <info-accordion tituloAccordion="O que fazer">
          <ol>
            <li>
              Cubra o ferimento com gaze estéril, atadura ou bandagem
              triangular. Isso ajudará a proteger a área e reduzir o risco de
              infecção.
            </li>
            <li>
              Verifique se há sangramento ou líquido saindo pelos ouvidos ou
              pelo nariz e não tente bloqueá-lo. Cubra com gaze estéril.
            </li>
            <li>
              Não tente empurrar um osso exposto de volta para dentro. Isso pode
              causar mais danos.
            </li>
            <li>
              Verifique se a pessoa ainda tem movimento e sensibilidade no
              membro afetado. Verifique também se há pulso e se a cor da pele é
              normal.
            </li>
            <li>
              A imobilização é uma técnica utilizada para evitar que uma lesão
              seja agravada durante o transporte da vítima até o hospital. Para
              fazer uma imobilização, você deve seguir os seguintes passos:
            </li>
          </ol>
        </info-accordion>
        <info-accordion tituloAccordion="Imobilização">
          <p>
            Use uma tala, como uma tábua ou um pedaço de madeira, para
            imobilizar a região lesionada. A tala deve ser colocada na parte
            superior e inferior da área afetada. Envolva a tala com um pano ou
            atadura para mantê-la no lugar.
          </p>
          <p>
            Verificar a circulação sanguínea: após imobilizar a área lesionada,
            verifique se a circulação sanguínea está ocorrendo normalmente. Isso
            pode ser feito verificando a temperatura, a sensibilidade, a cor e o
            pulso na região afetada.
          </p>
        </info-accordion>
        <info-accordion tituloAccordion="Observações Gerais">
          <p>
            Se houver dúvida sobre a existência de uma fratura, sempre imobilize
            a área afetada.
          </p>
          <p>
            Não tente realinhar um membro fraturado. Em vez disso, imobilize-o
            na posição encontrada.
          </p>
          <p>
            Em caso de trauma craniano, considere que a pessoa também pode ter
            sofrido uma lesão na coluna vertebral e evite manobras que possam
            agravar a situação.
          </p>
        </info-accordion>
      </ion-accordion-group>
      <callout-atencao tituloCallout="Atenção">
        Lembre-se de que a imobilização é uma técnica de emergência e deve ser
        feita apenas por profissionais capacitados. Em caso de dúvidas ou lesões
        graves, chame imediatamente o serviço de emergência ou vá ao hospital
        mais próximo.
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
  }
};
</script>
