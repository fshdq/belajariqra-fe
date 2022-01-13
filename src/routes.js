import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: "/", 
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { 
      title: "Home",
      layout: "default-layout", 
    } 
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About",
      layout: "default-layout",
    },
    component: () => import("@/views/About.vue"),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  { path: "/:path(.*)", component: NotFound },
];
