import Vue from 'vue';
import VueRouter from 'vue-router';
import SurveyColor from '@/views/survey/color';
import SurveyShape from '@/views/survey/shape';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
