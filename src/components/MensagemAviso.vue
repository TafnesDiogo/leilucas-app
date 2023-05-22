<template>
    <p>
      Caso você se depare com {{ tipoEmergencia }} chame ajuda especializada:
      Se há alguém com você, peça para que a pessoa ligue para o serviço de
      emergência (SAMU: 192 ou Corpo de Bombeiros: 193) e forneça o
      <b
        >endereço completo, nome da cidade, rua e número, além de qualquer ponto
        de referência</b
      >
      que possa ajudar a localizar o <b>local</b>.
    </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: ['tipoEmergencia'],
    name: 'mensagem-aviso',
});
</script>