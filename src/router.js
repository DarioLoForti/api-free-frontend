import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import CreatePost from "./pages/CreatePost.vue";
import CreateCategory from "./pages/CreateCategory.vue";
import CreateTag from "./pages/CreateTag.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/create-post",
      name: "create-post",
      component: CreatePost,
    },
    {
      path: "/create-category",
      name: "create-category",
      component: CreateCategory,
    },
    {
      path: "/create-tag",
      name: "create-tag",
      component: CreateTag,
    },
  ],
});

export { router };
