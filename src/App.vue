<style scoped>
.emergencia-container + ion-footer {
  position: fixed;
  bottom: 0;
}

img.header-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  width: calc(100% - 96px);
  max-width: 264px;
}

ion-app.ios img.header-img {
  top: 4px;
}

ion-app.md img.header-img {
  top: 15px;
}

ion-header {
  z-index: -1;
}
</style>

<template>
  <ion-app>
  <img src="@/assets/imagens/header.png" class="header-img" />
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title />
      </ion-toolbar>
    </ion-header>
    <ion-router-outlet> </ion-router-outlet>
    <app-rodape />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import AppRodape from "./components/AppRodape.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { IonApp, IonRouterOutlet, AppRodape,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  },
});
</script>
