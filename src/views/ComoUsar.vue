<template>
  <ion-page>
    <info-base-layout titulo-pagina="Como Usar" pagina-retorno="router.go(Inicio)">
      <p>
        Bem-vindo à página 'Como usar' do nosso aplicativo Lei Lucas Primeiros
        Socorros! Aqui, forneceremos algumas orientações para ajudar você a
        aproveitar ao máximo as funcionalidades e recursos disponíveis
      </p>
      <ion-accordion-group expand="inset">
        <info-accordion titulo-accordion="Menu Principal">
          <h2>Conteúdo</h2>
          <p>
            Toque no botão 'Conteúdo' para acessar informações escritas e
            descritivas sobre primeiros socorros. Basta selecionar o tópico
            desejado para saber mais sobre o procedimento específico.
          </p>
          <h2>Vídeos</h2>
          <p>
            Ao clicar em 'Vídeos', você terá acesso a diferentes temas
            relacionados aos primeiros socorros. Basta selecionar o tema de
            interesse para assistir aos vídeos informativos com áudio e imagens.
          </p>
          <h2>Lei Lucas</h2>
          <p>
            Toque no botão 'Lei Lucas' para acessar diretamente a lei que
            regulamenta a obrigatoriedade da capacitação em noções básicas de
            primeiros socorros de professores e funcionários de estabelecimentos
            de ensino e espaços de recreação infantil.
          </p>
          <h2>Créditos</h2>
          <p>
            Ao clicar em 'Créditos', você encontrará informações detalhadas
            sobre a aplicação, como a disciplina, professores e colaboradores.
          </p>
        </info-accordion>
        <info-accordion titulo-accordion="Barra de Navegação Inferior">
          <h2>Emergência</h2>
          <p>
            Emergência é o botão do meio, em tamanho destacado. Em situações de
            emergência, toque no botão 'Emergência' para obter acesso rápido a
            números de emergência ou a instruções sobre o que fazer.
            Certifique-se de ligar para os serviços de emergência adequados, se
            necessário.
          </p>
          <h2>Sobre o APP</h2>
          <p>
            No botão 'Sobre o APP', você encontrará informações detalhadas sobre
            a aplicação, as linguagens, plataformas e softwares utilizados no seu
            desenvolvimento.
          </p>
        </info-accordion>
      </ion-accordion-group>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import InfoAccordion from "@/components/InfoAccordion.vue";

export default {
  components: {
    IonPage,
    InfoAccordion,
  },
};
</script>
