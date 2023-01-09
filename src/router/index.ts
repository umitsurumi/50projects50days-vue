import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
]
})

for(let i = 1;i<=50;i++){
  router.addRoute(   {
        path: `/day${i}`,
        name: `/day${i}`,
        component: () => import(`../views/Day${i}View.vue`)
      })
}
export default router
