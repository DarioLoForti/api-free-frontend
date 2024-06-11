import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import Register from "./pages/Register.vue";
import CreateCategory from "./pages/CreateCategory.vue";
import CreateTag from "./pages/CreateTag.vue";
import Posts from "./pages/Posts.vue";
// import CreatePost from "./pages/CreatePost.vue";

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
    // {
    //   path: "/create-post",
    //   name: "create-post",
    //   component: CreatePost,
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login,
    // },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
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
