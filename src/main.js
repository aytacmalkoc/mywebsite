import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./mixin";
import LoadScript from "vue-plugin-load-script";
import BaseLayout from "./components/Base/BaseLayout.vue";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(LoadScript)
  .component("base-layout", BaseLayout)
  .mixin(mixin)
  .mount("#app");
