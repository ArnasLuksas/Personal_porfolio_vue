import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () =>
      import(/* webpackChunkName: "contacts" */ "../views/Contacts.vue"),
  },

  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "../views/Projects.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () =>
      import(/* webpackChunkName: "skills" */ "../views/Skills.vue"),
  },
  {
    path: '/portfolio',
    name: "Portfolio",
    beforeEnter() {
      window.open("https://www.arnasluksas.lt",
        '_blank');
    },
  },
  {
    path: '/linkedin',
    name: "Linkedin",
    beforeEnter() {
      window.open("https://www.linkedin.com/in/arnasluksas/",
        '_blank');
    },
  },
  {
    path: '/github',
    name: "Github",
    beforeEnter() {
      window.open("https://github.com/ArnasLuksas",
        '_blank');
    },
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
