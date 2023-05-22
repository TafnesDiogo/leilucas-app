import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import InfoBaseLayout from './components/InfoBaseLayout.vue';
import MensagemAviso from './components/MensagemAviso.vue';
import InfoAccordion from './components/InfoAccordion.vue';
import CalloutAtencao from './components/CalloutAtencao.vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('info-base-layout', InfoBaseLayout);
app.component('mensagem-aviso',  MensagemAviso);
app.component('info-accordion', InfoAccordion);
app.component('callout-atencao', CalloutAtencao);
  
router.isReady().then(() => {
  app.mount('#app');
});