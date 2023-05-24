<style scoped>
ion-content {
  overflow: hidden;
}
.menu-container {
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
}
</style>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="menu-container">
        <ion-button expand="block" router-link="/info">Conteúdo</ion-button>
        <ion-button expand="block" router-link="/info">Vídeos</ion-button>
        <ion-button expand="block" router-link="LeiLucas">Lei Lucas</ion-button>
        <ion-button expand="block" router-link="Creditos">Créditos</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton } from "@ionic/vue";
import MenuRodape from "@/components/MenuRodape.vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    MenuRodape,
  },
};
</script>
