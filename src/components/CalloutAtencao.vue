<style>
ion-card-header + ion-card-content {
    padding-top: 0;
    text-align: justify;
    letter-spacing: -0.025em;
}

.card-content-ios {
    margin: 0 20px 8px;
}

ion-card-header.ios {
    margin-left: -35px;
    text-align: center;
}

ion-card-title.ios ion-icon {
    width: 25px;
    margin-right: 10px;
}

ion-card.md {
    margin: 10px 0;
}

.card-content-md {
  margin: 0 25px 10px;
}

ion-card-header.md {
    margin-left: -5px;
}

ion-card-title.md {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    gap: 0.3em;
}

ion-card-title ion-icon.md {
    align-self: flex-start;
    font-size: 2em;
    height: 25px;
}
</style>

<template>
  <ion-card color="danger">
    <ion-card-header>
      <ion-card-title>
        <ion-icon :icon="warningSharp"></ion-icon>{{ titulo }}
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
    props: ["titulo"],
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