<style>
p, h1, h2, h3, h4, h5 {
  padding: 0 16px;
}

p, li {
    line-height: 1.5em;
}
</style>

<template>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="paginaRetorno"></ion-back-button>
                </ion-buttons>
                <ion-title> {{ tituloPagina }} </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton
} from "@ionic/vue";

export default defineComponent ({
    props: {
        tituloPagina: String,
        paginaRetorno: {
            type: String,
            default: "/info"
        }
    },
    name: 'info-base-layout',
    components: {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButtons,
        IonBackButton
    },
})
</script>