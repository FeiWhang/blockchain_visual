import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Hash from "@/views/Hash.vue";
import Block from "@/views/Block.vue";
import Blockchain from "@/views/Blockchain.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/hash", component: Hash },
  { path: "/block", component: Block },
  { path: "/blockchain", component: Blockchain },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
