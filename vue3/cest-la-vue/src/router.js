import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/users",
    component: () => import("@/views/UsersList.vue"),
  },
  {
    path: "/users/:id",
    component: () => import("@/views/User.vue"),
  },
];

export default routes;
