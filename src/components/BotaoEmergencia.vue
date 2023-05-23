<template>
  <ion-alert
    trigger="present-alert"
    header="Atenção"
    subheader="Você está prestes a ligar para o socorro médico"
    message="Se deseja prosseguir, aperte em Confirmar. Com calma, informe seu nome, cidade e endereço para agilizar o atendimento. Responda a todas as perguntas."
    :buttons="alertButtons"
  ></ion-alert>
</template>

<script lang="ts">
import { IonAlert } from "@ionic/vue";

export default {
  components: {
    IonAlert,
  },
  setup() {
    const alertButtons = [
      {
        text: "Cancelar",
        role: "cancelar",
      },
      {
        text: "Confirmar",
        role: "confirmar",
      },
    ];

    return { alertButtons };
  },
};
</script>
