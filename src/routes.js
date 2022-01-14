import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: "/", 
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: { 
      title: "Home",
    } 
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About",
    },
    component: () => import("@/views/About.vue"),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/daftar",
    name: "daftar",
    meta: {
      title: "Daftar",
    },
    component: () => import("@/views/Daftar.vue"),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Masuk",
    },
    component: () => import("@/views/Login.vue"),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  { path: "/:path(.*)", component: NotFound },
];
