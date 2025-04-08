function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "team",
    path: "/team",
    component: () => import("../pages/team.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "events",
    path: "/events",
    component: () => import("../pages/events.vue.mjs")
  },
  {
    name: "clients",
    path: "/clients",
    component: () => import("../pages/clients.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_C__Users_user_OneDrive_Desktop_Files_Website_my-company-site_.nuxt_routes.mjs.map
