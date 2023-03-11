import { useProjectStore } from "@/stores/projects";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const pinia = createPinia();
const { projects } = useProjectStore(pinia);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

projects.forEach((project) => {
  const { day, title } = project;
  router.addRoute({
    path: `/day${day}`,
    name: `/day${day}`,
    component: () => import(`../views/day${day}-${title}/Day${day}Demo.vue`),
  });
});

export default router;
