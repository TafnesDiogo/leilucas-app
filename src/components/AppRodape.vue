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
  width: 38vw;
  text-align: center;
  --color: var(--ion-color-primary-contrast);
}

.md.in-toolbar ion-button:nth-of-type(1) {
  text-align: right;
}

.md.in-toolbar ion-button:nth-of-type(2) {
  text-align: left;
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
  overflow: hidden;
  border-radius: 50%;
}

.emergencia-container img:hover {
  cursor: pointer;
}

ion-buttons ion-button {
  --color: var(--ion-color-primary-contrast) !important;
  font-family: Mali;
  text-transform: none;
  font: normal 1em Mali;
}
</style>

<style>
.alert-button.sc-ion-alert-md {
  color: var(--ion-color-secondary);
}

@media (prefers-color-scheme: dark) {
  .alert-button.sc-ion-alert-md {
    color: #549fd9;
  }
}
</style>

<template>
  <ion-alert
    trigger="aviso-ligacao"
    header="Aviso"
    sub-header="Você está prestes a ligar para o serviço de emergência"
    message="Mantenha a calma, verifique sua localização, e responda apenas o que lhe for perguntado, isso irá agilizar o atendimento."
    :buttons="botoesAlerta"
  />
  <ion-action-sheet
    trigger="confirmar-ligacao"
    header="Ligar para emergência"
    sub-header="Selecione o número"
    :buttons="botoesActionSheet"
  />
  <div class="emergencia-container ion-activatable" id="aviso-ligacao">
    <img :src="botaoEmergenciaImagem" />
    <ion-ripple-effect />
  </div>
  <ion-footer>
    <ion-toolbar color="primary">
      <ion-buttons slot="start" :router-link="{ name: 'SobrePage' }">
        <ion-button>Sobre o App</ion-button>
      </ion-buttons>

      <ion-title />

      <ion-buttons slot="end" :router-link="{ name: 'ComoUsarPage' }">
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
  IonActionSheet,
  IonAlert,
  IonRippleEffect,
} from "@ionic/vue";
import { addCircleSharp } from "ionicons/icons";
import { actionSheetController } from "@ionic/core";
import { watchEffect } from "vue";
import botaoClaro from "../assets/imagens/emergencia.png";
import botaoEscuro from "../assets/imagens/dark-mode/emergencia.png";

export default {
  components: {
    IonFooter,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    IonIcon,
    IonActionSheet,
    IonAlert,
    IonRippleEffect,
  },

  setup() {
    const presentActionSheet = async () => {
      const actionSheet = await actionSheetController.create({
        header: "Ligar para emergência",
        subHeader: "Selecione o número",
        buttons: [
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
        ],
      });
      await actionSheet.present();
    };

    const confirmarLigacao = () => {
      presentActionSheet();
    };

    const botoesAlerta = [
      {
        text: "Cancelar",
        role: "cancel",
      },
      {
        text: "Confirmar",
        handler: confirmarLigacao,
      },
    ];

    const botoesActionSheet = [
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

    return { botoesAlerta, botoesActionSheet };
  },

  data() {
    return {
      addCircleSharp,
      botaoEmergenciaImagem: botaoClaro,
    };
  },
  mounted() {
    const prefereModoEscuro = window.matchMedia("(prefers-color-scheme: dark)");

    this.detectarModoClaroEscuro();

    watchEffect(() => {
      this.atualizarImagemBotao(prefereModoEscuro.matches);
    });
  },
  methods: {
    detectarModoClaroEscuro() {
      this.atualizarImagemBotao(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );

      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          this.atualizarImagemBotao(event.matches);
        });
    },

    atualizarImagemBotao(modoEscuro: boolean) {
      if (modoEscuro) {
        this.botaoEmergenciaImagem = botaoEscuro;
      } else {
        this.botaoEmergenciaImagem = botaoClaro;
      }
    },
  },
};
</script>
