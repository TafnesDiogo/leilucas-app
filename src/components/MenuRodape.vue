<template>
  <ion-action-sheet
    trigger="confirmar-ligacao"
    header="Atenção"
    sub-header="Você está prestes a ligar para o socorro médico"
    message="Se deseja prosseguir, aperte em Confirmar. Com calma, informe seu nome, cidade e endereço para que o atendente possa te localizar. Responda a todas as perguntas."
    :buttons="actionSheetButtons"
  ></ion-action-sheet>
  <div class="emergencia-container">
    <img src="../../public/emergencia.png" id="confirmar-ligacao" />
  </div>
  <ion-footer>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <router-link :to="{ name: 'Sobre' }">
          <ion-button>Sobre o App</ion-button>
        </router-link>
      </ion-buttons>

      <ion-title />

      <ion-buttons slot="end">
        <router-link :to="{ name: 'ComoUsar' }">
          <ion-button>Como usar</ion-button>
        </router-link>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import {
  IonFooter,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonIcon,
  IonActionSheet
} from "@ionic/vue";
import { addCircleSharp } from "ionicons/icons";

export default {
  components: {
    IonFooter,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonIcon,
    IonActionSheet,
  },

  setup() {
    const actionSheetButtons = [
      {
        text: "SAMU 192",
        handler: () => {
          window.open("tel:192", "_system");
        },
      },
      {
        text: "Bombeiros 193",
        handler: () => {
          window.open("tel:193", "_system");
        },
      },
      {
        text: "Cancelar",
        role: "cancel",
      },
    ];
    return { actionSheetButtons };
  },

  data() {
    return {
      addCircleSharp,
    };
  },
};
</script>

<style scoped>
ion-title#confirmar-ligacao {
  display: block;
  height: 100%;
  position: absolute;
  padding: 0;
  bottom: 0;
  max-width: 90px;
  margin: auto;
  left: 50%;
  transform: translateX(-50%);
}
.md.in-toolbar ion-button,
ion-title {
  width: calc(33vw - 8px);
  text-align: center;
  --color: var(--ion-color-primary-contrast);
}

.emergencia-container {
  width: 25vw;
  max-width: 90px;
  height: auto;
  position: fixed;
  bottom: 0;
  z-index: 11;
  left: 50%;
  transform: translateX(-50%);
}

.emergencia-container img:hover {
  cursor: pointer;
}

ion-buttons ion-button {
    --color: var(--ion-color-primary-contrast)!important;
}
</style>