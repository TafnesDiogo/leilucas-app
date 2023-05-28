<style scoped>
ion-accordion .ion-padding p:first-child {
  margin-top: 0;
}

ion-accordion .ion-padding p:last-child {
  margin-bottom: 0;
}

video {
  width: calc(100% + 32px);
  margin-left: -16px;
}

ion-button {
  display: block;
  width: 48px;
  position: fixed;
  z-index: 11;
  top: 4px;
  left: 4px;
  color: var(--ion-color-primary-contrast);
}
</style>

<template>
  <ion-page>
    <base-layout>
      <h1>{{ info.subtitulo }}</h1>

      <div v-if="info.videoUrl">
      <video ref="videoPlayer" controls>
        <source :src="info.videoUrl" type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
    </div>

      <p v-html="info.descricao"></p>

      <p v-if="info.aviso">
        Caso você se depare com {{ info.aviso }} chame ajuda especializada: Se
        há alguém com você, peça para que a pessoa ligue para o serviço de
        emergência (SAMU: 192 ou Corpo de Bombeiros: 193) e forneça o
        <b
          >endereço completo, nome da cidade, rua e número, além de qualquer
          ponto de referência</b
        >
        que possa ajudar a localizar o <b>local</b>.
      </p>

      <callout-atencao
        v-if="info.callout && info.callout.antesDosItens == true"
        :titulo="info.callout.titulo"
        ><div v-html="info.callout.conteudo"/></callout-atencao
      >

      <ion-accordion-group expand="inset">
        <info-accordion
          v-for="item in info.itens"
          :key="item.titulo"
          :titulo="item.titulo"
        >
          <div v-html="item.conteudo" />
        </info-accordion>
      </ion-accordion-group>

      <callout-atencao
        v-if="info.callout && info.callout.antesDosItens != true"
        :titulo="info.callout.titulo"
        ><div v-html="info.callout.conteudo"/></callout-atencao
      >
      <div v-if="info.conteudoAdicional" v-html="info.conteudoAdicional" />
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonAccordionGroup,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import InfoAccordion from "@/components/InfoAccordion.vue";

import videoEngasgamentoBebe from "../assets/videos/engasgamento_bebe.mp4";
import videoEngasgamentoAdulto from "../assets/videos/engasgamento_adulto.mp4";
import videoQueda from "../assets/videos/queda.mp4";
import videoCriseConvulsiva from "../assets/videos/crise_convulsiva.mp4";
import videoHemorragias from "../assets/videos/hemorragia.mp4";
import videoParadaCardiorrespiratoria from "../assets/videos/parada_cardiaca.mp4";
import videoQueimaduras from "../assets/videos/queimadura.mp4";
import videoAnimaisPeconhentos from "../assets/videos/animais_peconhentos.mp4";
import { arrowBackOutline } from "ionicons/icons";

interface InfoItem {
  titulo: string;
  conteudo: string;
}

interface InfoCallout {
  titulo: string;
  conteudo: string;
  antesDosItens?: boolean;
}

interface InfoData {
  titulo: string;
  subtitulo: string;
  descricao: string;
  aviso?: string;
  itens?: InfoItem[];
  callout?: InfoCallout;
  conteudoAdicional?: string;
  videoUrl?: string;
}

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonAccordionGroup,
    IonButton,
    IonIcon,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    info(): InfoData {
      const infos: Record<number, InfoData> = {
        1: {
          titulo: "Engasgamento",
          subtitulo:
            "Desobstrução de Vias Aéreas em Vítima com Idade Acima de 01 Ano",
          descricao:
            "A obstrução das vias aéreas é uma emergência médica que pode acontecer a qualquer pessoa, e pode ser causada por um corpo estranho, alimentos ou vômitos.",
          aviso: "uma situação de obstrução das vias aéreas",
          videoUrl: videoEngasgamentoAdulto,
          itens: [
            {
              titulo: "Obstrução parcial das vias aéreas",
              conteudo: `
                <p>Se a vítima consegue tossir, falar ou chorar, não tente interferir. Incentive-a a continuar tossindo e fique atento.</p>
                <p>Caso a obstrução persista, chame ajuda médica e transporte a vítima em posição confortável, mantendo-a sob observação constante.</p>
              `,
            },
            {
              titulo: "Obstrução total das vias aéreas",
              conteudo: `
                <p>Verifique se a vítima está respirando, tossindo, falando ou chorando. Se não estiver, chame <b>imediatamente</b> ajuda médica.</p>
                <p>Realize a Manobra de Heimlich:</p>
                <ol>
                  <li>Posicione-se atrás da vítima</li>
                  <li>Coloque uma das mãos fechadas, com o polegar para baixo, na região intermediária localizada entre o umbigo e a boca do estômago</li>
                  <li>Coloque a outra mão sobre a primeira e aplique compressões abdominais para trás e para cima<br />A ideia é pressionar o pulmão para que o ar residual interno expulse o objeto</li>
                  <li>Repita a manobra até a desobstrução total das vias aéreas</li>
                </ol>
                <p>Se a vítima perder a consciência, realize a massagem cardíaca. É importante procurar ajuda médica imediatamente após a desobstrução, mesmo que a vítima pareça estar bem. Se a vítima for obesa ou gestante, as compressões devem ser realizadas na metade inferior do tórax.</p>
              `,
            },
            {
              titulo: "Vítima inconsciente com obstrução",
              conteudo: `
                <p>Coloque a vítima em posição deitada de barriga para cima. Caso a vítima continue com obstrução total sem respirar, inicie imediatamente as compressões torácicas (massagem cardíaca):</p>
                <ol>
                  <li>Fique de joelhos ao lado da vítima, na altura dos ombros</li>
                  <li>Localize o centro do tórax, entre os mamilos</li>
                  <li>Posicione os seus braços estendidos, com os dedos entrelaçados, colocando uma mão sobre a outra, apoiando-se no centro do tórax</li>
                  <li>Utilize o peso do seu corpo e inicie compressões torácicas de forma rápida e forte</li>
                  <li>Entre as compressões, permita o retorno total da parede torácica</li>
                  <li>A manobra deve ser efetuada com frequência entre 100 e 120 compressões por minuto</li>
                  <li>Não interrompa a massagem cardíaca até a chegada do socorro</li>
                </ol>
                <p>Se a obstrução for removida e/ou a respiração voltar ao normal, siga as orientações de cuidados pós-parada cardiorrespiratória.</p>
              `,
            },
          ],
          conteudoAdicional: `
          <p style="font-weight: bold; text-align: center">
          Sempre chame ajuda médica o mais rápido possível.
          </p>`,
        },
        2: {
          titulo: "Engasgamento (Menor de 01 ano)",
          subtitulo: "Desobstrução de Vias Aéreas em Bebês com Objetos Sólidos",
          descricao: `Se você se deparar com um bebê que está sufocando devido a um objeto
        sólido obstruindo suas vias aéreas, é importante agir rapidamente para
        remover o objeto e permitir que o bebê respire normalmente. Aqui está um
        guia simples que descreve como desobstruir as vias aéreas em bebês com
        objetos sólidos:`,
          aviso: "um bebê que está sufocando devido a um objeto sólido",
          videoUrl: videoEngasgamentoBebe,
          itens: [
            {
              titulo: "Obstrução parcial das vias aéreas",
              conteudo: `
              <p>
            Se o bebê estiver tossindo, chorando ou apresentando outros sinais
            de obstrução parcial, não interfira e observe os sinais de obstrução
            total. Fique atento a quaisquer sinais de piora, como dificuldade
            respiratória ou alteração na cor da pele.
            </p>`,
            },
            {
              titulo: "Obstrução total das vias aéreas",
              conteudo: `
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
          </ol>`,
            },
            {
              titulo: "Vítima inconsciente com obstrução",
              conteudo: `
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
          </ol>`,
            },
          ],
          callout: {
            titulo: "Atenção",
            conteudo: `A Manobra de Heimlich não deve ser feita em bebês. Para obstrução por
        líquido, use tapas nas costas e opte por aspiração mecânica e
        lateralização da vítima. Tome cuidado com a intensidade dos tapas nas
        costas. Cada tentativa de desobstrução deve ser considerada isoladamente
        e interrompida assim que o corpo estranho for expulso ou houver sucesso
        na desobstrução.`,
          },
        },
        3: {
          titulo: "Queda com Traumas",
          subtitulo: "Primeiros Socorros para Quedas com Traumas",
          descricao: `Antes de tudo, verifique se a pessoa está respirando e se há qualquer
            sangramento que possa ameaçar a vida. Se houver um ferimento visível,
            remova qualquer acessório da pessoa, como pulseiras ou anéis, para
            evitar a pressão excessiva na área.`,
          videoUrl: videoQueda,
          aviso: "uma vítima de queda com trauma",
          itens: [
            {
              titulo: "O que fazer",
              conteudo: `
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
              seja agravada durante o transporte da vítima até o hospital. O
              próximo item fala sobre imobilização.
            </li>
          </ol>`,
            },
            {
              titulo: "Imobilização",
              conteudo: `
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
          </p>`,
            },
            {
              titulo: "Observações Gerais",
              conteudo: `
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
          </p>`,
            },
          ],
          callout: {
            titulo: "Atenção",
            conteudo: `
                Lembre-se de que a imobilização é uma técnica de emergência e deve ser
                feita apenas por profissionais capacitados. Em caso de dúvidas ou lesões
                graves, chame imediatamente o serviço de emergência ou vá ao hospital
                mais próximo.`,
          },
        },
        4: {
          titulo: "Crise Convulsiva",
          subtitulo: "Crise Convulsiva",
          descricao: `
                As convulsões podem ser causadas por uma variedade de fatores, incluindo
                epilepsia, lesões cerebrais e febre alta.
            </p>
            <p>
                Se alguém estiver tendo uma crise convulsiva, é importante proteger a
                pessoa de lesões durante o episódio, evitando que ela bata a cabeça em
                superfícies duras ou objetos próximos.`,
          videoUrl: videoCriseConvulsiva,
          aviso: "uma pessoa em crise convulsiva",
          itens: [
            {
              titulo: "Durante a crise",
              conteudo: `
                <ol>
                    <li>Mantenha a vítima afastada de objetos perigosos.</li>
                    <li>Proteja a cabeça da vítima para evitar impactos.</li>
                    <li>
                    Não tente conter os movimentos da vítima, apenas evite que ela se
                    machuque.
                    </li>
                </ol>`,
            },
            {
              titulo: "Após a crise",
              conteudo: `
                <ol>
                    <li>Verifique se as vias aéreas estão desobstruídas.</li>
                    <li>Verifique os sinais vitais da vítima.</li>
                    <li>Trate quaisquer ferimentos.</li>
                    <li>Mantenha a vítima aquecida para evitar hipotermia.</li>
                    <li>Mantenha a vítima em uma posição confortável.</li>
                </ol>`,
            },
          ],
          callout: {
            titulo: "Importante",
            conteudo: `
                Não tente forçar a boca da vítima aberta ou introduzir objetos nela
                durante a crise. Se a vítima perder a consciência e parar de respirar,
                inicie o procedimento para parada cardiorrespiratória. Pode ocorrer
                perda de consciência ou vômito. Após a crise, é fundamental a avaliação
                médica.`,
          },
        },
        5: {
          titulo: "Hemorragias",
          subtitulo: "Hemorragias",
          descricao: `As hemorragias são perdas de sangue que podem ocorrer interna ou
        externamente. As hemorragias externas são aquelas em que o sangue flui
        para fora do corpo, geralmente devido a lesões na pele, como cortes,
        lacerações ou perfurações. Já as hemorragias internas são aquelas em que
        o sangue é perdido dentro do corpo, geralmente devido a lesões nos
        órgãos internos, como pulmões, fígado ou baço, ou em vasos sanguíneos.
        As hemorragias internas podem ser mais difíceis de detectar do que as
        hemorragias externas e podem levar a complicações graves se não forem
        tratadas rapidamente.`,
          videoUrl: videoHemorragias,
          aviso: "uma pessoa com hemorragia",
          itens: [
            {
              titulo: "Tratamento",
              conteudo: `
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
                </ol>`,
            },
            {
              titulo: "Hemorragia Interna",
              conteudo: `
                <p>
                    Para reconhecer uma hemorragia interna, verifica se a vítima
                    apresenta:
                </p>
                <ul>
                    <li>Hematomas ou contusões na pele</li>
                    <li>Dores, rigidez, flacidez, hematomas no abdome</li>
                    <li>Vômito ou tosse com sangue</li>
                    <li>Fezes escuras ou com sangue vermelho vivo</li>
                </ul>`,
            },
          ],
        },
        6: {
          titulo: "Parada Cardiorrespiratória",
          subtitulo: "Parada Cardiorrespiratória",
          descricao: `
            A parada cardiorrespiratória ocorre quando não há batimentos cardíacos e
            respiração, e é uma das principais causas de morte no mundo. A maioria
            dos casos ocorre em domicílios.
            </p>
            <p>
            Se você se deparar com uma pessoa que não está respirando ou está tendo
            dificuldades para respirar, é importante agir rápido para ajudar a
            salvar a vida dela.`,
          videoUrl: videoParadaCardiorrespiratoria,
          itens: [
            {
              titulo: "Massagem Cardiorrespiratória",
              conteudo: `
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
                </ol>`,
            },
          ],
          callout: {
            titulo: "Ligue imediatamente para o serviço de emergência",
            conteudo: `
                Ligue imediatamente para o serviço de emergência através dos telefones
                192 (SAMU) ou 193 (Corpo de Bombeiros) e
                <b>forneça o endereço completo, nome da cidade, rua e número</b>, além
                de <b>qualquer ponto de referência</b> que possa ajudar a localizar o
                local.`,
            antesDosItens: true,
          },
        },
        7: {
          titulo: "Queimaduras",
          subtitulo: "Queimaduras",
          videoUrl: videoQueimaduras,
          descricao: `
            As queimaduras podem ser causadas por diversos fatores, como fogo,
            líquidos quentes, produtos químicos, entre outros. Elas podem ser
            classificadas em três graus, de acordo com a profundidade da lesão:
            primeiro grau, segundo grau e terceiro grau.`,
          itens: [
            {
              titulo: "Primeiros Socorros",
              conteudo: `
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
                    </li>`,
            },
          ],
          callout: {
            titulo: "Chame o socorro imediatamente",
            conteudo: `
                Se a queimadura for grave ou se você não tiver certeza do grau da lesão,
                ligue para o serviço de emergência 192 (SAMU) ou 193 (Corpo de
                Bombeiros) e forneça o endereço completo, nome da cidade, rua e número,
                além de qualquer ponto de referência que possa ajudar a localizar o
                local.`,
            antesDosItens: true,
          },
          conteudoAdicional: `
            <p style="font-weight: bold; text-align: center">
                Lembre-se de que o tratamento adequado de uma queimadura pode minimizar
                a dor, evitar complicações e prevenir cicatrizes. Em caso de dúvida, não
                hesite em procurar ajuda médica.
            </p>`,
        },
        8: {
          titulo: "Animais Peçonhentos",
          subtitulo: "Acidentes causados por animais peçonhentos",
          descricao: `
        Os animais peçonhentos, como cobras, aranhas, escorpiões e insetos
        venenosos, podem causar graves acidentes. É importante saber como agir
        em caso de picada ou mordida para minimizar os efeitos do veneno e
        buscar ajuda médica o mais rápido possível.`,
          videoUrl: videoAnimaisPeconhentos,
          aviso: "vítima de picada de animais peçonhentos",
          itens: [
            {
              titulo: "Procedimentos a seguir",
              conteudo: `
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
                </ol>`,
            },
            {
              titulo: "Orientações Adicionais",
              conteudo: `
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
                </ul>`,
            },
          ],
        },
        9: {
          titulo: "Ligar para Emergência",
          subtitulo: "Como Ligar para Emergência",
          descricao:
            `Antes de tudo, mantenha a calma. Se você precisar entrar em contato com o
            atendimento de emergência, clique no símbolo do rodapé.`,
          itens: [
            {
              titulo: 'Antes de tudo',
              conteudo: `
              <p>Há uma série de informações que você precisa ter em mãos antes de iniciar seu
              contato com o atendimento de emergência.</p>
              <ul>
                <li>
                  <b>Sua localização:</b> endereço completo e ponto de referência. <br />Caso
                  não saiba, procure algum morador, placas ou localize-se por um aplicativo de
                  GPS, como o Google Maps.
                </li>
                <li>
                  <b>O que está acontecendo com a vítima:</b> importante informar com clareza
                  e calma o que aconteceu, para que os atendentes possam agilizar o
                  atendimento e te orientar sobre as atitudes que podem ser tomadas no local.
                </li>
                <li><b>Mantenha a calma:</b> o atendente que vai te atender quer te ajudar, mas
                  para que o atendimento seja efetivo, ele também precisa da sua cooperação. 
                  Lembre-se que o profissional em socorro está do outro lado da linha. Portanto, 
                  responda as perguntas que lhe forem feitas com calma e clareza, faça o que lhe 
                  for orientado. Sua atitude pode salvar vidas! Ajude os profissionais de segurança
                  pública a te ajudarem.</li>
                <li><b>Para quem ligar:</b> no Brasil, temos dois números de atendimento disponíveis
                  para contato: 192 (SAMU) e 193 (Corpo de Bombeiros). O atendimento realizado por
                  estes órgãos são diferentes, e o contato com o correto irá agilizar no socorro da 
                  vítima.</li>
                </ul>`,
            },
            {
              titulo: 'SAMU (192)',
              conteudo: `
              <p>A SAMU possui equipe composta por médicos, enfermeiros auxiliares de enfermagem e
              condutores socorristas, e realiza atendimento de <b>casos clínicos</b>,
              como:</p>
              <ul>
                <li>Problemas cardio-respiratórios</li>
                <li>Intoxicação e envenenamento</li>
                <li>Trabalhos de parto com risco de morte da mãe ou do feto</li>
                <li>Acidente vascular cerebral (AVC)</li>
                <li>Crises convulsivas</li>
                <li>Dor no peito de aparecimento súbito</li>
                <li>Desmaio</li>
                <li>Entre outros</li>
              </ul>`,
            },
            {
              titulo: 'Corpo de Bombeiros (193)',
              conteudo: `
              <p>O Corpo de Bombeiros realiza atendimentos
              em literalmente qualquer lugar. Seus profissionais são treinados para o
              resgate rápido, seja em modalidade aéreo, térreo ou aquático. Possuem
              equipamentos específicos para socorro de acidentes de trânsito com vítimas
              presas nas ferragens. Atendem ocorrências de:</p>
              <ul>
                <li>Incêndios em residências, empresas, estruturas e em vegetação.</li>
                <li>Acidentes de trânsito com vítimas.</li>
                <li>Afogamentos.</li>
                <li>
                  Acidentes domésticos (queimaduras, intoxicação, explosões e ferimentos em
                  geral).
                </li>
                <li>Quedas de plano elevado ou de mesmo nível que resultem em lesões.</li>
                <li>Busca de pessoas.</li>
                <li>Salvamento em ambientes hostis.</li>
                <li>Lesões provenientes de agressão e ataques de animais.</li>
                <li>Ferimentos por arma de fogo e objetos cortantes/perfurantes.</li>
                <li>Emergências com produtos perigosos e combustíveis.</li>
                <li>Desabamentos, soterramentos e deslizamentos.</li>
                <li>
                  Emergências resultantes de vendavais, enchentes, temporais e chuvas de
                  granizo.
                </li>
              </ul>`,
            },
          ]
        },
      };

      return infos[this.id] || ({} as InfoData);
    },
  },
  setup() {
    return { arrowBackOutline };
  },
});
</script>
