import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    name: 'takeSurvey',
    path: '/survey-frontend-survey/:surveyId',
    component: () => import('./views/TakeSurvey/TakeSurvey.vue'),
    props: true
  },
  {
    name: 'responseRecorded',
    path: '/survey-frontend-survey/response-recorded',
    component: () => import('./views/ResponseRecorded/ResponseRecorded.vue'),
    props: true
  },
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend-survey/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;