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
</style>

<template>
  <ion-page>
    <info-base-layout tituloPagina="Engasgamento">
      <h1>Desobstrução de Vias Aéreas em Vítima com Idade Acima de 01 Ano</h1>

      <p>
        A obstrução das vias aéreas é uma emergência médica que pode acontecer a
        qualquer pessoa, e pode ser causada por um corpo estranho, alimentos ou
        vômitos.
      </p>

      <mensagem-aviso
        tipoEmergencia="uma situação de obstrução das vias aéreas"
      />

      <ion-accordion-group expand="inset">
        <info-accordion tituloAccordion="Obstrução parcial das vias aéreas">
          <p>
            Se a vítima consegue tossir, falar ou chorar, não tente interferir.
            Incentive-a a continuar tossindo e fique atento.
          </p>
          <p>
            Caso a obstrução persista, chame ajuda médica e transporte a vítima
            em posição confortável, mantendo-a sob observação constante.
          </p>
        </info-accordion>

        <info-accordion tituloAccordion="Obstrução total das vias aéreas">
          <p>
            Verifique se a vítima está respirando, tossindo, falando ou
            chorando. Se não estiver, chame <b>imediatamente</b> ajuda médica.
          </p>
          <p>Realize a Manobra de Heimlich:</p>
          <ol>
            <li>Posicione-se atrás da vítima</li>
            <li>
              Coloque uma das mãos fechadas, com o polegar para baixo, na região
              intermediária localizada entre o umbigo e a boca do estômago
            </li>
            <li>
              Coloque a outra mão sobre a primeira e aplique compressões
              abdominais para trás e para cima<br />A ideia é pressionar o
              pulmão para que o ar residual interno expulse o objeto
            </li>
            <li>Repita a manobra até a desobstrução total das vias aéreas</li>
          </ol>
          <p>
            Se a vítima perder a consciência, realize a massagem cardíaca É
            importante
            <b>procurar ajuda médica imediatamente após a desobstrução</b>,
            mesmo que a vítima pareça estar bem. Se a vítima for obesa ou
            gestante, as compressões devem ser realizadas na metade inferior do
            tórax.
          </p>
        </info-accordion>

        <info-accordion tituloAccordion="Vítima inconsciente com obstrução">
          <p>
            Coloque a vítima em posição deitada de barriga para cima. Caso a
            vítima continue com obstrução total sem respirar, inicie
            imediatamente as compressões torácicas (massagem cardíaca):
          </p>
          <ol>
            <li>Fique de joelhos ao lado da vítima, na altura dos ombros</li>
            <li>Localize o centro do tórax, entre os mamilos</li>
            <li>
              Posicione os seus braços estendidos, com os dedos entrelaçados,
              colocando uma mão sobre a outra, apoiando-se no centro do tórax
            </li>
            <li>
              Utilize o peso do seu corpo e inicie compressões torácicas de
              forma rápida e forte
            </li>
            <li>
              Entre as compressões, permita o retorno total da parede torácica
            </li>
            <li>
              A manobra deve ser efetuada com frequência entre 100 e 120
              compressões por minuto
            </li>
            <li>Não interrompa a massagem cardíaca até a chegada do socorro</li>
          </ol>
          <p>
            Se a obstrução for removida e/ou a respiração voltar ao normal, siga
            as orientações de cuidados pós-parada cardiorrespiratória.
          </p>
        </info-accordion>
      </ion-accordion-group>
      <p style="font-weight: bold; text-align: center">
        Sempre chame ajuda médica o mais rápido possível.
      </p>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonAccordionGroup, IonPage } from "@ionic/vue";
import { arrowBackOutline } from "ionicons/icons";

export default {
  components: {
    IonAccordionGroup,
    IonPage,
  },
  data() {
    return {
      arrowBackOutline,
    };
  },
};
</script>
