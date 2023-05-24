<style scoped>
img {
  margin: -16px;
  width: calc(110% + 32px);
  max-width: -webkit-fill-available;
}
</style>

<template>
  <ion-page>
    <info-base-layout titulo-pagina="Créditos">
      <img
        src="https://unisagrado.edu.br/uploads/2008/logotipos/unisagrado/png/unisagrado-transparente-cor.png"
        alt="Logo UNISAGRADO"
      />
      <h1>Desenvolvimento</h1>
      <img
        src="https://unisagrado.edu.br/uploads/2008/logotipos/monoliticas_unisagrado/Ciencia_da_Computacao.jpg"
        alt="UNISAGRADO: Curso de Ciência da Computação"
      />

      <h1>Apoio</h1>
      <img
        src="https://unisagrado.edu.br/uploads/2008/institucional/logotipo/monolitica-pastoral-nova.jpg"
        alt="UNISAGRADO: Pró-Reitoria de Extensão e Pastoral Universitária"
      />

      <p>
        A equipe por trás do aplicativo Lei Lucas Primeiros Socorros se orgulha
        de apresentar os talentosos indivíduos que contribuíram para o
        desenvolvimento e sucesso deste projeto. Gostaríamos de expressar nossa
        gratidão a todos os envolvidos, desde os desenvolvedores e designers até
        os professores e colaboradores, que dedicaram seu tempo e conhecimento
        para tornar este aplicativo uma realidade.
      </p>

      <h1>Equipe de Desenvolvimento</h1>

      <h1>Design e Interface</h1>
      <p>
        Éder Fabiano da Silva: Utilizou a ferramenta Figma para criar layouts
        visualmente atraentes e intuitivos, aliado ao uso do Image Creator para
        inspiração e criação de pacotes de ícones personalizados.
      </p>

      <h1>Professores e Colaboradores</h1>
      <p>
        Prof. Dr. Élvio Gilberto da Silva: Professor da disciplina de
        Desenvolvimento de Software, no UNISAGRADO, orientador do Projeto.
      </p>
      <p>
        Prof. Dra. Marcia Aparecida Nuevo Gatti: Especialista em primeiros
        socorros, orientou a equipe na criação do conteúdo descritivo e
        verificou a precisão das informações fornecidas.
      </p>
    </info-base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonImg } from "@ionic/vue";
import InfoBaseLayout from "@/components/InfoBaseLayout.vue";

export default {
  components: {
    IonPage,
    IonImg,
    InfoBaseLayout,
  },
};
</script>
