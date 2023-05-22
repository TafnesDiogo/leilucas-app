<style>
ion-card-header + ion-card-content {
    padding-top: 0;
    text-align: justify;
    letter-spacing: -0.025em;
}

.card-content-md {
  margin: 0 25px 10px;
}
ion-card-header.md {
    margin-left: -5px;
}

.card-content-ios {
    margin: 0 20px 8px;
}
ion-card-header.ios {
    margin-left: -20px;
    text-align: center;
}
</style>

<template>
  <ion-card color="danger">
    <ion-card-header>
      <ion-card-title>
        <ion-icon :icon="warningSharp"></ion-icon>&nbsp;&nbsp;{{ tituloCallout }}
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
        <slot />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { warningSharp } from "ionicons/icons";
import { 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon
} from '@ionic/vue';

export default defineComponent({
    props: ["tituloCallout"],
    name: "callout-atencao",
    components: {
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardTitle,
      IonIcon
    },
    setup() {
      return { warningSharp };
    },
});

</script>