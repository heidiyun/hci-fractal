import Vue from 'vue';
import VueRouter from 'vue-router';
import SurveyColor from '@/views/survey/color';
import SurveyShape from '@/views/survey/shape';
import Fractal from '@/views/fractal';

Vue.use(VueRouter);

const routes = [
  {
    path: '/survey/color',
    name: 'survey-color',
    component: SurveyColor,
  },
  {
    path: '/survey/shape',
    name: 'survey-shape',
    component: SurveyShape,
  },
  {
    path: '/fractal',
    name: 'fractal',
    component: Fractal,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
