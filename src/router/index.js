import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StudentsView from "../views/Students/View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView
    }
  ]
})

export default router
