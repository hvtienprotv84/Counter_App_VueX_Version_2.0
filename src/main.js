import { createApp } from "vue";
import App from "./App.vue";
// import router from "./router";
// import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import router from "./router";
// import Counter from "@/components/Counter.vue";
// import NotFound from "@/components/NotFound.vue";
import "./assets/main.css";


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: "/",
//       name: "Counter",
//       component: Counter,
//     },
//     {
//       path: "/counter",
//       name: "Counter",
//       component: Counter,
//     },
//     {
//       path: "/:catchAll(.*)",
//       name: "NotFound",
//       component: NotFound,
//     },
//   ],
// });

createApp(App).use(store).use(router).mount("#app");
