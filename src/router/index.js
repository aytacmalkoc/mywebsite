import { createRouter, createWebHistory } from "vue-router";
import Blog from "../views/Blog.vue";
import BlogDetail from "../views/BlogDetail.vue";
import OpenSource from "../views/OpenSource.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: Blog,
  // },
  // {
  //   path: "/blog/:slug",
  //   name: "BlogDetail",
  //   component: BlogDetail,
  // },
  {
    path: "/open-source",
    name: "OpenSource",
    component: OpenSource,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
