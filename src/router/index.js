import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../routes/Home.vue";
import Login from "../routes/Login.vue";
import Product from "../routes/Product.vue";
import CameraSearch from "../routes/CameraSearch.vue";
import Search from "@/routes/Search.vue";
import Recipe from "@/routes/Recipe.vue";
import Favorites from "@/routes/Favorites.vue";
import MyRecipes from "@/routes/MyRecipes.vue";
import AddRecipe from "@/routes/AddRecipe.vue";
import User from "@/routes/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/search",
    name: "Buscar",
    component: Search,
  },
  {
    path: "/search/:searchText",
    name: "BuscarByText",
    component: Search,
  },
  {
    path: "/camera-search",
    name: "Buscar por imagen",
    component: CameraSearch,
  },
  {
    path: "/product/:id",
    name: "ProductById",
    component: Product,
  },
  {
    path: "/recipe/:id",
    name: "RecipeById",
    component: Recipe,
  },
  {
    path: "/recipe",
    name: "Recipe",
    component: Recipe,
  },
  {
    path: "/favorites",
    name: "Favoritos",
    component: Favorites,
  },
  {
    path: "/myrecipes",
    name: "Mis recetas",
    component: MyRecipes,
  },
  {
    path: "/addrecipe",
    name: "Agregar receta",
    component: AddRecipe,
  },
  {
    path: "/edituser",
    name: "Usuario",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
