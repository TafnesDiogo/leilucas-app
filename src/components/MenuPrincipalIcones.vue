<style>
ion-col {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0;
}

ion-avatar {
  background: white;
  padding: 10px;
  width: 96px;
  height: 96px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

ion-avatar img {
  height: auto;
}

ion-avatar a img {
  width: 100%;
}

@media (orientation: landscape) {
  ion-avatar.md {
    max-width: 20vmin;
    max-height: 20vmin;
}
}
</style>

<template>
  <ion-col>
    <ion-avatar class="ion-activatable" :aria-label="titulo">
      <router-link :to="{ name: rota }" v-if="interno">
        <slot />
        <ion-ripple-effect></ion-ripple-effect>
      </router-link>
      <a :href="rota" target="_blank" v-else>
        <slot />
        <ion-ripple-effect></ion-ripple-effect
      ></a>
    </ion-avatar>
  </ion-col>
</template>

<script lang="ts">
import { IonCol, IonAvatar, IonRippleEffect } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "menu-principal-icones",
  props: {
    titulo: { type: String },
    rota: { type: String },
    interno: { type: Boolean, default: true },
  },
  component: {
    IonCol,
    IonAvatar,
    IonRippleEffect,
  },
});
</script>
