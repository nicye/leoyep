import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Action from "../views/Action.vue";
import project from "../views/project.vue";
import works from "../views/works.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/3d",
    name: "3d",
    component: Action
  },
  {
    path: "/project",
    name: "Project",
    component: project
  },
  {
    path: "/works",
    name: "works",
    component: works
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
