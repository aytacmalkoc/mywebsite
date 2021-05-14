import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./mixin";

import BaseLayout from "./components/Base/BaseLayout.vue";

const app = createApp(App)
  .use(store)
  .use(router)
  .mixin(mixin)
  .mount("#app");

app.component("base-layout", BaseLayout);
