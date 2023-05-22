<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <router-link to="/sobre">
          <ion-tab-button tab="sobre">
            <ion-label>Sobre o App</ion-label>
          </ion-tab-button>
        </router-link>

        <router-link to="/emergencia">
          <ion-tab-button tab="emergencia">
            <ion-icon name="add-circle-sharp" aria-hidden="true" />
            <ion-label>Emergência</ion-label>
          </ion-tab-button>
        </router-link>

        <router-link to="/ajuda">
          <ion-tab-button tab="ajuda">
            <ion-label>Como usar</ion-label>
          </ion-tab-button>
        </router-link>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/vue";

import { addCircle } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon,
  },
  data() {
    return {
      addCircle,
    };
  },
};
</script>
