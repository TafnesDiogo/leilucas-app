<style scoped>
img {
  margin: -16px;
  width: calc(110% + 32px);
  max-width: -webkit-fill-available;
}
p,
h1 {
  text-align: center;
}

p {
  margin: 0;
}

p:last-child {
  padding-bottom: 25px;
}
</style>

<template>
  <ion-page>
    <base-layout titulo="Créditos">
      <img :src="logoUSC" alt="Logo UNISAGRADO" />
      <h1>Desenvolvimento</h1>
      <img :src="logoCurso" alt="UNISAGRADO: Curso de Ciência da Computação" />

      <h1>Apoio</h1>
      <img
        :src="logoReitoria"
        alt="UNISAGRADO: Pró-Reitoria de Extensão e Pastoral Universitária"
      />

      <h1>Professores</h1>
      <p>Prof. Dr. Élvio Gilberto da Silva</p>
      <p>Prof. Dra. Marcia Aparecida Nuevo Gatti</p>

      <h1>Disciplina</h1>
      <p>Desenvolvimento de Software</p>
      <p>Ciência da Computação - 3º Semestre</p>

      <h1>Alunos</h1>
      <p>Éder Fabiano da Silva</p>
      <p>Fabio Diogo Torres</p>
      <p>Táfnes Diogo Torres</p>
    </base-layout>
  </ion-page>
</template>

<script lang="ts">
import { IonPage } from "@ionic/vue";
import { ref, watch, watchEffect } from "vue";
import logoUSCEscuro from "@/assets/imagens/dark-mode/logo_usc.png";
import logoCursoEscuro from "@/assets/imagens/dark-mode/logo_curso.png";
import logoReitoriaEscuro from "@/assets/imagens/dark-mode/logo_reitoria.png";
import logoUSCClaro from "@/assets/imagens/logo_usc.png";
import logoCursoClaro from "@/assets/imagens/logo_curso.png";
import logoReitoriaClaro from "@/assets/imagens/logo_reitoria.png";

export default {
  components: {
    IonPage,
  },
  data() {
    return {
      logoUSC: logoUSCClaro,
      logoCurso: logoCursoClaro,
      logoReitoria: logoReitoriaClaro,
    };
  },
  mounted() {
    const prefereModoEscuro = window.matchMedia("(prefers-color-scheme: dark)");

    this.detectarModoClaroEscuro();

    watchEffect(() => {
      this.atualizarLogo(prefereModoEscuro.matches);
    });
  },
  methods: {
    detectarModoClaroEscuro() {
      this.atualizarLogo(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          this.atualizarLogo(event.matches);
        });
    },

    atualizarLogo(modoClaro: boolean) {
      if (modoClaro) {
        this.logoUSC = logoUSCEscuro;
        this.logoCurso = logoCursoEscuro;
        this.logoReitoria = logoReitoriaEscuro;
      } else {
        this.logoUSC = logoUSCClaro;
        this.logoCurso = logoCursoClaro;
        this.logoReitoria = logoReitoriaClaro;
      }
    },
  },
};
</script>
