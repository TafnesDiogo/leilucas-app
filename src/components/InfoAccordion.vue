<style scoped>
ion-card-header + .card-content-md {
  padding-top: 0;
  margin: 0 20px 8px;
  text-align: justify;
  letter-spacing: -0.025em;
}
</style>

<template>
  <ion-accordion>
    <ion-item slot="header" color="light">
      <ion-label>{{ tituloAccordion }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
      <slot />
    </div>
  </ion-accordion>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
    IonAccordion,
    IonItem,
    IonLabel
} from "@ionic/vue";

export default defineComponent({
  props: ["tituloAccordion"],
  name: "info-accordion",
  components: {
    IonAccordion,
    IonItem,
    IonLabel
  }
});
</script>
