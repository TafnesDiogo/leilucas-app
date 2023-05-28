<style scoped>
ion-toolbar {
  --background: transparent;
  background: transparent !important;
  visibility: hidden;
}

ion-back-button {
  visibility: visible !important;
}
</style>

<template>
  <ion-header>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-back-button />
      </ion-buttons>
      <ion-title />
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { arrowBackOutline } from "ionicons/icons";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";

export default defineComponent({
  name: "app-cabecalho",
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonButton,
    IonIcon,
  },
  setup() {
    return { arrowBackOutline };
  },
});
</script>
