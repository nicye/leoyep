import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Action from "../views/Action.vue";
import Storyboard from "../views/storyboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/action",
    name: "Action",
    component: Action
  },
  {
    path: "/project",
    name: "Project",
    component: Storyboard
  },
  {
    path: "/"
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
