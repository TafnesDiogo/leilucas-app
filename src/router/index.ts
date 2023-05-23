import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuPrincipal from '../views/MenuPrincipal.vue';

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
    name: 'Sobre',
    component: () => import ('../views/Sobre.vue'),
  },
  {
    path: '/loader',
    component: () => import ('../views/Loader.vue'),
  },
  {
    path: '/info',
    name: 'MenuInformacoesPage',
    component: () => import ('../views/MenuInformacoes.vue')
  },
  {
    path: '/info/Engasgamento',
    name: 'EngasgamentoPage',
    component: () => import ('../views/info/engasgamento.vue')
  },
  {
    path: '/info/QuedascomTraumas',
    name: 'QuedasPage',
    component: () => import ('../views/info/queda.vue')
  },
  {
    path: '/info/CriseConvulsiva',
    name: 'CriseConvulsivaPage',
    component: () => import ('../views/info/criseConvulsiva.vue')
  },
  {
    path: '/info/Hemorragias',
    name: 'HemorragiasPage',
    component: () => import ('../views/info/hemorragias.vue')
  },
  {
    path: '/info/PCR',
    name: 'PCRpage',
    component: () => import ('../views/info/pcr.vue')
  },
  {
    path: '/info/Queimaduras',
    name: 'QueimadurasPage',
    component: () => import ('../views/info/queimaduras.vue')
  },
  {
    path: '/info/AnimaisPeçonhentos',
    name: 'AnimaisPeconhentosPage',
    component: () => import ('../views/info/animaisPeconhentos.vue')
  },
  {
    path: '/info/EngasgamentoBebe',
    name: 'EngasgamentoBebePage',
    component: () => import ('../views/info/engasgamentoBebe-layout.vue')
  },
  {
    path: '/LeiLucas',
    name: 'LeiLucas',
    component: () => import ('../views/LeiLucas.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
