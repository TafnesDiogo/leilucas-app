<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home" href="#">
            <ion-label>Sobre o App</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="library" href="#">
            <ion-icon name="add-circle-sharp" aria-hidden="true" />
            <ion-label>Emergência</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="#">
            <ion-label>Como usar</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { addCircle } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          addCircle,
        };
      },
    };
  </script>