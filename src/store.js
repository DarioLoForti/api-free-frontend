import { reactive } from "vue";

export const store = reactive({
  // //   URL FOR POST

  createPost: "http://localhost:3000/posts",
  readPosts: "http://localhost:3000/posts",
  updatePost: "http://localhost:3000/posts",
  deletePost: "http://localhost:3000/posts",

  posts: [],

  //   URL FOR USER

  registerUser: "http://localhost:3000/auth/register",
  loginUser: "http://localhost:3000/auth/login",

  users: [],

  // //   URL FOR CATEGORY

  createCategory: "http://localhost:3000/categories",
  readCategories: "http://localhost:3000/categories",
  updateCategory: "http://localhost:3000/categories",
  deleteCategory: "http://localhost:3000/categories",

  categories: [],

  // //   URL FOR TAGS

  createTag: "http://localhost:3000/tags",
  readTags: "http://localhost:3000/tags",
  updateTag: "http://localhost:3000/tags",
  deleteTag: "http://localhost:3000/tags",

  selectedTags: [],
});
