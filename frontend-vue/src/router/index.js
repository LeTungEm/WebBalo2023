import { createRouter, createWebHistory } from "vue-router";
import VueCookie from "vue-cookie";
const getRole = VueCookie.get("roleID");


const requireAdmin = (to, from, next) => {
  if (VueCookie.get("roleID") == 1 || sessionStorage.getItem("roleID") == 1) {
    next();
  } else {
    next("/", "/");
  }
};
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
    beforeEnter: requireAdmin,
  },

  {
    path: "/adminBlog",
    name: "adminBlog",
    component: () => import("../components/Admin/Blog/Index.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "//adminContact",
    name: "/adminContact",
    component: () => import("../components/Admin/Contact/Index.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/adminAbout",
    name: "adminAbout",
    component: () => import("../components/Admin/About/Index.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/adminProduct",
    name: "adminProduct",
    component: () => import("../components/Admin/Product/Index.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/adminAccount",
    name: "adminAccount",
    component: () => import("../components/Admin/Account/Index.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/createAbout",
    name: "createAbout",
    component: () => import("../components/Admin/About/About.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/createAccount",
    name: "createAccount",
    component: () => import("../components/Admin/Account/Account.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/createPage",
    name: "createPage",
    component: () => import("../components/Admin/Blog/Blog.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/createContact",
    name: "createContact",
    component: () => import("../components/Admin/Contact/Contact.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/createProduct",
    name: "createProduct",
    component: () => import("../components/Admin/Product/Product.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../components/Admin/Table/CRUD.vue"),
    beforeEnter: requireAdmin,
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = VueCookie.get("isAuthenticated");
  const roleID = getRole;

  if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (!isAuthenticated || roleID !== 1) {
      next({ name: "home" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresUser)) {
    if (!isAuthenticated || roleID !== 3) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
