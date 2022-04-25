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
    path: "/project/:id",
    name: "Project",
    props: route =>({id: parseInt(route.params.id)}), //change from string to integer
    component: () =>
      import(/* webpackChunkName: "project" */ "../components/TheProject.vue"),
  },

    




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
