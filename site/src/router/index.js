import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/sobre_nos',
      name: 'Sobre Nós',
      component: () => import('../views/SobreNos.vue'),
    },
    { 
      path: '/moradores',
      name: 'Moradores',
      component: () => import('../views/Moradores.vue'),
    },
  ],
});
