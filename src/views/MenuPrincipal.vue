<style scoped>
ion-content {
  --background: linear-gradient(
      180deg,
      rgba(0, 185, 250, 0.45) 23.43%,
      rgba(0, 185, 250, 0) 99.98%
    ),
    linear-gradient(
      360deg,
      rgba(255, 0, 0, 0.37) 55.1%,
      rgba(255, 0, 0, 0) 100%
    ),
    url(@/assets/imagens/background.png);
}

ion-grid {
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: space-around;
  gap: 7vh;
  padding: 0;
}

.menu-container {
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
}

ion-col.logo:before,
ion-col.logo:after {
  content: "";
  display: block;
  width: calc(50% - 389.5px);
  height: 100%;
  background-image: url(../assets/imagens/lei_lucas_line.png);
  background-size: contain;
}

@media (prefers-color-scheme: dark) {
  ion-content {
    --background: linear-gradient(
        180deg,
        rgba(31, 138, 175, 0.45) 23.43%,
        rgba(31, 138, 175, 0) 99.98%
      ),
      linear-gradient(
        360deg,
        rgba(165, 19, 19, 0.37) 55.1%,
        rgba(165, 19, 19, 0) 100%
      ),
      url("../assets/imagens/dark-mode/background.png");
  }

  ion-avatar {
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>

<template>
  <ion-page>
    <app-cabecalho />
    <ion-content>
      <ion-grid>
        <ion-row>
          <menu-principal-icones rota="MenuInformacoesPage" titulo="Conteúdo"
            ><img src="../assets/icons/conteudo.png" />
          </menu-principal-icones>
          <menu-principal-icones
            rota="https://www.google.com/maps/"
            titulo="Localização"
            :interno="false"
          >
            <img src="../assets/icons/localizacao.png"
          /></menu-principal-icones>
        </ion-row>
        <ion-row>
          <ion-col class="logo">
            <img src="/src/assets/imagens/lei_lucas.png" />
          </ion-col>
        </ion-row>
        <ion-row>
          <menu-principal-icones titulo="Lei Lucas" rota="LeiLucasPage">
            <img src="../assets/icons/lei.png" />
          </menu-principal-icones>
          <menu-principal-icones titulo="Créditos" rota="CreditosPage">
            <img src="../assets/icons/informacao.png" />
          </menu-principal-icones>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import AppCabecalho from "@/components/AppCabecalho.vue";
import MenuPrincipalIcones from "@/components/MenuPrincipalIcones.vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    AppCabecalho,
    MenuPrincipalIcones,
  },
};
</script>
