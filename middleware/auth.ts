// import { useUserStore } from "~~/stores/userStore";

// import { createPinia } from "pinia";
import { useUserStore } from "~~/stores/userStore";

export default defineNuxtRouteMiddleware((to) => {
  const app = useNuxtApp();
  const userStore = useUserStore(app.$pinia);
  if (userStore.currentUser !== null) return;

  return navigateTo(`/login?redirect=${to.fullPath}`);
});

//create middleware that checks if meta requiresAuth is true
// const pinia = createPinia();
// const app = useNuxtApp();
// const userStore = useUserStore();

// export default defineNuxtRouteMiddleware((to) => {
//   console.log("test");
//   // app.vueApp.use(pinia);
//   // if (to.meta.requiresAuth && userStore.currentUser === null) {
//   //   return navigateTo(`/login?redirect=${to.fullPath}`);
//   // }
//   // return;
// });
