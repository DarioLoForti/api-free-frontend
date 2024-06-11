import { reactive } from "vue";

export const store = reactive({
  baseApiUrl: "https://localhost:3000",

  //   URL FOR POST

  posts: [],

  createPost: `${this.baseApiUrl}/posts`,

  readPosts: `${this.baseApiUrl}/posts`,

  updatePost: `${this.baseApiUrl}/posts`,

  deletePost: `${this.baseApiUrl}/posts`,

  //   URL FOR USER

  users: [],

  registerUser: `${this.baseApiUrl}/ahth/register`,

  loginUser: `${this.baseApiUrl}/auth/login`,

  //   URL FOR CATEGORY

  categories: [],

  createCategory: `${this.baseApiUrl}/categories`,

  readCategories: `${this.baseApiUrl}/categories`,

  updateCategory: `${this.baseApiUrl}/categories`,

  deleteCategory: `${this.baseApiUrl}/categories`,

  //   URL FOR TAGS

  tags: [],

  createTag: `${this.baseApiUrl}/tags`,

  readTags: `${this.baseApiUrl}/tags`,

  updateTag: `${this.baseApiUrl}/tags`,

  deleteTag: `${this.baseApiUrl}/tags`,
});
