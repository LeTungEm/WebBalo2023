import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/User/Homepage/Homepage.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/User/About/About.vue"
      ),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../components/User/Shop/Shop.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/User/Cart/Cart.vue"),
  },
  {
    path: "/shopdetail/:id",
    name: "shopdetail",
    component: () => import("../components/User/Shop/ShopDetail.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../components/User/Blog/Blog.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../components/User/Contact/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/User/Login/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/User/Login/Register.vue"),
  },
  // Admin
  {
    path: "/admin",
    name: "admin",
    component: () => import("../components/Admin/Homepage/Dashboard.vue"),
  },

  {
    path: "/adminBlog",
    name: "adminBlog",
    component: () => import("../components/Admin/Blog/Index.vue"),
  },
  {
    path: "//adminContact",
    name: "/adminContact",
    component: () => import("../components/Admin/Contact/Index.vue"),
  },
  {
    path: "/adminAbout",
    name: "adminAbout",
    component: () => import("../components/Admin/About/Index.vue"),
  },
  {
    path: "/adminProduct",
    name: "adminProduct",
    component: () => import("../components/Admin/Product/Product.vue"),
  },
  {
    path: "/adminAuthentication",
    name: "adminAuthentication",
    component: () => import("../components/Admin/Authentication/Index.vue"),
  },
  // 404 Page
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../components/User/Page404/PageNotFound"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
