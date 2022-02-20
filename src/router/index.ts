import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Project from "@/views/Project.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/project",
    name: "Project",
    component: Project
  }
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes
});
