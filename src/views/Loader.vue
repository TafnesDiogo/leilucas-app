<template>
    <div class="progresso-container">
        <ion-spinner name="bubbles"></ion-spinner>
    </div>
</template>

<style scoped>
.progresso-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>

<script>
import { IonSpinner } from "@ionic/vue";
export default {
    name: "Loader",
    components: {
        IonSpinner,
    }.
}
</script>