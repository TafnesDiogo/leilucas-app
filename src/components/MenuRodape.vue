<style scoped>
.md.in-toolbar ion-button,
ion-title {
  min-width: 33vw;
  text-align: center;
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
</style>

<template>
  <ion-alert
    trigger="confirmar-ligacao"
    header="Atenção"
    sub-header="Você está prestes a ligar para o socorro médico"
    message="Se deseja prosseguir, aperte em Confirmar. Com calma, informe seu nome, cidade e endereço para que o atendente possa te localizar. Responda a todas as perguntas."
    :buttons="alertButtons"
  ></ion-alert>
  <div class="emergencia-container" id="confirmar-ligacao">
      <img src="../../public/emergencia.png" />
  </div>
  <ion-footer>
    <ion-toolbar>
      <ion-buttons slot="start">
        <router-link :to="{ name: 'Sobre' }">
          <ion-button>Sobre o App</ion-button>
        </router-link>
      </ion-buttons>

      <ion-title />

      <ion-buttons slot="end">
        <ion-button>Como usar</ion-button>
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
  },

  setup() {
    const alertButtons = [
      {
        text: "Cancelar",
        role: "cancel",
      },
      {
        text: "Confirmar",
        handler: () => { window.open('tel:193', '_system'); },
      },
    ];
    return { alertButtons };
  },

  data() {
    return {
      addCircleSharp,
    };
  },
};

</script>
