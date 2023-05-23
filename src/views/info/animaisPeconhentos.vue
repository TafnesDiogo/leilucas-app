<template>
  <ion-page>
    <info-base-layout titulo-pagina="Animais Peçonhentos">
      <h1>Acidentes causados por animais peçonhentos</h1>
      <p>
        Os animais peçonhentos, como cobras, aranhas, escorpiões e insetos
        venenosos, podem causar graves acidentes. É importante saber como agir
        em caso de picada ou mordida para minimizar os efeitos do veneno e
        buscar ajuda médica o mais rápido possível.
      </p>
      <mensagem-aviso
        tipo-emergencia="vítima de picada de animais peçonhentos"
      />
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Procedimentos a seguir">
          <ol>
            <li>
              Mantenha a vítima em repouso absoluto, sem deixá-la locomover-se.
              Isso ajuda a prevenir a disseminação do veneno pelo corpo.
            </li>
            <li>
              Remova anéis, pulseiras, braceletes e outros adornos da região
              afetada.
            </li>
            <li>
              Lave o local da picada ou mordida com água e sabão, para reduzir a
              possibilidade de infecções.
            </li>
            <li>
              Proteja o local da lesão fazendo um curativo com gaze seca, para
              evitar que sujeira e bactérias entrem na ferida.
            </li>
            <li>
              Procure identificar o animal que causou a picada ou mordida, desde
              que feito com segurança e sem comprometer ou retardar o transporte
              da vítima.
            </li>
            <li>
              Transporte o animal com segurança também ao hospital, em
              recipiente adequado, para que possa ser identificado por
              especialistas.
            </li>
          </ol>
        </info-accordion>
        <info-accordion titulo-accordion="Orientações Adicionais">
          <ul>
            <li>
              Se possível, busque atendimento em um serviço especializado em
              soroterapia, como o Instituto Butantan.
            </li>
            <li>
              Não garrotear nem fazer torniquete no local da picada ou mordida,
              pois isso pode piorar a circulação sanguínea e agravar o quadro.
            </li>
            <li>
              Caso não consiga identificar o animal, trate a picada ou mordida
              como se fosse venenosa.
            </li>
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
