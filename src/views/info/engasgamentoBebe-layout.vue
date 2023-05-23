<template>
  <ion-page>
    <info-base-layout titulo-pagina="Engasgamento (Menor de 01 ano)">
      <h1>Desobstrução de Vias Aéreas em Bebês com Objetos Sólidos</h1>
      <p>
        Se você se deparar com um bebê que está sufocando devido a um objeto
        sólido obstruindo suas vias aéreas, é importante agir rapidamente para
        remover o objeto e permitir que o bebê respire normalmente. Aqui está um
        guia simples que descreve como desobstruir as vias aéreas em bebês com
        objetos sólidos:
      </p>
      <mensagem-aviso
        tipo-emergencia="um bebê que está sufocando devido a um objeto sólido"
      />
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Obstrução parcial das vias aéreas">
          <p>
            Se o bebê estiver tossindo, chorando ou apresentando outros sinais
            de obstrução parcial, não interfira e observe os sinais de obstrução
            total. Fique atento a quaisquer sinais de piora, como dificuldade
            respiratória ou alteração na cor da pele.
          </p>
        </info-accordion>
        <info-accordion titulo-accordion="Obstrução total das vias aéreas">
          <p>
            Se o bebê apresentar sinais de obstrução total, como choro fraco,
            ausência de movimentos respiratórios ou tosse ineficazes, siga os
            seguintes passos:
          </p>
          <ol>
            <li>
              Coloque o bebê de bruços sobre o antebraço, apoiado em sua coxa.
              Incline o corpo do bebê de forma que sua cabeça fique ligeiramente
              abaixo da linha do tórax.
            </li>
            <li>
              Efetue até 5 tapas de expulsão nas costas do bebê, entre as
              escápulas.
            </li>
            <li>
              Na sequência, posicione o bebê de costas no outro braço, também
              inclinado com a cabeça abaixo da linha do tórax
            </li>
            <li>
              Realize até 5 compressões torácicas, com uma frequência aproximada
              de uma compressão por segundo.
            </li>
            <li>
              Repita este ciclo de tapas nas costas e compressões torácicas até
              que o objeto seja expelido ou o bebê se torne inconsciente.
            </li>
          </ol>
        </info-accordion>
        <info-accordion titulo-accordion="Vítima inconsciente com obstrução">
          <p>
            Se o bebê ficar inconsciente, comece a reanimação cardiopulmonar
            (RCP).
          </p>
          <ol>
            <li>
              Coloque a criança deitada de costas em uma superfície rígida e
              plana.
            </li>
            <li>
              Verifique se a criança está respirando, colocando seu rosto
              próximo à boca e nariz da criança e sentindo o movimento do ar.
            </li>
            <li>
              Se a criança não estiver respirando, comece as compressões do
              tórax do bebê. Para isso, posicione os dedos médio e anelar no
              centro do peito, na altura dos mamilos, e pressione para baixo com
              força. A frequência ideal é entre 100 e 120 compressões por
              minuto.
            </li>
            <li>Não interrompa as compressões até que o socorro chegue.</li>
          </ol>
        </info-accordion>
      </ion-accordion-group>
      <callout-atencao tituloCallout="Atenção">
        A Manobra de Heimlich não deve ser feita em bebês. Para obstrução por
        líquido, use tapas nas costas e opte por aspiração mecânica e
        lateralização da vítima. Tome cuidado com a intensidade dos tapas nas
        costas. Cada tentativa de desobstrução deve ser considerada isoladamente
        e interrompida assim que o corpo estranho for expulso ou houver sucesso
        na desobstrução.
      </callout-atencao>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonAccordionGroup, IonPage } from "@ionic/vue";
import { warningSharp } from "ionicons/icons";
import MenuRodape from "../../components/MenuRodape.vue";
import MensagemAviso from "@/components/MensagemAviso.vue";

export default {
  components: {
    IonAccordionGroup,
    IonPage,
  },
};
</script>
