<style>
ion-card-header + .card-content-md {
  padding-top: 0;
  margin: 0 20px 8px;
  text-align: justify;
  letter-spacing: -0.025em;
}

ion-accordion {
  text-align: justify;
}

ion-accordion .ion-padding *:first-child {
    margin-top: 0;
}

ion-accordion .ion-padding *:last-child {
    margin-bottom: 0;
}

ion-accordion h2 {
  text-align: left;
}

ion-accordion-group:last-child {
    margin: 0 0 8px;
}

ion-accordion-group:last-child ion-accordion.accordion-expanded:last-child {
    margin-bottom: -5px;
}

@media (prefers-color-scheme: dark) {
  div[slot='content'] {
    background: rgba(var(--ion-color-light-rgb),0.25);
}
}
</style>

<template>
  <ion-accordion>
    <ion-item slot="header" :color="color">
      <ion-label>{{ titulo }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
      <slot />
    </div>
  </ion-accordion>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonAccordion, IonItem, IonLabel } from "@ionic/vue";

export default defineComponent({
  props: {
    titulo: String,
    color: {
      type: String,
      default: "light",
    },
  },
  name: "info-accordion",
  components: {
    IonAccordion,
    IonItem,
    IonLabel,
  },
});
</script>
