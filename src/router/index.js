import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/Users/View.vue";
import UserCreate from "../views/Users/Create.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/create',
      name: 'usersCreate',
      component: UserCreate
    }
  ]
})

export default router
