import Vue from 'vue';
import VueRouter from 'vue-router';
import Survey from '@/views/survey';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'survey',
    component: Survey,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
