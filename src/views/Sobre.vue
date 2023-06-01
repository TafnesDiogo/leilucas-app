<template>
  <ion-page>
    <base-layout titulo="Sobre o APP">
      <p>
        Bem-vindo à página 'Sobre o APP' do aplicativo Lei Lucas Primeiros
        Socorros! Este aplicativo foi desenvolvido para fornecer informações
        didáticas sobre primeiros socorros, com foco nos funcionários de
        instituições de ensino que tenham feito o curso da Lei Lucas.
        <callout-atencao titulo="Atenção">
          <p>
            Este aplicativo é apenas informativo e não substitui um curso
            preparatório de primeiros socorros.
          </p>
        </callout-atencao>
      </p>
      <h1>Tecnologias utilizadas:</h1>
      <ion-accordion-group expand="inset">
        <info-accordion titulo="Android Studio">
          IDE oficial para desenvolvimento Android, foi utilizada para compilar
          e empacotar o aplicativo Android. Possibilitou a criação de um pacote
          de aplicativo otimizado para Android, garantindo a compatibilidade,
          eficiência e aproveitamento máximo dos recursos do sistema
          operacional.
        </info-accordion>

        <info-accordion titulo="ChatGPT">
          Para a automação de textos e a consulta de código, utilizamos o
          ChatGPT, um poderoso modelo de linguagem desenvolvido pela OpenAI. Com
          ele, pudemos agilizar o processo de desenvolvimento com a análise
          rápida de pequenos problemas de código, além da revisão de
          texto.</info-accordion
        >

        <info-accordion titulo="Figma">
          Para o design da interface do aplicativo, utilizamos a ferramenta de
          design Figma. Com ela, criamos layouts intuitivos e visualmente
          agradáveis, garantindo uma experiência de usuário consistente e
          amigável.</info-accordion
        >

        <info-accordion titulo="Icons8">
          Para os ícones do Menu Principal, foram utilizados ícones
          personalizáveis da plataforma Icons8.
        </info-accordion>

        <info-accordion titulo="Image Creator - Microsoft Bing">
          Para enriquecer o conteúdo visual do aplicativo, utilizamos o serviço
          de Inteligência Artificial da Microsoft Bing, que gera imagens a
          partir de <i>prompts</i>. Assim, pudemos fornecer os ícones e nos
          inspirarmos para a nossa logo, afim de tornar a experiência do usuário
          mais informativa e visualmente atrativa.</info-accordion
        >

        <info-accordion titulo="Ionic + Vue">
          O aplicativo foi desenvolvido utilizando o framework Ionic em conjunto
          com Vue.js, uma poderosa combinação que proporciona uma interface de
          usuário dinâmica e responsiva.</info-accordion
        >

        <info-accordion titulo="Microsoft Azure - Fala">
          Foi utilizado o serviço de fala cognitiva do Microsoft Azure para o
          áudio dos vídeos nos conteúdos disponibilizados no App, o que permitiu
          aprimorar a qualidade e a usabilidade dos vídeos, oferecendo uma
          experiência mais envolvente e inclusiva para os espectadores.
        </info-accordion>

        <info-accordion titulo="VideoScribe">
          Para a criação dos vídeos informativos, utilizamos a ferramenta
          VideoScribe. Com ela, pudemos desenvolver vídeos envolventes, com
          áudio e imagens, para auxiliar na compreensão dos procedimentos de
          primeiros socorros.</info-accordion
        >
      </ion-accordion-group>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonAccordionGroup } from "@ionic/vue";
import InfoAccordion from "@/components/InfoAccordion.vue";
import CalloutAtencao from "@/components/CalloutAtencao.vue";

export default {
  components: {
    IonPage,
    IonAccordionGroup,
    InfoAccordion,
    CalloutAtencao,
  },
};
</script>
