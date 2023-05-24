<template>
  <ion-page>
    <info-base-layout
      titulo-pagina="Sobre o APP"
      pagina-retorno="$router.go(-1)"
    >
      <p>
        Bem-vindo à página 'Sobre o APP' do aplicativo Lei Lucas Primeiros
        Socorros! Este aplicativo foi desenvolvido com o objetivo de promover a
        preparação de profissionais da rede estudantil em primeiros socorros, de
        acordo com a Lei Lucas.
      </p>
      <h1>Tecnologias utilizadas:</h1>
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Ionic + Vue">
          O aplicativo foi desenvolvido utilizando o framework Ionic em conjunto
          com Vue.js, uma poderosa combinação que proporciona uma interface de
          usuário dinâmica e responsiva.</info-accordion
        >

        <info-accordion titulo-accordion="Scribble">
          Para a criação dos vídeos informativos, utilizamos a ferramenta
          Scribble. Com ela, pudemos desenvolver vídeos envolventes, com áudio e
          imagens, para auxiliar na compreensão dos procedimentos de primeiros
          socorros.</info-accordion
        >

        <info-accordion titulo-accordion="Image Creator - Microsoft Bing">
          Para enriquecer o conteúdo visual do aplicativo, utilizamos o serviço
          de Inteligência Artificial da Microsoft Bing, que gera imagens a
          partir de <i>prompts</i>. Assim, pudemos fornecer os ícones e nos
          inspirarmos para a nossa logo, afim de tornar a experiência do usuário
          mais informativa e visualmente atrativa.</info-accordion
        >

        <info-accordion titulo-accordion="ChatGPT">
          Para a automação de textos e a consulta de código, utilizamos o
          ChatGPT, um poderoso modelo de linguagem desenvolvido pela OpenAI. Com
          ele, pudemos gerar textos rapidamente e em português correto, além do
          auxílio resolvendo pequenos problemas de código.</info-accordion
        >

        <info-accordion titulo-accordion="Figma">
          Para o design da interface do aplicativo, utilizamos a ferramenta de
          design Figma. Com ela, criamos layouts intuitivos e visualmente
          agradáveis, garantindo uma experiência de usuário consistente e
          amigável.</info-accordion
        >
      </ion-accordion-group>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonAccordionGroup } from "@ionic/vue";
import InfoAccordion from "@/components/InfoAccordion.vue";

export default {
  components: {
    IonPage,
    IonAccordionGroup,
    InfoAccordion,
  },
};
</script>
