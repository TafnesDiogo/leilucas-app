<style>
.emergencia-container + ion-footer {
  position: fixed;
  bottom: 0;
}
</style>

<template>
  <ion-app>
      <ion-router-outlet />
    <menu-rodape />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonContent } from "@ionic/vue";
import MenuRodape from "./components/MenuRodape.vue";
import { defineComponent } from "vue";
/*
  import { SplashScreen } from '@capacitor/splash-screen';

  await SplashScreen.show({
    showDuration: 3000,
    autoHide: true,
  });*/

export default defineComponent({
  name: "App",
  components: { IonApp, IonRouterOutlet, MenuRodape, IonContent },
});
</script>
