import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/hash", component: () => import("@/views/Hash.vue") },
  { path: "/block", component: () => import("@/views/Block.vue") },
  { path: "/blockchain", component: () => import("@/views/block.vue") },
  { path: "/coin", component: () => import("@/views/block.vue") },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
