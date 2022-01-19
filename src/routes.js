import NotFound from "./views/NotFound.vue";
import DefaultLayout from './layouts/DefaultLayout.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',    
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
      layout: DefaultLayout,
    }
  },
  {
    path: '/kursus',    
    name: "kursus",
    component: () => import("@/views/Kursus.vue"),
    meta: {
      title: "Kursus",
      layout: DefaultLayout,
    }
  },
  {
    path: "/daftar",
    name: "daftar",
    meta: {
      title: "Daftar",
      layout: DefaultLayout,
    },
    component: () => import("@/views/Daftar.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Masuk",
    },
    component: () => import("@/views/Login.vue"),
  },
  { path: "/:path(.*)", component: NotFound },
];
