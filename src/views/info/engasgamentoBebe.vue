<style>
p,
h1,
h2,
h3,
h4,
h5 {
  padding: 0 16px;
}

p,
li {
  line-height: 1.5em;
}

ion-card-header + .card-content-md {
  padding-top: 0;
  margin: 0 20px 8px;
  text-align: justify;
  letter-spacing: -0.025em;
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Engasgamento (Menor de 01 ano)</ion-title>
      </ion-toolbar>
    </ion-header>
    <h1>Desobstrução de Vias Aéreas em Bebês com Objetos Sólidos</h1>
    <p>
      Se você se deparar com um bebê que está sufocando devido a um objeto
      sólido obstruindo suas vias aéreas, é importante agir rapidamente para
      remover o objeto e permitir que o bebê respire normalmente. Aqui está um
      guia simples que descreve como desobstruir as vias aéreas em bebês com
      objetos sólidos:
    </p>
    <!--
      <p>
        Caso você se depare com um bebê que está sufocando devido a um objeto
        sólido chame ajuda especializada: Se há alguém com você, peça para que a
        pessoa ligue para o serviço de emergência (SAMU: 192 ou Corpo de
        Bombeiros: 193) e forneça o
        <b
          >endereço completo, nome da cidade, rua e número, além de qualquer
          ponto de referência</b
        >
        que possa ajudar a localizar o <b>local</b>.
      </p>-->
    <mensagem-aviso
      tipo-emergencia="um bebê que está sufocando devido a um objeto sólido"
    />
    <h2>Obstrução parcial das vias aéreas:</h2>
    <p>
      Se o bebê estiver tossindo, chorando ou apresentando outros sinais de
      obstrução parcial, não interfira e observe os sinais de obstrução total.
      Fique atento a quaisquer sinais de piora, como dificuldade respiratória ou
      alteração na cor da pele.
    </p>
    <h2>Obstrução total das vias aéreas:</h2>
    <p>
      Se o bebê apresentar sinais de obstrução total, como choro fraco, ausência
      de movimentos respiratórios ou tosse ineficazes, siga os seguintes passos:
    </p>
    <ol>
      <li>
        Coloque o bebê de bruços sobre o antebraço, apoiado em sua coxa. Incline
        o corpo do bebê de forma que sua cabeça fique ligeiramente abaixo da
        linha do tórax.
      </li>
      <li>
        Efetue até 5 tapas de expulsão nas costas do bebê, entre as escápulas.
        Na sequência, posicione o bebê de costas no outro braço, também
        inclinado com a cabeça abaixo da linha do tórax, e realize até 5
        compressões torácicas, com uma frequência aproximada de uma compressão
        por segundo.
      </li>
      <li>
        Repita este ciclo de tapas nas costas e compressões torácicas até que o
        objeto seja expelido ou o bebê se torne inconsciente.
      </li>
    </ol>
    <h2>Vítima inconsciente com obstrução:</h2>
    <p>
      Se o bebê ficar inconsciente, comece a reanimação cardiopulmonar (RCP).
    </p>
    <ol>
      <li>
        Coloque a criança deitada de costas em uma superfície rígida e plana.
      </li>
      <li>
        Verifique se a criança está respirando, colocando seu rosto próximo à
        boca e nariz da criança e sentindo o movimento do ar.
      </li>
      <li>
        Se a criança não estiver respirando, comece as compressões do tórax do
        bebê. Para isso, posicione os dedos médio e anelar no centro do peito,
        na altura dos mamilos, e pressione para baixo com força. A frequência
        ideal é entre 100 e 120 compressões por minuto.
      </li>
      <li>Não interrompa as compressões até que o socorro chegue.</li>
    </ol>
    <callout-atencao titulo-callout="Atenção">
      A Manobra de Heimlich não deve ser feita em bebês. Para obstrução por
      líquido, use tapas nas costas e opte por aspiração mecânica e
      lateralização da vítima. Tome cuidado com a intensidade dos tapas nas
      costas. Cada tentativa de desobstrução deve ser considerada isoladamente e
      interrompida assim que o corpo estranho for expulso ou houver sucesso na
      desobstrução.
    </callout-atencao>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import { warningSharp } from "ionicons/icons";
import MenuRodape from "../../components/MenuRodape.vue";
import MensagemAviso from "@/components/MensagemAviso.vue";

export default {
  components: {
    IonPage,
  },
  setup() {
    return { warningSharp };
  },
};
</script>
