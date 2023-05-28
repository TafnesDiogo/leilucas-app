import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuPrincipal from '../views/MenuPrincipal.vue';
import InfoPage from '../views/InfoPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Inicio',
    redirect: '/inicio',
  },
  {
    path: '/inicio',
    component: MenuPrincipal,
  },
  {
    path: '/sobre',
    name: 'SobrePage',
    component: () => import ('../views/Sobre.vue')
  },
  {
    path: '/como-usar',
    name: 'ComoUsarPage',
    component: () => import ('../views/ComoUsar.vue')
  },
  {
    path: '/creditos',
    name: 'CreditosPage',
    component: () => import ('../views/Creditos.vue')
  },
  {
    path: '/info',
    name: 'MenuInformacoesPage',
    component: () => import ('../views/MenuInformacoes.vue')
  },
  {
    path: '/info/:id',
    component: InfoPage,
    name: 'InfoPage',
    props: true,
  },
  {
    path: '/leilucas',
    name: 'LeiLucasPage',
    component: () => import ('../views/LeiLucas.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
