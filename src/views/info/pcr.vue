<template>
  <ion-page>
    <info-base-layout titulo-pagina="Parada Cardiorrespiratória">
      <h1>Parada Cardiorrespiratória</h1>
      <p>
        A parada cardiorrespiratória ocorre quando não há batimentos cardíacos e
        respiração, e é uma das principais causas de morte no mundo. A maioria
        dos casos ocorre em domicílios.
      </p>
      <p>
        Se você se deparar com uma pessoa que não está respirando ou está tendo
        dificuldades para respirar, é importante agir rápido para ajudar a
        salvar a vida dela.
      </p>
      <callout-atencao
        titulo-callout="Ligue imediatamente para o serviço de emergência"
      >
        Ligue imediatamente para o serviço de emergência através dos telefones
        192 (SAMU) ou 193 (Corpo de Bombeiros) e
        <b>forneça o endereço completo, nome da cidade, rua e número</b>, além
        de <b>qualquer ponto de referência</b> que possa ajudar a localizar o
        local.
      </callout-atencao>
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Massagem Cardiorrespiratória">
          <ol>
            <li>
              Verifique se a pessoa está respirando, olhando e ouvindo por
              movimentos ou sons no tórax. Se não houver respiração, coloque a
              pessoa deitada de costas em uma superfície dura e plana.
            </li>
            <li>
              Ajoelhe-se ao lado da pessoa, na altura dos ombros, e coloque as
              mãos no centro do tórax, entre os mamilos, uma mão sobre a outra e
              com os dedos entrelaçados.
            </li>
            <li>
              Use o peso do seu corpo para pressionar o tórax da pessoa com
              compressões rápidas e fortes.
            </li>
            <li>
              Permita que o tórax volte à posição normal após cada compressão.
            </li>
            <li>
              Continue fazendo as compressões a uma frequência de 100 a 120
              vezes por minuto, sem interromper até que o socorro chegue.
            </li>
          </ol>
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
